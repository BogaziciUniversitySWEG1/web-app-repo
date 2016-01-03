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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int meetingAttendantId;

	private int meetingId;

	@ManyToOne
	@JoinColumn(name = "UserId")
	private User user;

	public Meetingattendant() {
	}

	public int getMeetingAttendantId() {
		return this.meetingAttendantId;
	}

	public void setMeetingAttendantId(int meetingAttendantId) {
		this.meetingAttendantId = meetingAttendantId;
	}

	public int getMeetingId() {
		return meetingId;
	}

	public void setMeetingId(int meetingId) {
		this.meetingId = meetingId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}