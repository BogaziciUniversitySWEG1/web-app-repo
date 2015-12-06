package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Communitymember;

public class CommunityMemberDaoImpl implements CommunityMemberDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	@SuppressWarnings("unchecked")
	public Collection<Communitymember> getCommunityMembers(int communityId) {
		EntityTransaction etx = null;
		try{
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Communitymember> members = dbService.getEntitymanager().createQuery("SELECT c FROM Communitymember c where c.CommunityId=" + communityId).getResultList();
			etx.commit();				
			return members;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Communitymember saveCommunityMember(Communitymember cm) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(cm);
			dbService.getEntitymanager().flush();
			etx.commit();			
			return cm;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
