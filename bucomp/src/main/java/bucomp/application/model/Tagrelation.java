package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the tagrelations database table.
 * 
 */
@Entity
@Table(name="tagrelations")
@NamedQuery(name="Tagrelation.findAll", query="SELECT t FROM Tagrelation t")
public class Tagrelation implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int tagRelationId;

	private int taggedObjectId;

	//bi-directional many-to-one association to Tag
	@ManyToOne
	@JoinColumn(name="TagId")
	private Tag tag;

	//bi-directional many-to-one association to Tagtype
	@ManyToOne
	@JoinColumn(name="TagTypeId")
	private Tagtype tagtype;

	public Tagrelation() {
	}

	public int getTagRelationId() {
		return this.tagRelationId;
	}

	public void setTagRelationId(int tagRelationId) {
		this.tagRelationId = tagRelationId;
	}

	public int getTaggedObjectId() {
		return this.taggedObjectId;
	}

	public void setTaggedObjectId(int taggedObjectId) {
		this.taggedObjectId = taggedObjectId;
	}

	public Tag getTag() {
		return this.tag;
	}

	public void setTag(Tag tag) {
		this.tag = tag;
	}

	public Tagtype getTagtype() {
		return this.tagtype;
	}

	public void setTagtype(Tagtype tagtype) {
		this.tagtype = tagtype;
	}

}