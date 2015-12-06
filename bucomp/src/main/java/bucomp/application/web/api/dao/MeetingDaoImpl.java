package bucomp.application.web.api.dao;

import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Meeting;

public class MeetingDaoImpl implements MeetingDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public Meeting saveMeeting(Meeting meeting) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(meeting);
			dbService.getEntitymanager().flush();
			etx.commit();
			return meeting;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public boolean deleteMeeting(Integer meetingId) {
		EntityTransaction etx = null;
		Meeting meeting = this.getMeetingById(meetingId);
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().remove(meeting);
			dbService.getEntitymanager().flush();
			etx.commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return false;
		}
	}

	@Override
	public Meeting getMeetingById(Integer meetingId) {
		try {
			return dbService.getEntitymanager().find(Meeting.class, meetingId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Meeting> getUserMeetings(int userId) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Meeting> meetings = dbService.getEntitymanager()
					.createQuery("SELECT m FROM Meeting m where m.user.userId = " + userId).getResultList();
			etx.commit();
			return meetings;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public List<Meeting> getSpecificMeetings(int a, int b) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Meeting> getCommunityMeetings(Integer communityId) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			// query to be updated
			List<Meeting> meetings = dbService.getEntitymanager()
					.createQuery("SELECT m FROM Meeting m where m.user.userId = " + communityId).getResultList();
			etx.commit();
			return meetings;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Meeting updateMeeting(Meeting m) {
		EntityTransaction etx = null;
		try {
			Meeting existingMeeting = dbService.getEntitymanager().find(Meeting.class, m.getMeetingId());
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			existingMeeting.setCommunity(m.getCommunity());
			existingMeeting.setDuration(m.getDuration());
			existingMeeting.setIRCLink(m.getIRCLink());
			existingMeeting.setLocation(m.getLocation());
			existingMeeting.setMeetingattendants(m.getMeetingattendants());
			existingMeeting.setMeetingDate(m.getMeetingDate());
			existingMeeting.setMeetingnotes(m.getMeetingnotes());
			existingMeeting.setMeetingresources(m.getMeetingresources());
			existingMeeting.setMeetingroles(m.getMeetingroles());
			existingMeeting.setMeetingtype(m.getMeetingtype());
			existingMeeting.setTimeZone(m.getTimeZone());

			etx.commit();
			return m;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
