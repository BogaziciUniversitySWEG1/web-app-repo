package bucomp.application.web.api.dao;

import java.util.List;

import javax.persistence.EntityTransaction;
import javax.persistence.Query;

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
			if (etx != null)
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
			if (etx != null)
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
			if (etx != null)
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
	public List<Meeting> getCommunityMeetings(Integer communityId, Integer status) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			// query to be updated
			String query = "";
			if(status == null) {
				query = "SELECT m FROM Meeting m where m.communityId = " + communityId + " order by m.startTime DESC";				
			} else {
				query = "SELECT m FROM Meeting m where m.communityId = " + communityId + " AND m.status = " + status + " order by m.startTime DESC";
			}
			List<Meeting> meetings = dbService.getEntitymanager().createQuery(query).getResultList();
			etx.commit();
			return meetings;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
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
			existingMeeting.setIRCLink(m.getIRCLink());
			existingMeeting.setLocation(m.getLocation());
			existingMeeting.setMeetingattendants(m.getMeetingattendants());
			existingMeeting.setMeetingnotes(m.getMeetingnotes());
			existingMeeting.setMeetingresources(m.getMeetingresources());
			existingMeeting.setMeetingroles(m.getMeetingroles());
			//existingMeeting.setMeetingtype(m.getMeetingtype());
			existingMeeting.setTimeZone(m.getTimeZone());

			etx.commit();
			return m;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}
	
	@Override
	public int updateMeetingStatus(int meetingId, int status) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			Query query = dbService.getEntitymanager().createQuery("Update Meeting m SET m.status = :status where m.meetingId=:meetingId");
			query.setParameter("status", status);
			query.setParameter("meetingId", meetingId);
			int updateCount = query.executeUpdate();
			etx.commit();
			return updateCount;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return 0;
		}
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public List<Meeting> getAllMeetings(Integer status) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			// query to be updated
			String query = "";
			if(status == null) {
				query = "SELECT m FROM Meeting m order by m.startTime DESC";				
			} else {
				query = "SELECT m FROM Meeting m where m.status = " + status;
			}
			List<Meeting> meetings = dbService.getEntitymanager().createQuery(query).getResultList();
			etx.commit();
			return meetings;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Meeting> getActiveAndOngoingMeetings() {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			// query to be updated
			String query = "SELECT m FROM Meeting m where m.status = 0 OR m.status = 1";
			List<Meeting> meetings = dbService.getEntitymanager().createQuery(query).getResultList();
			etx.commit();
			return meetings;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

}
