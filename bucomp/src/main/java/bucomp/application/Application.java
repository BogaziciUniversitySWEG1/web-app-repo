package bucomp.application;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import bucomp.application.model.DbpediaClassModel;
import bucomp.application.semantic.api.DBPediaWS;

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
//		DBPediaWS dpDbPediaWS = new DBPediaWS();
//		List<DbpediaClassModel> ls = dpDbPediaWS.getCategories("Berlin,Adam");
//		for (DbpediaClassModel d : ls) {
//			System.out.println(d.getLabel() + " -- " + d.getUri());
//		}
	}
}
