package bucomp.application.web.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.User;

@RestController
public class LoginController {
	
	@RequestMapping(value = "/api/login", method = RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> createUser(@RequestBody User user) {
		
		User existingUser = UserController.userMap.get(user.getUserId());
		if(existingUser == null || user.getUserId() != existingUser.getUserId()) {
			return new ResponseEntity<User>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<User>(existingUser, HttpStatus.OK);
		
	}

}
