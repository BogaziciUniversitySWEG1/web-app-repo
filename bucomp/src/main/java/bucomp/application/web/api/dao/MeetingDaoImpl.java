package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Meeting;

public class MeetingDaoImpl implements MeetingDao {

	@Override
	public Meeting saveMeeting(Meeting meeting) {
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.persist(meeting);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();
			return meeting;
		} catch (Exception e) {
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

	@Override
	public boolean deleteMeeting(Integer meetingId) {

		Meeting meeting = this.getMeetingById(meetingId);
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.remove(meeting);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();
			return true;

		} catch (Exception e) {
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return false;
		}
	}

	@Override
	public Meeting getMeetingById(Integer meetingId) {
		try {
			return DatabaseServiceImpl.entitymanager.find(Meeting.class, meetingId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Meeting> getUserMeetings(int userId) {
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			List<Meeting> meetings = DatabaseServiceImpl.entitymanager
					.createQuery("SELECT m FROM Meeting m where m.user.userId = " + userId).getResultList();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();
			return meetings;
		} catch (Exception e) {
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

	@Override
	public List<Meeting> getSpecificMeetings(int a, int b) {
		// TODO Auto-generated method stub
		return null;
	}

}
