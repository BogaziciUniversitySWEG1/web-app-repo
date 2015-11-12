package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the meetingnotes database table.
 * 
 */
@Entity
@Table(name="meetingnotes")
@NamedQuery(name="Meetingnote.findAll", query="SELECT m FROM Meetingnote m")
public class Meetingnote implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingNoteId;

	@Lob
	private byte[] meetingNote;

	//bi-directional many-to-one association to Meetingresource
	@ManyToOne
	@JoinColumn(name="MeetingResourceId")
	private Meetingresource meetingresource;

	//bi-directional many-to-one association to Meeting
	@ManyToOne
	@JoinColumn(name="MeetingId")
	private Meeting meeting;

	public Meetingnote() {
	}

	public int getMeetingNoteId() {
		return this.meetingNoteId;
	}

	public void setMeetingNoteId(int meetingNoteId) {
		this.meetingNoteId = meetingNoteId;
	}

	public byte[] getMeetingNote() {
		return this.meetingNote;
	}

	public void setMeetingNote(byte[] meetingNote) {
		this.meetingNote = meetingNote;
	}

	public Meetingresource getMeetingresource() {
		return this.meetingresource;
	}

	public void setMeetingresource(Meetingresource meetingresource) {
		this.meetingresource = meetingresource;
	}

	public Meeting getMeeting() {
		return this.meeting;
	}

	public void setMeeting(Meeting meeting) {
		this.meeting = meeting;
	}

}