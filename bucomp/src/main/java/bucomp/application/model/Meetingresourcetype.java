package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the meetingresourcetypes database table.
 * 
 */
@Entity
@Table(name="meetingresourcetypes")
@NamedQuery(name="Meetingresourcetype.findAll", query="SELECT m FROM Meetingresourcetype m")
public class Meetingresourcetype implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingResourceTypeId;

	private String meetingResourceType;

	//bi-directional many-to-one association to Meetingresource
	@OneToMany(mappedBy="meetingresourcetype")
	private List<Meetingresource> meetingresources;

	public Meetingresourcetype() {
	}

	public int getMeetingResourceTypeId() {
		return this.meetingResourceTypeId;
	}

	public void setMeetingResourceTypeId(int meetingResourceTypeId) {
		this.meetingResourceTypeId = meetingResourceTypeId;
	}

	public String getMeetingResourceType() {
		return this.meetingResourceType;
	}

	public void setMeetingResourceType(String meetingResourceType) {
		this.meetingResourceType = meetingResourceType;
	}

	public List<Meetingresource> getMeetingresources() {
		return this.meetingresources;
	}

	public void setMeetingresources(List<Meetingresource> meetingresources) {
		this.meetingresources = meetingresources;
	}

	public Meetingresource addMeetingresource(Meetingresource meetingresource) {
		getMeetingresources().add(meetingresource);
		meetingresource.setMeetingresourcetype(this);

		return meetingresource;
	}

	public Meetingresource removeMeetingresource(Meetingresource meetingresource) {
		getMeetingresources().remove(meetingresource);
		meetingresource.setMeetingresourcetype(null);

		return meetingresource;
	}

}