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
		} catch(Exception e) {
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
			return null;
		}
	}

	@Override
	public boolean approveCommunityRequest(Communityrequest cr) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean denyCommunityRequest(Communityrequest cr) {
		// TODO Auto-generated method stub
		return false;
	}

}
