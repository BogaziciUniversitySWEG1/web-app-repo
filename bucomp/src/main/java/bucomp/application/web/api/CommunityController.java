package bucomp.application.web.api;

import java.util.Collection;

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
import bucomp.application.model.Resource;
import bucomp.application.web.api.dao.CommunityDao;
import bucomp.application.web.api.dao.CommunityDaoImpl;
import bucomp.application.web.api.dao.CommunityMemberDao;
import bucomp.application.web.api.dao.CommunityMemberDaoImpl;

@RestController
public class CommunityController {

	private CommunityDao dao = new CommunityDaoImpl();
	private CommunityMemberDao cmDao = new CommunityMemberDaoImpl();
	


	/**
	 * Request Mappings
	 */

	@RequestMapping(value = "/api/communities/count", method = RequestMethod.GET)
	public ResponseEntity<Integer> getNumberOfCommunities() {
		return new ResponseEntity<Integer>(dao.getCommunityCount(),
				HttpStatus.OK);
	}

	// Get / Search communities
	@RequestMapping(value = "/api/communities", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Community>> getAllCommunities() {
		Collection<Community> communities = dao.getAllCommunities();
		if (communities == null || communities.size() == 0) {
			return new ResponseEntity<Collection<Community>>(communities,
					HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Community>>(communities,
				HttpStatus.OK);
	}

	// Get / Search communities
	@RequestMapping(value = "/api/communities/search", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Community>> searchCommunity(
			@RequestParam(value = "key", required = true) String key) {
		Collection<Community> communities = dao.searchCommunity(key);
		if (communities == null || communities.size() == 0) {
			return new ResponseEntity<Collection<Community>>(communities,
					HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Community>>(communities, HttpStatus.OK);
	}

	// Get specific community by id
	@RequestMapping(value = "/api/communities/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> getCommunityById(
			@PathVariable("id") Integer id) {

		Community community = dao.getCommunityById(id);
		if (community == null) {
			return new ResponseEntity<Community>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Community>(community, HttpStatus.OK);
	}

	// Create new community
	@RequestMapping(value = "/api/communities", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> createCommunity(
			@RequestBody Community community) {
		Community savedCommunity = dao.saveCommunity(community);
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
		Community updatedCommunity = dao.updateCommunity(community);
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
		try {
			dao.deleteCommunity(dao.getCommunityById(id));			
			return new ResponseEntity<Community>(HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<Community>(
					HttpStatus.INTERNAL_SERVER_ERROR);			
		}
	}

	// Leave Community
	@RequestMapping(value = "/api/communities/membership", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> leaveCommunity(
			@RequestParam(value = "communityMemberId") Integer communityMemberId) {

		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Community>(HttpStatus.NOT_IMPLEMENTED);

	}

	// Leave Community
	@RequestMapping(value = "/api/communities/documents", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Resource> uploadResource(
			@RequestParam(value = "file", required = true) MultipartFile file,
			@RequestParam(value = "communityId", required = true) Integer communityId,
			@RequestParam(value = "userId", required = true) Integer userId) {

		Resource resource = new Resource();
		resource.setLink(file.getOriginalFilename());

		/**
		 * TODO: To be implemented
		 */
		return new ResponseEntity<Resource>(resource,
				HttpStatus.NOT_IMPLEMENTED);

	}
	
	@RequestMapping(value = "/api/communityMembers/{communityId}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Communitymember>> getCommunityMembers(
			@PathVariable("communityId") Integer communityId) {

		Collection<Communitymember> members = cmDao.getCommunityMembers(communityId);
		if (members == null || members.size() == 0) {
			return new ResponseEntity<Collection<Communitymember>>(members,	HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Communitymember>>(members,	HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/communityMembers", method = RequestMethod.POST)
	public boolean addCommunityMember(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId,
			@RequestParam(value = "roleId") Integer roleId) {
		
		Communitymember cm = new Communitymember();
		cm.setCommunityId(communityId);
		cm.setUserId(userId);
		cm.setRoleId(roleId);
		
		Communitymember savedCM = cmDao.saveCommunityMember(cm);
		if (savedCM == null) {
			return false;
		}
		return true;
	}

}
