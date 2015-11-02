package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the meetings database table.
 * 
 */
@Entity
@Table(name="meetings")
@NamedQuery(name="Meeting.findAll", query="SELECT m FROM Meeting m")
public class Meeting implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingId;

	private int duration;

	private String IRCLink;

	private String location;

	@Temporal(TemporalType.TIMESTAMP)
	private Date meetingDate;

	private String timeZone;

	//bi-directional many-to-one association to Meetingattendant
	@OneToMany(mappedBy="meeting")
	private List<Meetingattendant> meetingattendants;

	//bi-directional many-to-one association to Meetingnote
	@OneToMany(mappedBy="meeting")
	private List<Meetingnote> meetingnotes;

	//bi-directional many-to-one association to Meetingresource
	@OneToMany(mappedBy="meeting")
	private List<Meetingresource> meetingresources;

	//bi-directional many-to-one association to Meetingrole
	@OneToMany(mappedBy="meeting")
	private List<Meetingrole> meetingroles;

	//bi-directional many-to-one association to Community
	@ManyToOne
	@JoinColumn(name="CommunityId")
	private Community community;

	//bi-directional many-to-one association to Meetingtype
	@ManyToOne
	@JoinColumn(name="MeetingTypeId")
	private Meetingtype meetingtype;

	public Meeting() {
	}

	public int getMeetingId() {
		return this.meetingId;
	}

	public void setMeetingId(int meetingId) {
		this.meetingId = meetingId;
	}

	public int getDuration() {
		return this.duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getIRCLink() {
		return this.IRCLink;
	}

	public void setIRCLink(String IRCLink) {
		this.IRCLink = IRCLink;
	}

	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getMeetingDate() {
		return this.meetingDate;
	}

	public void setMeetingDate(Date meetingDate) {
		this.meetingDate = meetingDate;
	}

	public String getTimeZone() {
		return this.timeZone;
	}

	public void setTimeZone(String timeZone) {
		this.timeZone = timeZone;
	}

	public List<Meetingattendant> getMeetingattendants() {
		return this.meetingattendants;
	}

	public void setMeetingattendants(List<Meetingattendant> meetingattendants) {
		this.meetingattendants = meetingattendants;
	}

	public Meetingattendant addMeetingattendant(Meetingattendant meetingattendant) {
		getMeetingattendants().add(meetingattendant);
		meetingattendant.setMeeting(this);

		return meetingattendant;
	}

	public Meetingattendant removeMeetingattendant(Meetingattendant meetingattendant) {
		getMeetingattendants().remove(meetingattendant);
		meetingattendant.setMeeting(null);

		return meetingattendant;
	}

	public List<Meetingnote> getMeetingnotes() {
		return this.meetingnotes;
	}

	public void setMeetingnotes(List<Meetingnote> meetingnotes) {
		this.meetingnotes = meetingnotes;
	}

	public Meetingnote addMeetingnote(Meetingnote meetingnote) {
		getMeetingnotes().add(meetingnote);
		meetingnote.setMeeting(this);

		return meetingnote;
	}

	public Meetingnote removeMeetingnote(Meetingnote meetingnote) {
		getMeetingnotes().remove(meetingnote);
		meetingnote.setMeeting(null);

		return meetingnote;
	}

	public List<Meetingresource> getMeetingresources() {
		return this.meetingresources;
	}

	public void setMeetingresources(List<Meetingresource> meetingresources) {
		this.meetingresources = meetingresources;
	}

	public Meetingresource addMeetingresource(Meetingresource meetingresource) {
		getMeetingresources().add(meetingresource);
		meetingresource.setMeeting(this);

		return meetingresource;
	}

	public Meetingresource removeMeetingresource(Meetingresource meetingresource) {
		getMeetingresources().remove(meetingresource);
		meetingresource.setMeeting(null);

		return meetingresource;
	}

	public List<Meetingrole> getMeetingroles() {
		return this.meetingroles;
	}

	public void setMeetingroles(List<Meetingrole> meetingroles) {
		this.meetingroles = meetingroles;
	}

	public Meetingrole addMeetingrole(Meetingrole meetingrole) {
		getMeetingroles().add(meetingrole);
		meetingrole.setMeeting(this);

		return meetingrole;
	}

	public Meetingrole removeMeetingrole(Meetingrole meetingrole) {
		getMeetingroles().remove(meetingrole);
		meetingrole.setMeeting(null);

		return meetingrole;
	}

	public Community getCommunity() {
		return this.community;
	}

	public void setCommunity(Community community) {
		this.community = community;
	}

	public Meetingtype getMeetingtype() {
		return this.meetingtype;
	}

	public void setMeetingtype(Meetingtype meetingtype) {
		this.meetingtype = meetingtype;
	}

}