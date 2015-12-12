package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.MeetingInvitee;

public interface MeetingInviteeDao {

	public MeetingInvitee saveMeetingInvitee(MeetingInvitee meetingInvitee);

	public boolean responseMeetingInvite(Integer meetingId, Integer userId, Integer status);

	public MeetingInvitee getInviteeByMeetingAndUserId(Integer userId, Integer meetingId);

	List<MeetingInvitee> getMeetingInvitees(Integer meetingId);

}
