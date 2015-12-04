package bucomp.application.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the posttypes database table.
 * 
 */
@Entity
@Table(name="posttypes")
@NamedQuery(name="Posttype.findAll", query="SELECT p FROM Posttype p")
public class Posttype implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int postTypeId;

	private String postType;

	public Posttype() {
	}

	public int getPostTypeId() {
		return this.postTypeId;
	}

	public void setPostTypeId(int postTypeId) {
		this.postTypeId = postTypeId;
	}

	public String getPostType() {
		return this.postType;
	}

	public void setPostType(String postType) {
		this.postType = postType;
	}

}