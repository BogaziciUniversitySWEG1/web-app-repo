package bucomp.application.web.api;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Post;
import bucomp.application.web.api.dao.PostDao;
import bucomp.application.web.api.dao.PostDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class PostController {

	private PostDao dao = new PostDaoImpl();
	private UserDao userdao = new UserDaoImpl();

	/**
	 * This method can be used to create a new post associated with a given
	 * object (community, topic, meeting, etc).
	 * 
	 * @param post
	 * @return <Post>
	 */
	@RequestMapping(value = "/api/posts", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Post> createNewPost(
			@RequestParam(value = "post") String post,
			@RequestParam(value = "postTypeId") Integer postTypeId,
			@RequestParam(value = "associatedObjectId") Integer associatedObjectId,
			@RequestParam(value = "title") String title,
			@RequestParam(value = "userId") Integer userId) {
		
		Post p = new Post();
		p.setPost(post);
		p.setPostDate(new Date());
		p.setPostTypeId(postTypeId);
		p.setAssociatedObjectId(associatedObjectId);
		p.setTitle(title);
		p.setUser(userdao.getUserById(userId));
		
		Post createdPost = dao.savePost(p);
		if (createdPost == null) {
			return new ResponseEntity<Post>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Post>(createdPost, HttpStatus.CREATED);

	}

	/**
	 * This service method can be used to retrieve a specific post
	 * 
	 * @param id
	 * @return <Post>
	 */
	@RequestMapping(value = "/api/posts/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Post> getPostById(@PathVariable("id") Integer id) {
		System.out.println("PostController.getPostById()");
		Post post = dao.getPostById(id);
		if (post == null) {
			return new ResponseEntity<Post>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Post>(post, HttpStatus.OK);
	}

	/**
	 * This service method can be used to retrieve posts associated with objects
	 * like communities, meetings, topics, etc...
	 * 
	 * @param postTypeId
	 * @param associatedObjectId
	 * @return Collection<Post>
	 */
	@RequestMapping(value = "/api/posts/filter", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Post>> getSpecificPosts(
			@RequestParam(value = "postTypeId", required = true) Integer postTypeId,
			@RequestParam(value = "associatedObjectId", required = true) Integer associatedObjectId) {
		List<Post> posts = dao.getSpecificPosts(postTypeId, associatedObjectId);
		if (posts == null) {
			return new ResponseEntity<Collection<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Post>>(posts, HttpStatus.OK);
	}
	
	/**
	 * This method can be used to retrieve a specific users posts
	 * @param id - userId
	 * @return Collection<Post>
	 */
	@RequestMapping(value = "/api/posts/userPosts/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Post>> getUserPosts(@PathVariable("id") Integer id) {
		List<Post> posts = dao.getUserPosts(id);
		if (posts == null) {
			return new ResponseEntity<Collection<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Post>>(posts, HttpStatus.OK);
	}
	
	

}
