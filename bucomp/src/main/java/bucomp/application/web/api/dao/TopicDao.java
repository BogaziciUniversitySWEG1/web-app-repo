package bucomp.application.web.api.dao;

import bucomp.application.model.Topic;

public interface TopicDao {

	public Topic saveTopic(Topic topic);

	Topic getTopicById(Integer topicId);

}