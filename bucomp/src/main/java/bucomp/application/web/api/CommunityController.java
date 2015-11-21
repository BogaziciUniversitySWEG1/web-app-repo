package bucomp.application.web.api;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bucomp.application.model.Community;
import bucomp.application.model.Communitymember;
import bucomp.application.model.Meeting;
import bucomp.application.model.Resource;
import bucomp.application.model.Role;
import bucomp.application.model.User;

@RestController
public class CommunityController {

	public static Map<Integer, Community> communityMap;
	
	// this block is created for test purpose.
	private static Integer nextId;
	static {
		// Create initial communities and put into communityMap
		
		Community c1 = new Community();
		c1.setTitle("My first community");
		c1.setDescription("My first community's description.");
		c1.setCreationDate(new Date());
		
		User creator = new User();
		creator = UserController.userMap.get(1);
		c1.setUser(creator);
		
		ArrayList<Communitymember> members = new ArrayList<Communitymember>();
		User user1 = new User();
		user1 = UserController.userMap.get(1);
		Communitymember member1 = new Communitymember();
		member1.setUser(user1);
		members.add(member1);
		
		User user2 = new User();
		user2 = UserController.userMap.get(2);
		Communitymember member2 = new Communitymember();
		member2.setUser(user2);
		members.add(member2);
		
		c1.setCommunitymembers(members);
		
		Meeting meeting = new Meeting();
		meeting.setDuration(60);
		meeting.setLocation("Bilgisayar Mühendisliği Binası, A2");
		meeting.setMeetingDate(new Date());
		meeting.setMeetingId(1);
		ArrayList<Meeting> meetings = new ArrayList<Meeting>();
		meetings.add(meeting);
		c1.setMeetings(meetings);
		
		saveOrUpdate(c1);

		Community c2 = new Community();
		c2.setTitle("My second community");
		c2.setCreationDate(new Date());
		c2.setCommunitymembers(new ArrayList<Communitymember>());
		saveOrUpdate(c2);
	}

	private static Community saveOrUpdate(Community community) {
		if (communityMap == null) {
			communityMap = new HashMap<Integer, Community>();
			nextId = 1;
		}
		// if update...
		if (community.getCommunityId() > 0) {
			Community oldCommunity = communityMap.get(community
					.getCommunityId());
			if (oldCommunity == null) {
				return null;
			}
			communityMap.remove(oldCommunity.getCommunityId());
			communityMap.put(community.getCommunityId(), community);
			return community;
		}
		// if create ...
		community.setCommunityId(nextId);
		User tmpUser = community.getUser();
		if(tmpUser != null){
			int userId = tmpUser.getUserId();
			User user = UserController.userMap.get(userId);
			community.setUser(user);
		}
		
		nextId = nextId + 1;
		communityMap.put(community.getCommunityId(), community);
		return community;
	}

	private static boolean delete(Integer id) {
		Community deletedCommunity = communityMap.remove(id);
		if (deletedCommunity == null) {
			return false;
		}
		return true;
	}

	/**
	 * Request Mappings
	 */

	// Get / Search communities
	@RequestMapping(value = "/api/communities", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Community>> getCommunities(
			@RequestParam(value = "key", required = false) String key,
			@RequestParam(value = "userId", required = false) String userId) {
		Collection<Community> communities = null;
		if (key == null && userId == null) {
			// return all communities
			communities = communityMap.values();
		} else {
			if (key != null) {
				// search communities
				/**
				 * TODO: Call db search method here, return retrieved result
				 */
				System.out.println("search key: " + key);
				communities = communityMap.values(); // this will be changed
			}
			if (userId != null) {
				// offer community
				/**
				 * TODO: Call db offer method here, return retrieved result
				 */
				System.out.println("userId: " + key);
				communities = communityMap.values(); // this will be changed
			}
		}
		if (communities == null || communities.size() == 0) {
			return new ResponseEntity<Collection<Community>>(communities,
					HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Community>>(communities,
				HttpStatus.OK);
	}

	// Get specific community by id
	@RequestMapping(value = "/api/communities/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> getCommunityById(
			@PathVariable("id") Integer id) {

		Community community = communityMap.get(id);
		if (community == null) {
			return new ResponseEntity<Community>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Community>(community, HttpStatus.OK);
	}

	// Create new community
	@RequestMapping(value = "/api/communities", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> createCommunity(
			@RequestBody Community community) {

		Community savedCommunity = saveOrUpdate(community);
		if (savedCommunity == null) {
			return new ResponseEntity<Community>(
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Community>(savedCommunity, HttpStatus.CREATED);

	}

	// update community
	@RequestMapping(value = "api/communities/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> updateCommunity(
			@RequestBody Community community) {
		Community updatedCommunity = saveOrUpdate(community);
		if (updatedCommunity == null) {
			return new ResponseEntity<Community>(
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Community>(updatedCommunity, HttpStatus.OK);
	}

	// delete community
	@RequestMapping(value = "api/communities/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Community> deleteCommunity(
			@PathVariable("id") Integer id) {
		boolean isDeleted = delete(id);
		if (!isDeleted) {
			return new ResponseEntity<Community>(
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Community>(HttpStatus.OK);
	}

	// Join Community
	@RequestMapping(value = "/api/communities/membership", method = RequestMethod.POST, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> requestCommunityMembership(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {

		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Community>(HttpStatus.NOT_IMPLEMENTED);
	}
	
	@RequestMapping(value = "/api/communities/membership", method = RequestMethod.PUT, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> processMembershipRequest(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		
		Community community = communityMap.get(communityId);
		User user = UserController.userMap.get(userId);
		
		Communitymember communityMember = new Communitymember();
		communityMember.setUser(user);
		communityMember.setRole(new Role());
		
		List<Communitymember> communityMembers = community.getCommunitymembers();
		if(communityMembers == null){
			communityMembers = new ArrayList<Communitymember>();
		}
		communityMembers.add(communityMember);
		
		community.setCommunitymembers(communityMembers);
		
		saveOrUpdate(community);
		
		return new ResponseEntity<Community>(HttpStatus.OK);
		
	}

	// Leave Community
	@RequestMapping(value = "/api/communities/membership", method = RequestMethod.DELETE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> leaveCommunity(
			@RequestParam(value = "communityMemberId") Integer communityMemberId) {
		
		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Community>(HttpStatus.NOT_IMPLEMENTED);
		
	}
	
	// Leave Community
	@RequestMapping(value = "/api/communities/documents", method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Resource> uploadResource(
			@RequestParam(value="file", required=true) MultipartFile file,
			@RequestParam(value = "communityId", required=true) Integer communityId,
			@RequestParam(value = "userId", required=true) Integer userId) {
		
        Resource resource = new Resource();
        resource.setLink(file.getOriginalFilename());
        
		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Resource>(resource, HttpStatus.NOT_IMPLEMENTED);
		
	}
	
	
}
