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

    @Scheduled(fixedRate = 60000)
    public void updateMeetingStatus() {
        List<Meeting> meetings = mdao.getAllMeetings(0);
        Date now = new Date();
        Date tomorrow = null;
        for (Iterator<Meeting> iterator = meetings.iterator(); iterator.hasNext();) {
			Meeting m = iterator.next();
			now = new Date();
			if(now.compareTo(m.getStartTime()) > 0) {
				mdao.updateMeetingStatus(m.getMeetingId(), 1);
			}
			Calendar c = Calendar.getInstance(); 
			c.setTime(now); 
			c.add(Calendar.DATE, 1);
			tomorrow = c.getTime();
			if(tomorrow.compareTo(m.getEndTime()) > 0) {
				mdao.updateMeetingStatus(m.getMeetingId(), 2);
			}
		}
        
    }
}