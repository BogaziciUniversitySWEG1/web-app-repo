package bucomp.application.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;


/**
 * The persistent class for the meeting_invitees database table.
 * 
 */
@Entity
@Table(name="meeting_invitees")
@NamedQuery(name="MeetingInvitee.findAll", query="SELECT m FROM MeetingInvitee m")
public class MeetingInvitee implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int meetingInviteeId;

	private int meetingId;
	
	private int userId;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date inviteSentDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date responseDate;
	
	private int status;
	
	private String explanation;

	public MeetingInvitee() {
	}

	public int getMeetingInviteeId() {
		return meetingInviteeId;
	}

	public void setMeetingInviteeId(int meetingInviteeId) {
		this.meetingInviteeId = meetingInviteeId;
	}

	public int getMeetingId() {
		return meetingId;
	}

	public void setMeetingId(int meetingId) {
		this.meetingId = meetingId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Date getInviteSentDate() {
		return inviteSentDate;
	}

	public void setInviteSentDate(Date inviteSentDate) {
		this.inviteSentDate = inviteSentDate;
	}

	public Date getResponseDate() {
		return responseDate;
	}

	public void setResponseDate(Date responseDate) {
		this.responseDate = responseDate;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}



}