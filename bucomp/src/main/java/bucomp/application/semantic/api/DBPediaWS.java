package bucomp.application.semantic.api;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import bucomp.application.model.DbpediaClassModel;
import bucomp.application.model.DbpediaModel;

public class DBPediaWS {
	private Client client;
	private WebResource webResource;
	private ClientResponse response;
	private Gson gson = new GsonBuilder().enableComplexMapKeySerialization().serializeNulls().create();
	private Type listType;

	public List<DbpediaClassModel> getCategories(String keyword) {
		String tags = keyword;
		String[] tagList = tags.split(",");
		List<DbpediaClassModel> categories = new ArrayList<DbpediaClassModel>();

		for (int i = 0; i < tagList.length; i++) {
			client = Client.create();
			webResource = client.resource(
					"http://lookup.dbpedia.org/api/search.asmx/PrefixSearch?QueryClass=&MaxHits=5&QueryString="
					
							+ tagList[i]);

			response = webResource.accept("application/json").get(ClientResponse.class);

			if (response.getStatus() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			Gson gson = new GsonBuilder().enableComplexMapKeySerialization().serializeNulls().create();
			String responsetodb = response.getEntity(String.class);
			JsonElement element = gson.fromJson(responsetodb, JsonElement.class);
			JsonObject o = element.getAsJsonObject();

			Type listType = new TypeToken<List<DbpediaModel>>() {
			}.getType();
			JsonArray resultArray = o.get("results").getAsJsonArray();
			List<DbpediaModel> dbpediamodel = gson.fromJson(resultArray, listType);

			for (DbpediaModel resultItem : dbpediamodel) {
				for (DbpediaClassModel classModel : resultItem.getCategories()) {
					categories.add(classModel);
				}
			}
		}

		return categories;
	}
}
