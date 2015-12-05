package bucomp.application.web.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Topic;
import bucomp.application.web.api.dao.TopicDao;
import bucomp.application.web.api.dao.TopicDaoImpl;

@RestController
public class TopicController {

	private TopicDao dao = new TopicDaoImpl();

	@RequestMapping(value = "/api/topics", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Topic> createTopic(@RequestBody Topic topic) {
		Topic createdTopic = dao.saveTopic(topic);
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
		return new ResponseEntity<Topic>(topic, HttpStatus.OK);
	}


}
