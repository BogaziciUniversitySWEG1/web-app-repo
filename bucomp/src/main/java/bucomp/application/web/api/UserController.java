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

import bucomp.application.model.User;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class UserController {
	
	private UserDao dao = new UserDaoImpl();
	
	/**
	 * Request Mappings
	 */
	
	@RequestMapping(value = "/api/users/search", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<User>> searchUser(@RequestParam(value="key", required = true) String key) {
		System.out.println("UserController.searchUser()");
		Collection<User> users = null;
		users = dao.searchUser(key);
		if(users==null || users.size()==0) {
			return new ResponseEntity<Collection<User>>(users, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/api/users", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<User>> getAllUsers() {
		System.out.println("UserController.getAllUsers()");
		Collection<User> users = null;
		users = dao.getAllUsers();
		if(users==null || users.size()==0) {
			return new ResponseEntity<Collection<User>>(users, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<User>>(users, HttpStatus.OK);
	}	
	
	// Get specific user by id
	@RequestMapping(value = "/api/users/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
		System.out.println("UserController.getUserById()");
		User user = dao.getUserById(id);
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
		System.out.println("UserController.createUser()");
		User savedUser = dao.saveUser(user);
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
		System.out.println("UserController.updateUser()");
		User updatedUser = dao.updateUser(user);
		if(updatedUser == null) {
			return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
		
	}
	
	//delete user
	@RequestMapping(value="api/users/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable("id") Integer id){
		System.out.println("UserController.deleteUser()");
		boolean isDeleted = dao.delete(id);
		if(!isDeleted) {
			return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<User>(HttpStatus.OK);
	}

}
