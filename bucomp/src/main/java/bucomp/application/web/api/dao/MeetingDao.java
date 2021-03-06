package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Meeting;

public interface MeetingDao {

	public Meeting saveMeeting(Meeting meeting);

	public boolean deleteMeeting(Integer meetingId);

	public Meeting getMeetingById(Integer meetingId);

	public List<Meeting> getUserMeetings(int userId);

	public List<Meeting> getSpecificMeetings(int a, int b);
	
	public List<Meeting> getCommunityMeetings(Integer communityId, Integer status);

	public Meeting updateMeeting(Meeting m);

	List<Meeting> getAllMeetings(Integer status);
	
	List<Meeting> getActiveAndOngoingMeetings();

	int updateMeetingStatus(int meetingId, int status);
	
	public void updateMeetingNote(Integer meetingId, String meetingNote);

}
