package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the tags database table.
 * 
 */
@Entity
@Table(name="tags")
@NamedQuery(name="Tag.findAll", query="SELECT t FROM Tag t")
public class Tag implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int tagId;

	@Temporal(TemporalType.TIMESTAMP)
	private Date creationDate;

	private String tag;

	//bi-directional many-to-one association to Tagrelation
	@OneToMany(mappedBy="tag")
	private List<Tagrelation> tagrelations;

	public Tag() {
	}

	public int getTagId() {
		return this.tagId;
	}

	public void setTagId(int tagId) {
		this.tagId = tagId;
	}

	public Date getCreationDate() {
		return this.creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getTag() {
		return this.tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public List<Tagrelation> getTagrelations() {
		return this.tagrelations;
	}

	public void setTagrelations(List<Tagrelation> tagrelations) {
		this.tagrelations = tagrelations;
	}

	public Tagrelation addTagrelation(Tagrelation tagrelation) {
		getTagrelations().add(tagrelation);
		tagrelation.setTag(this);

		return tagrelation;
	}

	public Tagrelation removeTagrelation(Tagrelation tagrelation) {
		getTagrelations().remove(tagrelation);
		tagrelation.setTag(null);

		return tagrelation;
	}

}