package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import bucomp.application.model.Communityrequest;

public class CommunityRequestDaoImpl implements CommunityRequestDao {

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Communityrequest> getAllCommunityRequests() {
		try{
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			List<Communityrequest> crlist = DatabaseServiceImpl.entitymanager.createQuery("SELECT c FROM Communityrequest c").getResultList();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return crlist;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

	@Override
	public Communityrequest getCommunityRequestById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Communityrequest saveCommunityRequest(Communityrequest cr) {
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.persist(cr);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return cr;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

	@Override
	public boolean approveCommunityRequest(int userId, int communityId) {
		try {
			Communityrequest existingCR = DatabaseServiceImpl.entitymanager.createQuery(
				    "SELECT c FROM Communityrequest c WHERE c.UserId = :userId AND c.CommunityId = :communityId",Communityrequest.class)
				    .setParameter("userId", userId)
				    .setParameter("communityId", communityId)
				    .getSingleResult();
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			existingCR.setStatus(1);
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return true;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return false;
		}
	}

	@Override
	public boolean denyCommunityRequest(int userId, int communityId) {
		try {
			Communityrequest existingCR = DatabaseServiceImpl.entitymanager.createQuery(
				    "SELECT c FROM Communityrequest c WHERE c.UserId = :userId AND c.CommunityId = :communityId",Communityrequest.class)
				    .setParameter("userId", userId)
				    .setParameter("communityId", communityId)
				    .getSingleResult();
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			existingCR.setStatus(2);
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return true;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return false;
		}
	}

}
