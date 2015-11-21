package bucomp.application.web.api;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.User;
import bucomp.application.model.Community;

@RestController
public class UserController {
	
public static Map<Integer, User> userMap;
	
	//this block is created for test purpose.
	private static Integer nextId;
	
	static{
		// Create initial communities and put into communityMap
		
		User u1 = new User();
		u1.setEmail("alperkaratepe@gmail.com");
		u1.setName("Alper");
		u1.setSurname("Karatepe");
		u1.setLocation("Ankara Turkey");
		Community com1 = new Community();
		com1.setTitle("Turkish Businessmen");
		ArrayList<Community> communList = new ArrayList<Community>();
		communList.add(com1);
		u1.setCommunities(communList);
		u1.setHobbies("Music, skiing");
		u1.setPhotoLink("1.jpeg");
		saveOrUpdate(u1);
		
		User u2 = new User();
		u2.setEmail("karacay88@gmail.com");
		u2.setName("Serkan");
		u2.setSurname("Karacay");
		u2.setLocation("Istanbul Turkey");
		Community com2 = new Community();
		com2.setTitle("Galatasaray Fans");
		ArrayList<Community> communList2 = new ArrayList<Community>();
		communList2.add(com2);
		u2.setCommunities(communList2);
		u2.setHobbies("Football");
		saveOrUpdate(u2);
		
		User u3 = new User();
		u3.setEmail("hasancanakgunduz@gmail.com");
		u3.setName("Hasancan");
		u3.setSurname("Karacay");
		u3.setLocation("Ordu Turkey");
		Community com3 = new Community();
		com3.setTitle("Fishing");
		ArrayList<Community> communList3 = new ArrayList<Community>();
		communList3.add(com3);
		u3.setCommunities(communList3);
		u3.setHobbies("Technology");
		u3.setPhotoLink("3.jpeg");
		saveOrUpdate(u3);
		
		User u4 = new User();
		u4.setEmail("emregurer@gmail.com");
		u4.setName("Emre");
		u4.setSurname("Gurer");
		u4.setLocation("Istanbul Turkey");
		Community com4 = new Community();
		com4.setTitle("Photography in Istanbul");
		ArrayList<Community> communList4 = new ArrayList<Community>();
		communList4.add(com4);
		u4.setCommunities(communList4);
		u4.setHobbies("apple products");
		u4.setPhotoLink("4.jpeg");
		saveOrUpdate(u4);
		
		User u5 = new User();
		u5.setEmail("emredemirel@hotmail.com");
		u5.setName("Emre");
		u5.setSurname("Demirel");
		u5.setLocation("Mugla Turkey");
		Community com5 = new Community();
		com5.setTitle("Java Techologies");
		ArrayList<Community> communList5 = new ArrayList<Community>();
		communList5.add(com5);
		u5.setCommunities(communList5);
		u5.setHobbies("Java");
		u5.setPhotoLink("5.jpeg");
		saveOrUpdate(u5);
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
	public ResponseEntity<Collection<User>> getUsers(@RequestParam(value = "key", required = false) String key) {
		
		Collection<User> users = null;
		if (key == null) {
			// return all users
			users = userMap.values();
		} else {
			/**
			 * TODO: Call db search method here, return retrieved result
			 */
			System.out.println("search key: " + key);
			users = userMap.values(); // this will be changed
		}
		if(users==null || users.size()==0) {
			return new ResponseEntity<Collection<User>>(users, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<User>>(users, HttpStatus.OK);
	}
	
	// Get specific user by id
	@RequestMapping(value = "/api/users/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
		
		User user = userMap.get(id);
		if(user == null) {
			return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	// Create new user
	@RequestMapping(value = "/api/users", method = RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> createUser(@RequestBody User user) {
		
		User savedUser = saveOrUpdate(user);
		if(savedUser == null) {
			return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
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
		return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
	}
	
	//delete user
	@RequestMapping(value="api/users/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable("id") Integer id){
		boolean isDeleted = delete(id);
		if(!isDeleted) {
			return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(HttpStatus.OK);
	}

}
