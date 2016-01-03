package bucomp.application.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;


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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int meetingId;

	private String IRCLink;

	private String location;
	
	private String latitude;
	private String longitude;

	@Temporal(TemporalType.TIMESTAMP)
	private Date startTime;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date endTime;

	private String timeZone;
	
	private String agenda;
	
	private int status;
	
	private int meetingOrganizerUserId;
	
	@Transient
	private List<MeetingInvitee> inviteeList;
	
	private String subject;

	//bi-directional many-to-one association to Meetingattendant
	@OneToMany(mappedBy="meeting")
	private List<Meetingattendant> meetingattendants;

	private String meetingnote;

	//bi-directional many-to-one association to Meetingrole
	@OneToMany(mappedBy="meeting")
	private List<Meetingrole> meetingroles;

	private int communityId;
 
	private int  meetingTypeId;

	public int getMeetingTypeId() {
		return meetingTypeId;
	}

	public void setMeetingTypeId(int meetingTypeId) {
		this.meetingTypeId = meetingTypeId;
	}

	public Meeting() {
	}

	public int getMeetingId() {
		return this.meetingId;
	}

	public void setMeetingId(int meetingId) {
		this.meetingId = meetingId;
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

	public int getCommunityId() {
		return communityId;
	}

	public void setCommunityId(int communityId) {
		this.communityId = communityId;
	}

	public String getAgenda() {
		return agenda;
	}

	public void setAgenda(String agenda) {
		this.agenda = agenda;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getMeetingOrganizerUserId() {
		return meetingOrganizerUserId;
	}

	public void setMeetingOrganizerUserId(int meetingOrganizerUserId) {
		this.meetingOrganizerUserId = meetingOrganizerUserId;
	}

	public List<MeetingInvitee> getInviteeList() {
		return inviteeList;
	}

	public void setInviteeList(List<MeetingInvitee> inviteeList) {
		this.inviteeList = inviteeList;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getMeetingnote() {
		return meetingnote;
	}

	public void setMeetingnote(String meetingnote) {
		this.meetingnote = meetingnote;
	}


}