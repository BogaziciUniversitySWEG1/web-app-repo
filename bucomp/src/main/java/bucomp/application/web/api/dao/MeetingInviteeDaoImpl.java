package bucomp.application.web.api.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.MeetingInvitee;
import bucomp.application.model.User;

public class MeetingInviteeDaoImpl implements MeetingInviteeDao {

	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public MeetingInvitee saveMeetingInvitee(MeetingInvitee meetingInvitee) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(meetingInvitee);
			dbService.getEntitymanager().flush();
			etx.commit();
			return meetingInvitee;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}
	
	@Override
	public MeetingInvitee getInviteeByMeetingAndUserId(Integer userId, Integer meetingId) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			MeetingInvitee invitee = (MeetingInvitee) dbService.getEntitymanager().createQuery(
					"SELECT m FROM MeetingInvitee m where m.userId=" + userId + " AND m.meetingId=" + meetingId)
					.getSingleResult();
			etx.commit();
			return invitee;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public boolean responseMeetingInvite(Integer meetingId, Integer userId, Integer status) {
		EntityTransaction etx = null;
		try {
			MeetingInvitee invitee = getInviteeByMeetingAndUserId(userId, meetingId);
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			invitee.setStatus(status);
			invitee.setResponseDate(new Date());
			etx.commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return false;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<MeetingInvitee> getMeetingInvitees(Integer meetingId) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<MeetingInvitee> inviteeList = dbService.getEntitymanager()
					.createQuery("SELECT m FROM MeetingInvitee m where m.meetingId=" + meetingId).getResultList();
			etx.commit();
			return inviteeList;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
