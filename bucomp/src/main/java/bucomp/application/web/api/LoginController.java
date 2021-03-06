package bucomp.application.web.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.User;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class LoginController {
	
	UserDao userDao = new UserDaoImpl();
	
	@RequestMapping(value = "/api/login", method = RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> login(@RequestBody User user) {
		
		User existingUser = userDao.getUserByEmail(user.getEmail());
		if(existingUser == null || !user.getPassword().equals(existingUser.getPassword())) {
			return new ResponseEntity<User>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<User>(existingUser, HttpStatus.OK);
		
	}

}
