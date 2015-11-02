package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the meetingresources database table.
 * 
 */
@Entity
@Table(name="meetingresources")
@NamedQuery(name="Meetingresource.findAll", query="SELECT m FROM Meetingresource m")
public class Meetingresource implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingResourceId;

	private String description;

	private String link;

	private String resourceName;

	//bi-directional many-to-one association to Meetingnote
	@OneToMany(mappedBy="meetingresource")
	private List<Meetingnote> meetingnotes;

	//bi-directional many-to-one association to Meeting
	@ManyToOne
	@JoinColumn(name="MeetingId")
	private Meeting meeting;

	//bi-directional many-to-one association to Meetingresourcetype
	@ManyToOne
	@JoinColumn(name="MeetingResourceTypeId")
	private Meetingresourcetype meetingresourcetype;

	public Meetingresource() {
	}

	public int getMeetingResourceId() {
		return this.meetingResourceId;
	}

	public void setMeetingResourceId(int meetingResourceId) {
		this.meetingResourceId = meetingResourceId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLink() {
		return this.link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getResourceName() {
		return this.resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public List<Meetingnote> getMeetingnotes() {
		return this.meetingnotes;
	}

	public void setMeetingnotes(List<Meetingnote> meetingnotes) {
		this.meetingnotes = meetingnotes;
	}

	public Meetingnote addMeetingnote(Meetingnote meetingnote) {
		getMeetingnotes().add(meetingnote);
		meetingnote.setMeetingresource(this);

		return meetingnote;
	}

	public Meetingnote removeMeetingnote(Meetingnote meetingnote) {
		getMeetingnotes().remove(meetingnote);
		meetingnote.setMeetingresource(null);

		return meetingnote;
	}

	public Meeting getMeeting() {
		return this.meeting;
	}

	public void setMeeting(Meeting meeting) {
		this.meeting = meeting;
	}

	public Meetingresourcetype getMeetingresourcetype() {
		return this.meetingresourcetype;
	}

	public void setMeetingresourcetype(Meetingresourcetype meetingresourcetype) {
		this.meetingresourcetype = meetingresourcetype;
	}

}