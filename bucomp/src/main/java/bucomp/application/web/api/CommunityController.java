package bucomp.application.web.api;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Community;

@RestController
public class CommunityController {
	
	private static Map<Integer, Community> communityMap;
	
	//this block is created for test purpose.
	private static Integer nextId;
	static{
		// Create initial communities and put into communityMap
		
		Community c1 = new Community();
		c1.setTitle("My first community");
		c1.setCreationDate(new Date());
		save(c1);
		
		Community c2 = new Community();
		c2.setTitle("My second community");
		c2.setCreationDate(new Date());
		save(c2);
	}
	private static Community save(Community community) {
		if(communityMap == null) {
			communityMap = new HashMap<Integer, Community>();
			nextId = 1;
		}
		// if update...
		if(community.getId()>0) {
			Community oldCommunity = communityMap.get(community.getId());
			if (oldCommunity==null){
				return null;
			}
			communityMap.remove(community.getId());
			communityMap.put(community.getId(), community);
			return community;
		}
		// if create ...
		community.setId(nextId);
		nextId = nextId + 1;
		communityMap.put(community.getId(), community);
		return community;
	}
	
	/**
	 * Request Mappings
	 */
	
	// Get all communities
	@RequestMapping(value = "/api/communities", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Community>> getAllCommunities() {
		Collection<Community> communities = communityMap.values();
		return new ResponseEntity<Collection<Community>>(communities, HttpStatus.OK);
	}
	
	// Get specific community by id
	@RequestMapping(value = "/api/communities/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> getCommunityById(@PathVariable("id") Integer id) {
		
		Community community = communityMap.get(id);
		if(community == null) {
			return new ResponseEntity<Community>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Community>(community, HttpStatus.OK);
	}
	
	// Create new community
	@RequestMapping(value = "/api/communities", method = RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> createCommunity(@RequestBody Community community) {
		
		Community savedCommunity = save(community);
		return new ResponseEntity<Community>(savedCommunity, HttpStatus.CREATED);
		
	}
	
	//update community
	@RequestMapping(value="api/communities/{id}", method=RequestMethod.PUT, 
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Community> updateCommunity(@RequestBody Community community){
		Community updatedCommunity = save(community);
		if(updatedCommunity == null) {
			return new ResponseEntity<Community>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Community>(community, HttpStatus.OK);
	}

}
