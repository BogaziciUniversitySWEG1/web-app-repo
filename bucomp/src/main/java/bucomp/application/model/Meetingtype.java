package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the meetingtypes database table.
 * 
 */
@Entity
@Table(name="meetingtypes")
@NamedQuery(name="Meetingtype.findAll", query="SELECT m FROM Meetingtype m")
public class Meetingtype implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingTypeId;

	private String meetingType;

	//bi-directional many-to-one association to Meeting
	@OneToMany(mappedBy="meetingtype")
	private List<Meeting> meetings;

	public Meetingtype() {
	}

	public int getMeetingTypeId() {
		return this.meetingTypeId;
	}

	public void setMeetingTypeId(int meetingTypeId) {
		this.meetingTypeId = meetingTypeId;
	}

	public String getMeetingType() {
		return this.meetingType;
	}

	public void setMeetingType(String meetingType) {
		this.meetingType = meetingType;
	}

	public List<Meeting> getMeetings() {
		return this.meetings;
	}

	public void setMeetings(List<Meeting> meetings) {
		this.meetings = meetings;
	}

	public Meeting addMeeting(Meeting meeting) {
		getMeetings().add(meeting);
		meeting.setMeetingtype(this);

		return meeting;
	}

	public Meeting removeMeeting(Meeting meeting) {
		getMeetings().remove(meeting);
		meeting.setMeetingtype(null);

		return meeting;
	}

}