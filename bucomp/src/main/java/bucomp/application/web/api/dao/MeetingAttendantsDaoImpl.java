package bucomp.application.web.api.dao;

import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Meetingattendant;

public class MeetingAttendantsDaoImpl implements MeetingAttendantsDao {

	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public void saveMeetingAttendants(List<Meetingattendant> meetingAttendants) {
		EntityTransaction etx = null;
		etx = dbService.getEntitymanager().getTransaction();
		etx.begin();
		try {
			for (Iterator<Meetingattendant> iterator = meetingAttendants
					.iterator(); iterator.hasNext();) {
				Meetingattendant ma = iterator.next();
				dbService.getEntitymanager().persist(ma);
				dbService.getEntitymanager().flush();
			}
			etx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return;
		}

	}

	@Override
	public int deleteMeetingAttendants(Integer meetingId) {
		
		EntityTransaction etx = null;
		int result=0;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			result = dbService.getEntitymanager().createQuery("DELETE FROM Meetingattendant m WHERE m.meetingId = " + meetingId).executeUpdate();
			etx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Meetingattendant> getMeetingAttendants(Integer meetingId) {
		EntityTransaction etx = null;
		try {
			dbService.getEntitymanager().clear();
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Meetingattendant> attendants = dbService.getEntitymanager()
					.createQuery("SELECT m FROM Meetingattendant m where m.meetingId = " + meetingId).getResultList();
			etx.commit();
			return attendants;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
