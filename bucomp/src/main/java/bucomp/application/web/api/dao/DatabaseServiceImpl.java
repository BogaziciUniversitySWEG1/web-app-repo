package bucomp.application.web.api.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DatabaseServiceImpl {
	
	private EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "BUCOMP_PU" );
	private EntityManager entitymanager = null;
	
	public EntityManager getEntitymanager() {
		if(entitymanager==null || !entitymanager.isOpen()) {
			entitymanager = emfactory.createEntityManager();
		}
		return entitymanager;
	}

}
