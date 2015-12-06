package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import bucomp.application.model.Communitymember;

public class CommunityMemberDaoImpl implements CommunityMemberDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Communitymember> getCommunityMembers(int communityId) {
		try{
			dbService.getEntitymanager().getTransaction().begin();
			List<Communitymember> members = dbService.getEntitymanager().createQuery("SELECT c FROM Communitymember c where c.CommunityId=" + communityId).getResultList();
			dbService.getEntitymanager().getTransaction().commit();			
			return members;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}

	@Override
	public Communitymember saveCommunityMember(Communitymember cm) {
		try {
			dbService.getEntitymanager().getTransaction().begin();
			dbService.getEntitymanager().persist(cm);
			dbService.getEntitymanager().flush();
			dbService.getEntitymanager().getTransaction().commit();			
			return cm;
		} catch(Exception e){
			e.printStackTrace();
			dbService.getEntitymanager().getTransaction().rollback();
			return null;
		}
	}

}
