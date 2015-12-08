package bucomp.application.web.api;

import java.text.ParseException;
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

import bucomp.application.model.Meeting;
import bucomp.application.web.api.dao.MeetingDao;
import bucomp.application.web.api.dao.MeetingDaoImpl;

@RestController
public class MeetingController {

	private MeetingDao meetingDao = new MeetingDaoImpl();

	/**
	 * 
	 * @param communityId
	 * @param status: -1: All Meetings, 0: Not started, 1:active, 2:finished, 3: cancelled
	 * @return
	 */
	@RequestMapping(value = "/api/meetings/{communityId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Meeting>> getCommunityMeetings(
			@PathVariable("communityId") Integer communityId,
			@RequestParam(value = "status") int status) {
		List<Meeting> meetings = meetingDao.getCommunityMeetings(communityId,status);
		if (meetings == null) {
			return new ResponseEntity<Collection<Meeting>>(
					HttpStatus.NO_CONTENT);
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

}
