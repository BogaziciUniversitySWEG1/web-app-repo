package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Community;
import bucomp.application.model.Communitymember;

public class CommunityDaoImpl implements CommunityDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();
	
	@Override
	public int getCommunityCount() {
		return getAllCommunities().size();
	}

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Community> getAllCommunities() {
		EntityTransaction etx = null;
		try{
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Community> clist = dbService.getEntitymanager().createQuery("SELECT c FROM Community c").getResultList();
			etx.commit();
			return clist;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Community getCommunityById(int id) {
		return dbService.getEntitymanager().find(Community.class, id);
	}

	@Override
	public Community saveCommunity(Community c) {
		EntityTransaction etx = null;
		try{
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(c);
			dbService.getEntitymanager().flush();
			etx.commit();			
			return c;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Community updateCommunity(Community c) {
		EntityTransaction etx = null;
		try {
			Community existingC = dbService.getEntitymanager().find(Community.class, c.getCommunityId());
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			existingC.setAccessType(c.getAccessType());
			existingC.setCommunityoffers(c.getCommunityoffers());
			existingC.setCreationDate(c.getCreationDate());
			existingC.setDescription(c.getDescription());
			existingC.setJoinType(c.getJoinType());
			existingC.setMeetingCreationType(c.getMeetingCreationType());
			existingC.setMeetings(c.getMeetings());
			existingC.setPostType(c.getPostType());
			existingC.setResourceAdditionType(c.getResourceAdditionType());
			existingC.setTitle(c.getTitle());
			existingC.setUser(c.getUser());
			
			etx.commit();			
			return c;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public void deleteCommunity(Community c) {
		EntityTransaction etx = null;
		try{
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().remove(c);
			etx.commit();				
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return;
		}
	}

	@Override
	public Community addCommunityMember(Community c, Communitymember cm) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeCommunityMember(Community c, Communitymember cm) {
		// TODO Auto-generated method stub
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<Community> searchCommunity(String key) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Community> clist = dbService.getEntitymanager().createQuery("SELECT c FROM Community c where c.title like '%" + key + "%' or c.description like '%" + key + "%'").getResultList();
			etx.commit();
			return clist;			
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}
	
	

}
