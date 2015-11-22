package bucomp.application.web.api;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Communityrequest;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class CommunityRequestController {

	public static Map<Integer, Communityrequest> crMap;
	
	private UserDao userDao = new UserDaoImpl();

	private static Integer nextId = 0;

	static {
		if (crMap == null) {
			crMap = new HashMap<Integer, Communityrequest>();
		}
	}
	
	@RequestMapping(value = "/api/communityJoinRequests", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Communityrequest>> getCommunityJoinRequests() {
		
		Collection<Communityrequest> crs = crMap.values();
		if(crs==null || crs.size()==0){
			return new ResponseEntity<Collection<Communityrequest>>(crs, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Communityrequest>>(crMap.values(),	HttpStatus.OK);
	}

	// Join Community
	@RequestMapping(value = "/api/communityJoinRequests", method = RequestMethod.POST)
	public ResponseEntity<String> joinCommunity(
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "userId") Integer userId) {
		try {
			// create community request
			Communityrequest cr = new Communityrequest();
			cr.setCommunityRequestId(++nextId);
			cr.setRequestDate(new Date());
			cr.setStatus(0);
			cr.setUser(userDao.getUserById(userId));
			cr.setCommunity(CommunityController.communityMap.get(communityId));
			crMap.put(cr.getCommunityRequestId(), cr);
			return new ResponseEntity<String>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
