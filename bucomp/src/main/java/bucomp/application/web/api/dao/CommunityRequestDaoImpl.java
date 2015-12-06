package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import bucomp.application.model.Communityrequest;

public class CommunityRequestDaoImpl implements CommunityRequestDao {

	DatabaseServiceImpl dbService = new DatabaseServiceImpl();
	
	@Override
	@SuppressWarnings("unchecked")
	public Collection<Communityrequest> getCommunityRequests(int communityId) {
		try{
			dbService.getEntitymanager().getTransaction().begin();
			List<Communityrequest> crlist = dbService.getEntitymanager().createQuery("SELECT c FROM Communityrequest c where c.CommunityId=" + communityId).getResultList();
			dbService.getEntitymanager().getTransaction().commit();			
			return crlist;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}

	@Override
	public Communityrequest saveCommunityRequest(Communityrequest cr) {
		try {
			dbService.getEntitymanager().getTransaction().begin();
			dbService.getEntitymanager().persist(cr);
			dbService.getEntitymanager().flush();
			dbService.getEntitymanager().getTransaction().commit();
			return cr;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}

	@Override
	public boolean approveCommunityRequest(int userId, int communityId) {
		try {
			Communityrequest existingCR = dbService.getEntitymanager().createQuery(
				    "SELECT c FROM Communityrequest c WHERE c.UserId = :userId AND c.CommunityId = :communityId",Communityrequest.class)
				    .setParameter("userId", userId)
				    .setParameter("communityId", communityId)
				    .getSingleResult();
			dbService.getEntitymanager().getTransaction().begin();
			existingCR.setStatus(1);
			dbService.getEntitymanager().getTransaction().commit();			
			return true;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return false;
		}
	}

	@Override
	public boolean denyCommunityRequest(int userId, int communityId) {
		try {
			Communityrequest existingCR = dbService.getEntitymanager().createQuery(
				    "SELECT c FROM Communityrequest c WHERE c.UserId = :userId AND c.CommunityId = :communityId",Communityrequest.class)
				    .setParameter("userId", userId)
				    .setParameter("communityId", communityId)
				    .getSingleResult();
			dbService.getEntitymanager().getTransaction().begin();
			existingCR.setStatus(2);
			dbService.getEntitymanager().getTransaction().commit();			
			return true;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return false;
		}
	}

}
