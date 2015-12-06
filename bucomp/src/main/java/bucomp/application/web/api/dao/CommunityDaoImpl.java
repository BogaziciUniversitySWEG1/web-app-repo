package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

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
		try{
			dbService.getEntitymanager().getTransaction().begin();
			List<Community> clist = dbService.getEntitymanager().createQuery("SELECT c FROM Community c").getResultList();
			dbService.getEntitymanager().getTransaction().commit();
			return clist;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}

	@Override
	public Community getCommunityById(int id) {
		return dbService.getEntitymanager().find(Community.class, id);
	}

	@Override
	public Community saveCommunity(Community c) {
		try {
			dbService.getEntitymanager().getTransaction().begin();
			dbService.getEntitymanager().persist(c);
			dbService.getEntitymanager().flush();
			dbService.getEntitymanager().getTransaction().commit();			
			return c;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}

	@Override
	public Community updateCommunity(Community c) {
		try {
			Community existingC = dbService.getEntitymanager().find(Community.class, c.getCommunityId());
			dbService.getEntitymanager().getTransaction().begin();
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
			
			dbService.getEntitymanager().getTransaction().commit();			
			return c;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}

	@Override
	public void deleteCommunity(Community c) {
		try{
			dbService.getEntitymanager().getTransaction().begin();
			dbService.getEntitymanager().remove(c);
			dbService.getEntitymanager().getTransaction().commit();				
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
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
		try {
			dbService.getEntitymanager().getTransaction().begin();
			List<Community> clist = dbService.getEntitymanager().createQuery("SELECT c FROM Community c where c.title like '%" + key + "%' or c.description like '%" + key + "%'").getResultList();
			dbService.getEntitymanager().getTransaction().commit();
			return clist;			
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}
	
	

}
