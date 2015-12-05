package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Topic;

public interface TopicDao {

	public Topic saveTopic(Topic topic);

	public Topic getTopicById(Integer topicId);

	public List<Topic> getCommunityTopics(Integer communityId);

}