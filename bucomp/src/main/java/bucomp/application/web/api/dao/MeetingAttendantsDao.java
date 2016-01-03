package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Meetingattendant;

public interface MeetingAttendantsDao {

	public void saveMeetingAttendants(List<Meetingattendant> meetingAttendants);

	public int deleteMeetingAttendants(Integer meetingId);

	public List<Meetingattendant> getMeetingAttendants(Integer meetingId);
	
}
