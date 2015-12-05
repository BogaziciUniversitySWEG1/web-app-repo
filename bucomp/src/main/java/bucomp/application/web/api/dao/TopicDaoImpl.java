package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Topic;


public class TopicDaoImpl implements TopicDao {

	@Override
	public Topic saveTopic(Topic topic) {
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.persist(topic);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return topic;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}
	
	@Override
	public Topic getTopicById(Integer topicId) {
		try{
			return DatabaseServiceImpl.entitymanager.find(Topic.class, topicId);			
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Topic> getCommunityTopics(Integer communityId) {
		try{
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			List<Topic> topics = DatabaseServiceImpl.entitymanager.createQuery("SELECT t FROM Topic t where t.CommunityId = " + communityId).getResultList();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return topics;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

}
