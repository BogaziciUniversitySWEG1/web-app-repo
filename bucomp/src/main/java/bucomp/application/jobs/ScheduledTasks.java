package bucomp.application.jobs;

import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import bucomp.application.model.Meeting;
import bucomp.application.web.api.dao.MeetingDao;
import bucomp.application.web.api.dao.MeetingDaoImpl;

@Component
public class ScheduledTasks {

	private MeetingDao mdao = new MeetingDaoImpl();

	/**
	 * This job runs every minute and checks upcoming meetings, if the meeting
	 * start time is passed in updates the status as ongoing. Finished meeting
	 * statuses are updated via user interface by clicking the finish meeting
	 * button. If it is forgotten, this scheduled job updates finished meeting
	 * status one day later.
	 * 
	 */
	@Scheduled(fixedRate = 60000)
	public void updateMeetingStatus() {
		// get upcomig all meetings (status=0)
		List<Meeting> meetings = mdao.getAllMeetings(0);
		Date now = new Date(); // used to check ongoing meetings
		Date tomorrow = null; // used to check finished meetings
		for (Iterator<Meeting> iterator = meetings.iterator(); iterator
				.hasNext();) {
			Meeting m = iterator.next();
			now = new Date();
			if (now.compareTo(m.getStartTime()) > 0) {
				mdao.updateMeetingStatus(m.getMeetingId(), 1);
			}
			Calendar c = Calendar.getInstance();
			c.setTime(now);
			c.add(Calendar.DATE, 1);
			tomorrow = c.getTime();
			if (m.getEndTime().compareTo(tomorrow) > 0) {
				mdao.updateMeetingStatus(m.getMeetingId(), 2);
			}
		}

	}
}