package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the meetingroles database table.
 * 
 */
@Entity
@Table(name="meetingroles")
@NamedQuery(name="Meetingrole.findAll", query="SELECT m FROM Meetingrole m")
public class Meetingrole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingRoleId;

	//bi-directional many-to-one association to Meeting
	@ManyToOne
	@JoinColumn(name="MeetingId")
	private Meeting meeting;

	//bi-directional many-to-one association to Role
	@ManyToOne
	@JoinColumn(name="RoleId")
	private Role role;

	public Meetingrole() {
	}

	public int getMeetingRoleId() {
		return this.meetingRoleId;
	}

	public void setMeetingRoleId(int meetingRoleId) {
		this.meetingRoleId = meetingRoleId;
	}

	public Meeting getMeeting() {
		return this.meeting;
	}

	public void setMeeting(Meeting meeting) {
		this.meeting = meeting;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

}