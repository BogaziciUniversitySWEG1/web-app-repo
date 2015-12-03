package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import bucomp.application.model.Community;
import bucomp.application.model.Communitymember;

public class CommunityDaoImpl implements CommunityDao {

	@Override
	public int getCommunityCount() {
		return getAllCommunities().size();
	}

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Community> getAllCommunities() {
		DatabaseServiceImpl.entitymanager.getTransaction().begin();
		List<Community> clist = DatabaseServiceImpl.entitymanager.createQuery("SELECT c FROM Community c").getResultList();
		DatabaseServiceImpl.entitymanager.getTransaction().commit();
		return clist;
	}

	@Override
	public Community getCommunityById(int id) {
		return DatabaseServiceImpl.entitymanager.find(Community.class, id);
	}

	@Override
	public Community saveCommunity(Community c) {
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.persist(c);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return c;
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Community updateCommunity(Community c) {
		try {
			Community existingC = DatabaseServiceImpl.entitymanager.find(Community.class, c.getCommunityId());
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			existingC.setAccessType(c.getAccessType());
			existingC.setCommunitymembers(c.getCommunitymembers());
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
			
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return c;
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public void deleteCommunity(Community c) {
		DatabaseServiceImpl.entitymanager.getTransaction().begin();
		DatabaseServiceImpl.entitymanager.remove(c);
		DatabaseServiceImpl.entitymanager.getTransaction().commit();	
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

	@Override
	public Collection<Community> searchCommunity(String key) {
		DatabaseServiceImpl.entitymanager.getTransaction().begin();
		List<Community> clist = DatabaseServiceImpl.entitymanager.createQuery("SELECT c FROM Community c where c.title like '%" + key + "%' or c.description like '%" + key + "%'").getResultList();
		DatabaseServiceImpl.entitymanager.getTransaction().commit();
		return clist;
	}
	
	

}
