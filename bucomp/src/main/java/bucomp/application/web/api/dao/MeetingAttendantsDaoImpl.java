package bucomp.application.web.api.dao;

import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import bucomp.application.model.Meetingattendant;

public class MeetingAttendantsDaoImpl implements MeetingAttendantsDao {

	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public void saveMeetingAttendants(List<Meetingattendant> meetingAttendants) {
		EntityTransaction etx = null;
		try {
			for (Iterator<Meetingattendant> iterator = meetingAttendants
					.iterator(); iterator.hasNext();) {
				Meetingattendant ma = iterator.next();
				etx = dbService.getEntitymanager().getTransaction();
				etx.begin();
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
		try {
			Query query = dbService.getEntitymanager().createQuery(
				      "DELETE FROM Meetingattendant m WHERE m.meetingId = " + meetingId);
			return query.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
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
