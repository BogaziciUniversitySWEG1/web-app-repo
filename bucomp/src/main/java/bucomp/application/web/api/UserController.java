package bucomp.application.web.api;

import java.util.Collection;
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

import bucomp.application.model.User;

@RestController
public class UserController {
	
private static Map<Integer, User> userMap;
	
	//this block is created for test purpose.
	private static Integer nextId;
	
	static{
		// Create initial communities and put into communityMap
		
		User u1 = new User();
		u1.setEmail("alperkaratepe@gmail.com");
		u1.setName("Alper Karatepe");
		saveOrUpdate(u1);
		
		User u2 = new User();
		u2.setEmail("karacay88@hmail.com");
		u2.setName("Serkan Karaçay");
		saveOrUpdate(u2);
	}
	private static User saveOrUpdate(User user) {
		if(userMap == null) {
			userMap = new HashMap<Integer, User>();
			nextId = 1;
		}
		// if update...
		if(user.getUserId()>0) {
			User oldUser = userMap.get(user.getUserId());
			if (oldUser==null){
				return null;
			}
			userMap.remove(user.getUserId());
			userMap.put(user.getUserId(), user);
			return user;
		}
		// if create ...
		user.setUserId(nextId);
		nextId = nextId + 1;
		userMap.put(user.getUserId(), user);
		return user;
	}
	private static boolean delete(Integer id) {
		User deletedUser = userMap.remove(id);
		if(deletedUser==null) {
			return false;
		}
		return true;
	}
	
	/**
	 * Request Mappings
	 */
	
	// Get all users
	@RequestMapping(value = "/api/users", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<User>> getAllUsers() {
		Collection<User> users = userMap.values();
		return new ResponseEntity<Collection<User>>(users, HttpStatus.OK);
	}
	
	// Get specific user by id
	@RequestMapping(value = "/api/users/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
		
		User user = userMap.get(id);
		if(user == null) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	// Create new user
	@RequestMapping(value = "/api/users", method = RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> createUser(@RequestBody User user) {
		
		User savedUser = saveOrUpdate(user);
		return new ResponseEntity<User>(savedUser, HttpStatus.CREATED);
		
	}
	
	//update user
	@RequestMapping(value="api/users/{id}", method=RequestMethod.PUT, 
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> updateUser(@RequestBody User user){
		User updatedUser = saveOrUpdate(user);
		if(updatedUser == null) {
			return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	//delete user
	@RequestMapping(value="api/users/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable("id") Integer id){
		boolean isDeleted = delete(id);
		if(!isDeleted) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(HttpStatus.OK);
	}

}
