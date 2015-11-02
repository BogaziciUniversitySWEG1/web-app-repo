package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the meetingattendants database table.
 * 
 */
@Entity
@Table(name="meetingattendants")
@NamedQuery(name="Meetingattendant.findAll", query="SELECT m FROM Meetingattendant m")
public class Meetingattendant implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingAttendantId;

	//bi-directional many-to-one association to Meeting
	@ManyToOne
	@JoinColumn(name="MeetingId")
	private Meeting meeting;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="UserId")
	private User user;

	public Meetingattendant() {
	}

	public int getMeetingAttendantId() {
		return this.meetingAttendantId;
	}

	public void setMeetingAttendantId(int meetingAttendantId) {
		this.meetingAttendantId = meetingAttendantId;
	}

	public Meeting getMeeting() {
		return this.meeting;
	}

	public void setMeeting(Meeting meeting) {
		this.meeting = meeting;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}