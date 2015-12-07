package bucomp.application.web.api;

import java.util.Date;
import java.util.Collection;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Community;
import bucomp.application.model.Meeting;
import bucomp.application.model.Meetingattendant;
import bucomp.application.web.api.dao.CommunityDao;
import bucomp.application.web.api.dao.CommunityDaoImpl;
import bucomp.application.web.api.dao.MeetingDao;
import bucomp.application.web.api.dao.MeetingDaoImpl;

@RestController
public class MeetingController {

	private CommunityDao communityDao = new CommunityDaoImpl();
	private MeetingDao meetingDao = new MeetingDaoImpl();

	@RequestMapping(value = "/api/meetings/{communityId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Meeting>> getCommunityMeetings(@PathVariable("communityId") Integer communityId) {
		Community community = communityDao.getCommunityById(communityId);

		return new ResponseEntity<Collection<Meeting>>(community.getMeetings(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/meetings/{communityId}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting> createMeeting(@PathVariable("communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId,
			@RequestParam(value = "communityIdToSave") Integer communityIdToSave,
			@RequestParam(value = "startTime") String startTime, @RequestParam(value = "location") String location,
			@RequestParam(value = "duration") Integer duration,
			@RequestParam(value = "attendants") List<Meetingattendant> meetingAttendants) {
		Meeting meeting = new Meeting();

		for (Meetingattendant ma : meetingAttendants) {
			meeting.addMeetingattendant(ma);
		}
		meeting.setCommunity(communityDao.getCommunityById(communityIdToSave));
		meeting.setDuration(duration);
		meeting.setLocation(location);
		meeting.setMeetingDate(new Date());
		meeting = meetingDao.saveMeeting(meeting);
		if (meeting == null) {
			return new ResponseEntity<Meeting>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<Meeting>(meeting, HttpStatus.CREATED);
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

}
