package bucomp.application.web.api;

import java.util.Collection;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.mail.SMTPMailSender;
import bucomp.application.model.Communitymember;
import bucomp.application.model.Communityrequest;
import bucomp.application.web.api.dao.CommunityDao;
import bucomp.application.web.api.dao.CommunityDaoImpl;
import bucomp.application.web.api.dao.CommunityMemberDao;
import bucomp.application.web.api.dao.CommunityMemberDaoImpl;
import bucomp.application.web.api.dao.CommunityRequestDao;
import bucomp.application.web.api.dao.CommunityRequestDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class CommunityRequestController {
	
	@Autowired
	SMTPMailSender smtpMailSender;

	private CommunityRequestDao dao = new CommunityRequestDaoImpl();	
	private CommunityMemberDao cmDao = new CommunityMemberDaoImpl();
	private UserDao udao = new UserDaoImpl();
	private CommunityDao comDao = new CommunityDaoImpl();
	
	@RequestMapping(value = "/api/communityRequests/{communityId}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Communityrequest>> getCommunityRequests(@PathVariable("communityId") Integer communityId) {
		
		Collection<Communityrequest> crs = dao.getCommunityRequests(communityId);
		if(crs==null || crs.size()==0){
			return new ResponseEntity<Collection<Communityrequest>>(crs, HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<Collection<Communityrequest>>(crs,HttpStatus.OK);
	}

	@RequestMapping(value = "/api/communityRequests", method = RequestMethod.POST)
	public boolean joinCommunity(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId,
			@RequestParam(value = "explanation") String explanation) {
		Communityrequest cr = new Communityrequest();
		cr.setRequestDate(new Date());
		cr.setUserId(userId);
		cr.setCommunityId(communityId);
		cr.setStatus(0);
		cr.setExplanation(explanation);
		Communityrequest savedCommunityReq = dao.saveCommunityRequest(cr);
		if (savedCommunityReq == null) {
			return false;
		}
		//send email to community owner
		StringBuilder text = new StringBuilder("<html><body>");
		text.append("Following join request is waiting for your action.");
		text.append("<br>Requestor : " + udao.getUserById(userId).getName() + " " + udao.getUserById(userId).getSurname()); 
		text.append("<br>Community : " + comDao.getCommunityById(communityId).getTitle());
		text.append("<br>Explanation :" + explanation);
		text.append("<br><br>Please respond this request by ");
		text.append("<a href=\"http://localhost:8080/api/communityRequests/approve?communityId="+communityId+"&userId="+userId+"\">approving</a> or ");
		text.append("<a href=\"http://localhost:8080/api/communityRequests/deny?communityId="+communityId+"&userId="+userId+"\">denying</a> it.");
		text.append("<br></body></html>");

		smtpMailSender.send(comDao.getCommunityById(communityId).getUser().getEmail(), "[PROJECT.BUCOMP] - Incoming Join Request", text.toString());
		return true;
	}
	
	@RequestMapping(value = "/api/communityRequests/approve", method = RequestMethod.POST)
	public boolean approveCommunityRequest(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		return approveHelper(communityId, userId);
	}
	
	@RequestMapping(value = "/api/communityRequests/approve", method = RequestMethod.GET)
	public boolean approveCommunityRequestByEmail(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		return approveHelper(communityId, userId);
	}

	private boolean approveHelper(Integer communityId, Integer userId) {
		//Update request status
		boolean step1 = dao.approveCommunityRequest(userId, communityId);
		//add to member list
		Communitymember cm = new Communitymember();
		cm.setCommunityId(communityId);
		cm.setUser(udao.getUserById(userId));
		cm.setRoleId(4); //community member role id in roles table
		boolean step2 = cmDao.saveCommunityMember(cm) != null ? true : false;
		
		if(step1 && step2){
			//send email to requestor
			StringBuilder text = new StringBuilder("<html><body>");
			text.append("Your join request for community \""+comDao.getCommunityById(communityId).getTitle()+"\" is approved.");
			text.append("<br></body></html>");
			smtpMailSender.send(udao.getUserById(userId).getEmail(), "[PROJECT.BUCOMP] - Join Request Approved", text.toString());
			return true;
		} else {
			return false;
		}
	}
	
	@RequestMapping(value = "/api/communityRequests/deny", method = RequestMethod.POST)
	public boolean denyCommunityRequest(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		
		return denyHelper(communityId, userId);
		
	}
	
	@RequestMapping(value = "/api/communityRequests/deny", method = RequestMethod.GET)
	public boolean denyCommunityRequestByEmail(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		
		return denyHelper(communityId, userId);
		
	}

	private boolean denyHelper(Integer communityId, Integer userId) {
		boolean result = dao.denyCommunityRequest(userId, communityId);
		
		if(result==true){
			//send email to requestor
			StringBuilder text = new StringBuilder("<html><body>");
			text.append("Your join request for community \""+comDao.getCommunityById(communityId).getTitle()+"\" is denied.");
			text.append("<br></body></html>");
			smtpMailSender.send(udao.getUserById(userId).getEmail(), "[PROJECT.BUCOMP] - Join Request Approved", text.toString());
		}
		return result;
	}

}
