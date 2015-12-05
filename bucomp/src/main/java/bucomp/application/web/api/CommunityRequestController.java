package bucomp.application.web.api;

import java.util.Collection;
import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Communitymember;
import bucomp.application.model.Communityrequest;
import bucomp.application.web.api.dao.CommunityMemberDao;
import bucomp.application.web.api.dao.CommunityMemberDaoImpl;
import bucomp.application.web.api.dao.CommunityRequestDao;
import bucomp.application.web.api.dao.CommunityRequestDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class CommunityRequestController {

	private CommunityRequestDao dao = new CommunityRequestDaoImpl();	
	private CommunityMemberDao cmDao = new CommunityMemberDaoImpl();
	private UserDao udao = new UserDaoImpl();
	
	@RequestMapping(value = "/api/communityRequests", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Communityrequest>> getCommunityRequests() {
		
		Collection<Communityrequest> crs = dao.getAllCommunityRequests();
		if(crs==null || crs.size()==0){
			return new ResponseEntity<Collection<Communityrequest>>(crs, HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<Collection<Communityrequest>>(crs,HttpStatus.OK);
	}

	@RequestMapping(value = "/api/communityRequests", method = RequestMethod.POST)
	public boolean joinCommunity(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		Communityrequest cr = new Communityrequest();
		cr.setRequestDate(new Date());
		cr.setUserId(userId);
		cr.setCommunityId(communityId);
		cr.setStatus(0);
		Communityrequest savedCommunityReq = dao.saveCommunityRequest(cr);
		if (savedCommunityReq == null) {
			return false;
		}
		return true;
	}
	
	@RequestMapping(value = "/api/communityRequests/approve", method = RequestMethod.POST)
	public boolean approveCommunityRequest(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		//Update request status
		boolean step1 = dao.approveCommunityRequest(userId, communityId);
		//add to member list
		Communitymember cm = new Communitymember();
		cm.setCommunityId(communityId);
		cm.setUser(udao.getUserById(userId));
		cm.setRoleId(1);
		boolean step2 = cmDao.saveCommunityMember(cm) != null ? true : false;
		
		return step1 && step2;  
	}
	
	@RequestMapping(value = "/api/communityRequests/deny", method = RequestMethod.POST)
	public boolean denyCommunityRequest(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		
		return dao.denyCommunityRequest(userId, communityId);
		
	}

}
