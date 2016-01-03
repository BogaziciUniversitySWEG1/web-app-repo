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
		dbService.getEntitymanager().clear();
		return getAllCommunities("SORT_BY_CREATION_DATE").size();
	}

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Community> getAllCommunities(String sortType) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			
			String query = "";
			if(sortType!=null && sortType.equals("SORT_BY_TITLE")) {
				query = "SELECT c FROM Community c order by c.title";				
			} else if(sortType!=null && sortType.equals("SORT_BY_CREATION_DATE")) {
				query = "SELECT c FROM Community c order by c.creationDate";				
			} else {
				query = "SELECT c FROM Community c";
			} 			
			
			List<Community> clist = dbService.getEntitymanager().createQuery(query)
					.getResultList();
			etx.commit();
			return clist;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Community> getUserCommunities(int userId, String sortType) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			String query = "";
			if(sortType!=null && sortType.equals("SORT_BY_TITLE")) {
				query = "SELECT c FROM Community c where c.communityId in (select cm.CommunityId from Communitymember cm where cm.user.userId=" + userId + ") order by c.title";				
			} else if(sortType!=null && sortType.equals("SORT_BY_CREATION_DATE")) {
				query = "SELECT c FROM Community c where c.communityId in (select cm.CommunityId from Communitymember cm where cm.user.userId=" + userId + ") order by c.creationDate";				
			} else {
				query = "SELECT c FROM Community c where c.communityId in (select cm.CommunityId from Communitymember cm where cm.user.userId=" + userId + ")";
			} 
			List<Community> clist = dbService.getEntitymanager().createQuery(query).getResultList();
			etx.commit();
			return clist;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Community getCommunityById(int id) {
		dbService.getEntitymanager().clear();
		return dbService.getEntitymanager().find(Community.class, id);
	}

	@Override
	public Community saveCommunity(Community c) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(c);
			dbService.getEntitymanager().flush();
			etx.commit();
			return c;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
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
			// existingC.setMeetings(c.getMeetings());
			existingC.setPostType(c.getPostType());
			existingC.setResourceAdditionType(c.getResourceAdditionType());
			existingC.setTitle(c.getTitle());
			existingC.setUser(c.getUser());

			etx.commit();
			return c;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public void deleteCommunity(Community c) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().remove(c);
			etx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
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
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Community> clist = dbService.getEntitymanager()
					.createQuery("SELECT c FROM Community c where c.title like '%" + key + "%' or c.description like '%"
							+ key + "%'")
					.getResultList();
			etx.commit();
			return clist;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

}
