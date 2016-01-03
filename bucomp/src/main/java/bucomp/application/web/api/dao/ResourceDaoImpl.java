package bucomp.application.web.api.dao;

import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Resource;


public class ResourceDaoImpl implements ResourceDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@SuppressWarnings("unchecked")
	@Override
	public List<Resource> getCommunityResources(int communityId) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Resource> resourceList = dbService.getEntitymanager()
					.createQuery("SELECT r FROM Resource r where r.communityId = " + communityId +" AND r.meetingId is NULL AND r.topicId is NULL").getResultList();
			etx.commit();
			return resourceList;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Resource> getMeetingResources(int meetingId) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Resource> resourceList = dbService.getEntitymanager()
					.createQuery("SELECT r FROM Resource r where r.meetingId = " + meetingId +" AND r.topicId is NULL").getResultList();
			etx.commit();
			return resourceList;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Resource> getTopicResources(int topicId) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Resource> resourceList = dbService.getEntitymanager()
					.createQuery("SELECT r FROM Resource r where r.topicId = " + topicId).getResultList();
			etx.commit();
			return resourceList;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Resource saveResource(Resource r) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(r);
			dbService.getEntitymanager().flush();
			etx.commit();
			return r;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
