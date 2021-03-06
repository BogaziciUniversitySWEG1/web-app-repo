package bucomp.application.web.api;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
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

import bucomp.application.dto.TagCountDTO;
import bucomp.application.mail.SMTPMailSender;
import bucomp.application.model.Community;
import bucomp.application.model.Communitymember;
import bucomp.application.model.DbpediaClassModel;
import bucomp.application.model.Resource;
import bucomp.application.model.Tag;
import bucomp.application.semantic.api.DBPediaWS;
import bucomp.application.web.api.dao.CommunityDao;
import bucomp.application.web.api.dao.CommunityDaoImpl;
import bucomp.application.web.api.dao.CommunityMemberDao;
import bucomp.application.web.api.dao.CommunityMemberDaoImpl;
import bucomp.application.web.api.dao.ResourceDao;
import bucomp.application.web.api.dao.ResourceDaoImpl;
import bucomp.application.web.api.dao.TagDao;
import bucomp.application.web.api.dao.TagDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

/**
 * The rest controller class used for community operations. It provides many
 * functionalities required for community operations.
 *
 */
@RestController
public class CommunityController {
	
	@Autowired
	SMTPMailSender smtpMailSender;

	private CommunityDao dao = new CommunityDaoImpl();
	private CommunityMemberDao cmDao = new CommunityMemberDaoImpl();
	private UserDao udao = new UserDaoImpl();
	private TagDao tdao = new TagDaoImpl();
	private ResourceDao rdao = new ResourceDaoImpl();
	private DBPediaWS dpws = new DBPediaWS();

	/**
	 * Request Mappings
	 */

