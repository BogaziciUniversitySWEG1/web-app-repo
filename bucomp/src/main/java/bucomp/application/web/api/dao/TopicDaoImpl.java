package bucomp.application.web.api.dao;

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

}
