package bucomp.application.model;

import java.util.List;

public class MOM {
	
	private int meetingId;

	private List<Integer> attendants;
	
	private String meetingNote;

	public int getMeetingId() {
		return meetingId;
	}

	public void setMeetingId(int meetingId) {
		this.meetingId = meetingId;
	}

	public List<Integer> getAttendants() {
		return attendants;
	}

	public void setAttendants(List<Integer> attendants) {
		this.attendants = attendants;
	}

	public String getMeetingNote() {
		return meetingNote;
	}

	public void setMeetingNote(String meetingNote) {
		this.meetingNote = meetingNote;
	}

}