	@RequestMapping(value = "/api/communities/count", method = RequestMethod.GET)
	public ResponseEntity<Integer> getNumberOfCommunities() {
		return new ResponseEntity<Integer>(dao.getCommunityCount(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/communities/tags/{keyword}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<DbpediaClassModel>> getSemanticTagsFromDBPedia(
			@PathVariable("keyword") String keyword) {
		return new ResponseEntity<Collection<DbpediaClassModel>>(dpws.getCategories(keyword), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/communities/userCommunities/{userId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Community>> getUserCommunities(@PathVariable("userId") Integer userId,
			@RequestParam(value = "sortType", required = false) String sortType) {
		Collection<Community> communities = dao.getUserCommunities(userId, sortType);
		if (communities == null || communities.size() == 0) {
			return new ResponseEntity<Collection<Community>>(communities, HttpStatus.NO_CONTENT);
		}
		for (Iterator<Community> iterator = communities.iterator(); iterator.hasNext();) {
			Community community = iterator.next();
			community.setMemberCount(cmDao.getCommunityMembers(community.getCommunityId()).size());
			community.setTagsList(new ArrayList<Tag>(tdao.getCommunityTags(community.getCommunityId())));
			ArrayList<Integer> cmIDList = new ArrayList<Integer>();
			for (Iterator<Communitymember> cmi = cmDao.getCommunityMembers(community.getCommunityId()).iterator(); cmi
					.hasNext();) {
				Communitymember cm = cmi.next();
				cmIDList.add(cm.getUser().getUserId());
			}
			community.setMemberList(cmIDList);
		}
		if (sortType!=null && sortType.equals("SORT_BY_MEMBER_COUNT")) {
			Collections.sort((List<Community>) communities, new Community.MemberCountComparator());
		}
		
		return new ResponseEntity<Collection<Community>>(communities, HttpStatus.OK);
	}

	// Get / Search communities
	@RequestMapping(value = "/api/communities", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Community>> getAllCommunities(
			@RequestParam(value = "sortType", required = false) String sortType) {
		Collection<Community> communities = dao.getAllCommunities(sortType);
		if (communities == null || communities.size() == 0) {
			return new ResponseEntity<Collection<Community>>(communities, HttpStatus.NO_CONTENT);
		}
		
		for (Iterator<Community> iterator = communities.iterator(); iterator.hasNext();) {
			Community community = iterator.next();
			int memCount = cmDao.getCommunityMembers(community.getCommunityId()).size();
			community.setMemberCount(memCount);
			community.setTagsList(new ArrayList<Tag>(tdao.getCommunityTags(community.getCommunityId())));
			ArrayList<Integer> cmIDList = new ArrayList<Integer>();
			for (Iterator<Communitymember> cmi = cmDao.getCommunityMembers(community.getCommunityId()).iterator(); cmi
					.hasNext();) {
				Communitymember cm = cmi.next();
				cmIDList.add(cm.getUser().getUserId());
			}
			community.setMemberList(cmIDList);
		}
		
		if (sortType!=null && sortType.equals("SORT_BY_MEMBER_COUNT")) {
			Collections.sort((List<Community>) communities, new Community.MemberCountComparator());
		}
		return new ResponseEntity<Collection<Community>>(communities, HttpStatus.OK);
	}

	// Get / Search communities
	@RequestMapping(value = "/api/communities/search", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Community>> searchCommunity(
			@RequestParam(value = "key", required = true) String key) {
		Collection<Community> communities = dao.searchCommunity(key);
		if (communities == null || communities.size() == 0) {
			return new ResponseEntity<Collection<Community>>(communities, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Community>>(communities, HttpStatus.OK);
	}

	// Get specific community by id
	@RequestMapping(value = "/api/communities/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> getCommunityById(@PathVariable("id") Integer id) {

		Community community = dao.getCommunityById(id);
		if (community == null) {
			return new ResponseEntity<Community>(HttpStatus.NO_CONTENT);
		}
		community.setMemberCount(cmDao.getCommunityMembers(community.getCommunityId()).size());
		community.setTagsList(new ArrayList<Tag>(tdao.getCommunityTags(community.getCommunityId())));
		ArrayList<Integer> cmIDList = new ArrayList<Integer>();
		for (Iterator<Communitymember> cmi = cmDao.getCommunityMembers(community.getCommunityId()).iterator(); cmi
				.hasNext();) {
			Communitymember cm = cmi.next();
			cmIDList.add(cm.getUser().getUserId());
		}
		community.setMemberList(cmIDList);
		return new ResponseEntity<Community>(community, HttpStatus.OK);
	}

	// Create new community
	@RequestMapping(value = "/api/communities", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> createCommunity(@RequestBody Community community) {
		Community savedCommunity = dao.saveCommunity(community);
		if (savedCommunity == null) {
			return new ResponseEntity<Community>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		// Insert a raw into community members table
		Communitymember cm = new Communitymember();
		cm.setCommunityId(community.getCommunityId());
		cm.setRoleId(3); // roles table - Communit Owner role
		cm.setUser(udao.getUserById(community.getUser().getUserId()));
		cmDao.saveCommunityMember(cm);
		savedCommunity.setUser(udao.getUserById(community.getUser().getUserId()));
		
		StringBuilder text = null;
		//Send Email to invitees
		for (Iterator<String> iterator = community.getInviteeList().iterator(); iterator.hasNext();) {
			String emailAddress = iterator.next();
			text = new StringBuilder("<html><body>");
			text.append("You are invited to a community created by " + community.getUser().getName() + " " + community.getUser().getSurname());
			text.append("<br>Community Title : " + community.getTitle()); 
			text.append("<br>Description : " + community.getDescription());
			text.append("<br>You can see the community details <a href=\"http://54.211.68.153:8080/community.html?cid=" + community.getCommunityId() + "\">here</a>");
			text.append("<br></body></html>");
			smtpMailSender.send(emailAddress, "[PROJECT.BUCOMP] - Community Offer", text.toString());
		}
		return new ResponseEntity<Community>(savedCommunity, HttpStatus.CREATED);
	}

	// update community
	@RequestMapping(value = "api/communities/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> updateCommunity(@RequestBody Community community) {
		Community updatedCommunity = dao.updateCommunity(community);
		if (updatedCommunity == null) {
			return new ResponseEntity<Community>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Community>(updatedCommunity, HttpStatus.OK);
	}

	// delete community
	@RequestMapping(value = "api/communities/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Community> deleteCommunity(@PathVariable("id") Integer id) {
		try {
			dao.deleteCommunity(dao.getCommunityById(id));
			return new ResponseEntity<Community>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Community>(HttpStatus.INTERNAL_SERVER_ERROR);
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

	@RequestMapping(value = "/api/communities/resources/{communityId}", 
			method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Resource>> getCommunityResources(
			@PathVariable("communityId") Integer communityId) {
		Collection<Resource> resources = rdao.getCommunityResources(communityId);
		if (resources == null || resources.size() == 0) {
			return new ResponseEntity<Collection<Resource>>(resources, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Resource>>(resources, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/communityMembers/{communityId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Communitymember>> getCommunityMembers(
			@PathVariable("communityId") Integer communityId) {

		Collection<Communitymember> members = cmDao.getCommunityMembers(communityId);
		if (members == null || members.size() == 0) {
			return new ResponseEntity<Collection<Communitymember>>(members, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Communitymember>>(members, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/communityMembers", method = RequestMethod.POST)
	public boolean addCommunityMember(@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId, @RequestParam(value = "roleId") Integer roleId) {

		Communitymember cm = new Communitymember();
		cm.setCommunityId(communityId);
		cm.setUser(udao.getUserById(userId));
		cm.setRoleId(roleId);

		Communitymember savedCM = cmDao.saveCommunityMember(cm);
		if (savedCM == null) {
			return false;
		}
		return true;
	}

	@RequestMapping(value = "/api/communities/tagcount", method = RequestMethod.GET)
	public ResponseEntity<Collection<TagCountDTO>> getNumberOfTagCounts() {

		Collection<Community> communities = dao.getAllCommunities("SORT_BY_CREATION_DATE");
		ArrayList<Tag> tagsList = new ArrayList<Tag>();
		for (Community community : communities) {
			Collection<Tag> tl = tdao.getCommunityTags(community.getCommunityId());
			for (Tag t : tl) {
				tagsList.add(t);
			}
		}
		ArrayList<String> tagNamesList = new ArrayList<String>();
		for (int i = 0; i < tagsList.size(); i++) {
			if (tagsList.get(i) == null || tagsList.get(i).getTag() == null || tagsList.get(i).getTag().equals("")) {
				tagsList.remove(i);
			} else {
				tagNamesList.add(tagsList.get(i).getTag());
			}
		}

		ArrayList<TagCountDTO> tagCountsList = new ArrayList<TagCountDTO>();
		ArrayList<String> addedTagNames = new ArrayList<String>();

		for (String s : tagNamesList) {
			TagCountDTO tc = new TagCountDTO();
			tc.setTagName(s);
			tc.setTagCount(Collections.frequency(tagNamesList, s));
			addedTagNames.add(s);
			if (Collections.frequency(addedTagNames, s) == 1) {
				tagCountsList.add(tc);
			}
		}
		Collections.sort(tagCountsList);

		return new ResponseEntity<Collection<TagCountDTO>>(tagCountsList, HttpStatus.OK);
	}

}
