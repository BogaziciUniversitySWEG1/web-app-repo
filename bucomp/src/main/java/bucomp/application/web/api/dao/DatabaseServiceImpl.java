package bucomp.application.web.api.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DatabaseServiceImpl {
	
	public static EntityManagerFactory emfactory;
	public static EntityManager entitymanager;
	static {
		emfactory = Persistence.createEntityManagerFactory( "BUCOMP_PU" );
		entitymanager = emfactory.createEntityManager( );
	}
	
	
	

}
