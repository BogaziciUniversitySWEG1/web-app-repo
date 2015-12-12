package bucomp.application.web.api.dao;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Tagrelation;

public class TagRelationsDaoImpl implements TagRelationsDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public Tagrelation saveTagRelation(Tagrelation tagRelation) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(tagRelation);
			dbService.getEntitymanager().flush();
			etx.commit();			
			return tagRelation;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
