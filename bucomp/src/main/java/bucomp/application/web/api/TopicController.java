package bucomp.application.web.api;

import java.util.ArrayList;
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

import bucomp.application.model.Resource;
import bucomp.application.model.Tag;
import bucomp.application.model.Topic;
import bucomp.application.web.api.dao.ResourceDao;
import bucomp.application.web.api.dao.ResourceDaoImpl;
import bucomp.application.web.api.dao.TagDao;
import bucomp.application.web.api.dao.TagDaoImpl;
import bucomp.application.web.api.dao.TopicDao;
import bucomp.application.web.api.dao.TopicDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class TopicController {

	private TopicDao dao = new TopicDaoImpl();
	private UserDao userdao = new UserDaoImpl();
	private TagDao tagdao = new TagDaoImpl();
	private ResourceDao rdao = new ResourceDaoImpl();

	@RequestMapping(value = "/api/topics", method = RequestMethod.POST, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Topic> createTopic(
			@RequestParam(value = "title") String title,
			@RequestParam(value = "description") String description,
			@RequestParam(value = "communityId") Integer communityId,
			@RequestParam(value = "creatorUserId") Integer creatorUserId) {
		
		Topic t = new Topic();
		t.setTitle(title);
		t.setDescription(description);
		t.setUser(userdao.getUserById(creatorUserId));
		t.setCommunityId(communityId);
		t.setCreationDate(new Date());
		
		
		Topic createdTopic = dao.saveTopic(t);
		if (createdTopic == null) {
			return new ResponseEntity<Topic>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Topic>(createdTopic, HttpStatus.CREATED);

	}
	
	/**
	 * This service method can be used to retrieve a specific topic
	 * 
	 * @param id - topicId
	 * @return <Topic>
	 */
	@RequestMapping(value = "/api/topics/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Topic> getTopicById(@PathVariable("id") Integer id) {
		Topic topic = dao.getTopicById(id);
		if (topic == null) {
			return new ResponseEntity<Topic>(HttpStatus.NO_CONTENT);
		}
		topic.setTagList( new ArrayList<Tag>(tagdao.getTopicTags(topic.getTopicId())));
		return new ResponseEntity<Topic>(topic, HttpStatus.OK);
	}
	
	/**
	 * This method can be used to retrieve topic list of a community
	 * @param communityId
	 * @return Collection<Topic>
	 */
	@RequestMapping(value = "/api/topics/communityTopics/{communityId}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Topic>> getCommunityTopics(@PathVariable("communityId") Integer communityId) {
		List<Topic> topics = dao.getCommunityTopics(communityId);
		if (topics == null) {
			return new ResponseEntity<Collection<Topic>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Topic>>(topics, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/topics/resources/{topicId}", 
			method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Resource>> getCommunityResources(
			@PathVariable("topicId") Integer topicId) {
		Collection<Resource> resources = rdao.getCommunityResources(topicId);
		if (resources == null || resources.size() == 0) {
			return new ResponseEntity<Collection<Resource>>(resources, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<Resource>>(resources, HttpStatus.OK);
	}
}
