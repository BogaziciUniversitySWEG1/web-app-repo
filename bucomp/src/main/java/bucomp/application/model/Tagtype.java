package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the tagtypes database table.
 * 
 */
@Entity
@Table(name="tagtypes")
@NamedQuery(name="Tagtype.findAll", query="SELECT t FROM Tagtype t")
public class Tagtype implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int tagTypeId;

	private String tagType;

	//bi-directional many-to-one association to Tagrelation
	@OneToMany(mappedBy="tagtype")
	private List<Tagrelation> tagrelations;

	public Tagtype() {
	}

	public int getTagTypeId() {
		return this.tagTypeId;
	}

	public void setTagTypeId(int tagTypeId) {
		this.tagTypeId = tagTypeId;
	}

	public String getTagType() {
		return this.tagType;
	}

	public void setTagType(String tagType) {
		this.tagType = tagType;
	}

	public List<Tagrelation> getTagrelations() {
		return this.tagrelations;
	}

	public void setTagrelations(List<Tagrelation> tagrelations) {
		this.tagrelations = tagrelations;
	}

	public Tagrelation addTagrelation(Tagrelation tagrelation) {
		getTagrelations().add(tagrelation);
		tagrelation.setTagtype(this);

		return tagrelation;
	}

	public Tagrelation removeTagrelation(Tagrelation tagrelation) {
		getTagrelations().remove(tagrelation);
		tagrelation.setTagtype(null);

		return tagrelation;
	}

}