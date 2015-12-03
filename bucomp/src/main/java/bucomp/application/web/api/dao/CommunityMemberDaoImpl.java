package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import bucomp.application.model.Communitymember;

public class CommunityMemberDaoImpl implements CommunityMemberDao {

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Communitymember> getCommunityMembers(int communityId) {
		try{
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			List<Communitymember> members = DatabaseServiceImpl.entitymanager.createQuery("SELECT c FROM Communitymember c where CommunityId=" + communityId).getResultList();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return members;
		} catch(Exception e) {
			return null;
		}
	}

	@Override
	public Communitymember saveCommunityMember(Communitymember cm) {
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.persist(cm);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return cm;
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

}
