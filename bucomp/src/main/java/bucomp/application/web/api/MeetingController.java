package bucomp.application.web.api;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
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
import bucomp.application.model.Meetingnote;
import bucomp.application.model.Meetingresource;
import bucomp.application.model.Meetingrole;
import bucomp.application.model.Meetingtype;
import bucomp.application.model.Post;
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

	@RequestMapping(value = "/api/meetings/{communityId}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting> createMeeting(@PathVariable("communityId") Integer communityId,
			@RequestBody Meeting meeting, @RequestParam(value = "duration") Integer duration,
			@RequestParam(value = "ircLink") String ircLink, @RequestParam(value = "location") String location,
			@RequestParam(value = "timeZone") String timeZone, @RequestParam(value = "meetingDate") String meetingDate,
			@RequestParam(value = "meetingResources") List<Meetingresource> meetingResources,
			@RequestParam(value = "meetingNotes") List<Meetingnote> meetingNotes,
			@RequestParam(value = "meetingRoles") List<Meetingrole> meetingRoles,
			@RequestParam(value = "meetingTypes") Meetingtype meetingType) {

		Meeting m = new Meeting();
		m.setCommunity(communityDao.getCommunityById(communityId));
		m.setDuration(duration);
		m.setIRCLink(ircLink);
		m.setLocation(location);
		m.setMeetingattendants(null);

		SimpleDateFormat formatter = new SimpleDateFormat("EEEE, MMM dd, yyyy HH:mm:ss a"); // Friday,
																							// Jun
																							// 7,
																							// 2013
																							// 12:10:56
																							// PM
		Date date = new Date();
		try {
			date = formatter.parse(meetingDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		m.setMeetingDate(date);
		m.setMeetingnotes(meetingNotes);
		m.setMeetingresources(meetingResources);
		m.setMeetingroles(meetingRoles);
		m.setMeetingtype(meetingType);
		m.setTimeZone(timeZone);

		meeting = meetingDao.saveMeeting(m);

		if (meeting == null) {
			return new ResponseEntity<Meeting>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<Meeting>(meeting, HttpStatus.CREATED);

	}

	@RequestMapping(value = "api/meetings/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting> updateMeeting(@RequestBody Meeting meeting) {

		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Meeting>(meeting, HttpStatus.NOT_IMPLEMENTED);
	}

	@RequestMapping(value = "api/meetings/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Meeting> deleteMeeting(@PathVariable("id") Integer id) {

		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Meeting>(HttpStatus.NOT_IMPLEMENTED);
	}

}
