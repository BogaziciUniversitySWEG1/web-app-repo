package bucomp.application.web.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Post;
import bucomp.application.web.api.dao.PostDao;
import bucomp.application.web.api.dao.PostDaoImpl;

@RestController
public class PostController {
	
	private PostDao dao = new PostDaoImpl();
	
	@RequestMapping(value = "/api/posts", method = RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Post>  createNewPost(@RequestBody Post post) {
		Post createdPost = dao.savePost(post);
		if(createdPost == null) {
			return new ResponseEntity<Post>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Post>(createdPost, HttpStatus.CREATED);
		
	}
	
	@RequestMapping(value = "/api/posts/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Post> getPostById(@PathVariable("id") Integer id) {
		System.out.println("PostController.getPostById()");
		Post post = dao.getPostById(id);
		if(post == null) {
			return new ResponseEntity<Post>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Post>(post, HttpStatus.OK);
	}

}
