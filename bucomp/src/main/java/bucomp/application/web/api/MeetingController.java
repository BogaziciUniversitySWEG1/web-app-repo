package bucomp.application.web.api;

import java.text.ParseException;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.mail.SMTPMailSender;
import bucomp.application.model.Meeting;
import bucomp.application.model.MeetingInvitee;
import bucomp.application.model.Resource;
import bucomp.application.model.User;
import bucomp.application.web.api.dao.CommunityDao;
import bucomp.application.web.api.dao.CommunityDaoImpl;
import bucomp.application.web.api.dao.MeetingDao;
import bucomp.application.web.api.dao.MeetingDaoImpl;
import bucomp.application.web.api.dao.MeetingInviteeDao;
import bucomp.application.web.api.dao.MeetingInviteeDaoImpl;
import bucomp.application.web.api.dao.ResourceDao;
import bucomp.application.web.api.dao.ResourceDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class MeetingController {
	
	@Autowired
	SMTPMailSender smtpMailSender;

	private MeetingDao meetingDao = new MeetingDaoImpl();
	private MeetingInviteeDao midao = new MeetingInviteeDaoImpl();
	private UserDao udao = new UserDaoImpl();
	private CommunityDao cdao = new CommunityDaoImpl();
	private ResourceDao rdao = new ResourceDaoImpl();

	/**
	 * 
	 * @param communityId
	 * @param status: -1: All Meetings, 0: Not started, 1:active, 2:finished, 3: cancelled
	 * @return
	 */
	@RequestMapping(value = "/api/meetings/{communityId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Meeting>> getCommunityMeetings(
			@PathVariable("communityId") Integer communityId,
			@RequestParam(value = "status", required=false) Integer status) {
		List<Meeting> meetings = meetingDao.getCommunityMeetings(communityId,status);
		if (meetings == null) {
			return new ResponseEntity<Collection<Meeting>>(
					HttpStatus.NO_CONTENT);
		}
		for (Iterator<Meeting> iterator = meetings.iterator(); iterator.hasNext();) {
			Meeting meeting = iterator.next();
			meeting.setInviteeList(midao.getMeetingInvitees(meeting.getMeetingId()));
		}
		return new ResponseEntity<Collection<Meeting>>(meetings, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/meetings", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting>  createMeeting(@RequestBody Meeting meeting) throws ParseException {

		Meeting savedMeeting = meetingDao.saveMeeting(meeting);
		if (savedMeeting == null) {
			return new ResponseEntity<Meeting>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		//add invitees
		if(meeting.getInviteeList()!=null){
			for (Iterator<MeetingInvitee> iterator = meeting.getInviteeList().iterator(); iterator.hasNext();) {
				MeetingInvitee meetingInvitee = iterator.next();
				meetingInvitee.setMeetingId(savedMeeting.getMeetingId());
				meetingInvitee.setInviteSentDate(new Date());
				meetingInvitee.setStatus(0);
				midao.saveMeetingInvitee(meetingInvitee);
				User invitedUser = udao.getUserById(meetingInvitee.getUserId());
				//send email to meeting invitee
				StringBuilder text = new StringBuilder("<html><body>");
				text.append("You are invited to a meeting organized by the community " + cdao.getCommunityById(savedMeeting.getCommunityId()).getTitle());
				text.append("<br>Start Time : " + savedMeeting.getStartTime()); 
				text.append("<br>End Time : " + savedMeeting.getEndTime());
				text.append("<br>Agenda :<br>" + savedMeeting.getAgenda());
				text.append("<br><a href=\"http://localhost:8080/api/meeting/approve/"+meeting.getMeetingId()+"?userId="+invitedUser.getUserId()+"\">Approve</a> or "
						+ "<a href=\"http://localhost:8080/api/meeting/deny/"+meeting.getMeetingId()+"?userId="+invitedUser.getUserId()+"\">Deny</a>");
				text.append("<br></body></html>");
				smtpMailSender.send(invitedUser.getEmail(), "[PROJECT.BUCOMP] - Upcoming Meeting Invite", text.toString());
			}
		} else {
			MeetingInvitee meetingInvitee = new MeetingInvitee();
			meetingInvitee.setMeetingId(savedMeeting.getMeetingId());
			meetingInvitee.setInviteSentDate(new Date());
			meetingInvitee.setStatus(0);
			meetingInvitee.setUserId(meeting.getMeetingOrganizerUserId());
			midao.saveMeetingInvitee(meetingInvitee);
		}
		savedMeeting.setInviteeList(midao.getMeetingInvitees(savedMeeting.getMeetingId()));
		return new ResponseEntity<Meeting>(savedMeeting, HttpStatus.CREATED);
	}

	@RequestMapping(value = "api/meetings/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting> updateMeeting(@RequestBody Meeting meeting) {
		meeting = this.meetingDao.updateMeeting(meeting);

		if (meeting == null) {
			return new ResponseEntity<Meeting>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<Meeting>(meeting, HttpStatus.CREATED);
	}

	@RequestMapping(value = "api/meetings/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Meeting> deleteMeeting(@PathVariable("id") Integer id) {
		if (meetingDao.deleteMeeting(id)) {
			return new ResponseEntity<Meeting>(HttpStatus.OK);
		}
		return new ResponseEntity<Meeting>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/api/meeting/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting> getMeetingById(@PathVariable("id") Integer id) {
		Meeting meeting = meetingDao.getMeetingById(id);
		if(meeting == null) {
			return new ResponseEntity<Meeting>(HttpStatus.NO_CONTENT);
		}
		meeting.setInviteeList(midao.getMeetingInvitees(meeting.getMeetingId()));
		return new ResponseEntity<Meeting>(meeting, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/meeting/approve/{meetingId}", method = RequestMethod.GET)
	public void approveMeetingRequest(
			@PathVariable("meetingId") Integer meetingId,
			@RequestParam(value = "userId") int userId) {
		
		midao.responseMeetingInvite(meetingId, userId, 1);
		
	}
	
	@RequestMapping(value = "/api/meeting/reject/{meetingId}", method = RequestMethod.GET)
	public void rejectMeetingRequest(
			@PathVariable("meetingId") Integer meetingId,
			@RequestParam(value = "userId") int userId) {
		
		midao.responseMeetingInvite(meetingId, userId, 2);
		
	}
	
	@RequestMapping(value = "/api/meetings/resources/{meetingId}", 
			method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Resource>> getMeetingResources(
			@PathVariable("meetingId") Integer meetingId) {
		Collection<Resource> resources = rdao.getMeetingResources(meetingId);
		if (resources == null || resources.size() == 0) {
			return new ResponseEntity<Collection<Resource>>(resources, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Resource>>(resources, HttpStatus.OK);
	}

}
