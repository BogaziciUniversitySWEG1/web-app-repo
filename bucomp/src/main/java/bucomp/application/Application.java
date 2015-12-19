package bucomp.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * 
 * This class is the starting point for the application.
 * It initiates the spring-boot framework with initial configuration and loads the components.
 *
 */
@Configuration
@ComponentScan
@EnableAutoConfiguration
@EnableScheduling
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		// DBPediaWS dpDbPediaWS = new DBPediaWS();
		// List<DbpediaClassModel> ls = dpDbPediaWS.getCategories("Android");
		// for (DbpediaClassModel d : ls) {
		// System.out.println(d.getLabel() + " -- " + d.getUri());
		// }
	}
}
