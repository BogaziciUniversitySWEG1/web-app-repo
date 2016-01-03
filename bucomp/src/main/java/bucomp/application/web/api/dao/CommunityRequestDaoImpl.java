package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Communityrequest;

public class CommunityRequestDaoImpl implements CommunityRequestDao {

	DatabaseServiceImpl dbService = new DatabaseServiceImpl();
	
	@Override
	@SuppressWarnings("unchecked")
	public Collection<Communityrequest> getCommunityRequests(int communityId) {
		EntityTransaction etx = null;
		try{
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Communityrequest> crlist = dbService.getEntitymanager().createQuery("SELECT c FROM Communityrequest c where c.CommunityId=" + communityId).getResultList();
			etx.commit();		
			return crlist;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Communityrequest saveCommunityRequest(Communityrequest cr) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(cr);
			dbService.getEntitymanager().flush();
			etx.commit();
			return cr;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public boolean approveCommunityRequest(int userId, int communityId) {
		EntityTransaction etx = null;
		try {
			Communityrequest existingCR = dbService.getEntitymanager().createQuery(
				    "SELECT c FROM Communityrequest c WHERE c.UserId = :userId AND c.CommunityId = :communityId",Communityrequest.class)
				    .setParameter("userId", userId)
				    .setParameter("communityId", communityId)
				    .getSingleResult();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			existingCR.setStatus(1);
			etx.commit();	
			return true;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return false;
		}
	}

	@Override
	public boolean denyCommunityRequest(int userId, int communityId) {
		EntityTransaction etx = null;
		try {
			Communityrequest existingCR = dbService.getEntitymanager().createQuery(
				    "SELECT c FROM Communityrequest c WHERE c.UserId = :userId AND c.CommunityId = :communityId",Communityrequest.class)
				    .setParameter("userId", userId)
				    .setParameter("communityId", communityId)
				    .getSingleResult();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			existingCR.setStatus(2);
			etx.commit();
			return true;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return false;
		}
	}

}
