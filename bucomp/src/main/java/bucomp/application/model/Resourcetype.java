package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the resourcetypes database table.
 * 
 */
@Entity
@Table(name="resourcetypes")
@NamedQuery(name="Resourcetype.findAll", query="SELECT r FROM Resourcetype r")
public class Resourcetype implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int resourceTypeId;

	private String resourceType;

	public Resourcetype() {
	}

	public int getResourceTypeId() {
		return this.resourceTypeId;
	}

	public void setResourceTypeId(int resourceTypeId) {
		this.resourceTypeId = resourceTypeId;
	}

	public String getResourceType() {
		return this.resourceType;
	}

	public void setResourceType(String resourceType) {
		this.resourceType = resourceType;
	}

}