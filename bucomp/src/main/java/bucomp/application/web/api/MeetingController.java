package bucomp.application.web.api;

import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Community;
import bucomp.application.model.Meeting;
import bucomp.application.web.api.dao.CommunityDao;
import bucomp.application.web.api.dao.CommunityDaoImpl;

@RestController
public class MeetingController {
	
	private CommunityDao communityDao = new CommunityDaoImpl();
	
	@RequestMapping(value = "/api/meetings/{communityId}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Meeting>> getCommunityMeetings(
			@PathVariable("communityId") Integer communityId) {
		
		Community community = communityDao.getCommunityById(communityId);
		
		return new ResponseEntity<Collection<Meeting>>(community.getMeetings(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/meetings/{communityId}", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting> createMeeting(
			@PathVariable("communityId") Integer communityId, @RequestBody Meeting meeting) {

		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Meeting>(meeting, HttpStatus.NOT_IMPLEMENTED);

	}

	@RequestMapping(value = "api/meetings/{id}", method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Meeting> updateMeeting(
			@RequestBody Meeting meeting) {
		
		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Meeting>(meeting, HttpStatus.NOT_IMPLEMENTED);
	}

	@RequestMapping(value = "api/meetings/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Meeting> deleteMeeting(
			@PathVariable("id") Integer id) {
		
		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Meeting>(HttpStatus.NOT_IMPLEMENTED);
	}

}
