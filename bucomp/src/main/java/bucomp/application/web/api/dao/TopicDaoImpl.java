package bucomp.application.web.api.dao;

import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Topic;


public class TopicDaoImpl implements TopicDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public Topic saveTopic(Topic topic) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(topic);
			dbService.getEntitymanager().flush();
			etx.commit();			
			return topic;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}
	
	@Override
	public Topic getTopicById(Integer topicId) {
		try{
			return dbService.getEntitymanager().find(Topic.class, topicId);			
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Topic> getCommunityTopics(Integer communityId) {
		EntityTransaction etx = null;
		try{
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Topic> topics = dbService.getEntitymanager().createQuery("SELECT t FROM Topic t where t.CommunityId = " + communityId).getResultList();
			etx.commit();			
			return topics;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
