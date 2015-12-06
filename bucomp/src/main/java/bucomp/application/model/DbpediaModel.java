package bucomp.application.model;

import java.util.List;

public class DbpediaModel {
	private String uri;
	private String label;
	private Integer refCount;
	private String description;
	private List<DbpediaClassModel> classes;
	private List<DbpediaClassModel> categories;
	private List<DbpediaClassModel> templates;
	private List<DbpediaClassModel> redirects;

	public String getUri() {
		return uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public Integer getRefCount() {
		return refCount;
	}

	public void setRefCount(Integer refCount) {
		this.refCount = refCount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<DbpediaClassModel> getClasses() {
		return classes;
	}

	public void setClasses(List<DbpediaClassModel> classes) {
		this.classes = classes;
	}

	public List<DbpediaClassModel> getCategories() {
		return categories;
	}

	public void setCategories(List<DbpediaClassModel> categories) {
		this.categories = categories;
	}

	public List<DbpediaClassModel> getTemplates() {
		return templates;
	}

	public void setTemplates(List<DbpediaClassModel> templates) {
		this.templates = templates;
	}

	public List<DbpediaClassModel> getRedirects() {
		return redirects;
	}

	public void setRedirects(List<DbpediaClassModel> redirects) {
		this.redirects = redirects;
	}
}
