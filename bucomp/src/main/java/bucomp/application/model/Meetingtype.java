package bucomp.application.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the meetingtypes database table.
 * 
 */
@Entity
@Table(name="meetingtypes")
@NamedQuery(name="Meetingtype.findAll", query="SELECT m FROM Meetingtype m")
public class Meetingtype implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int meetingTypeId;

	private String meetingType;

	public Meetingtype() {
	}

	public int getMeetingTypeId() {
		return this.meetingTypeId;
	}

	public void setMeetingTypeId(int meetingTypeId) {
		this.meetingTypeId = meetingTypeId;
	}

	public String getMeetingType() {
		return this.meetingType;
	}

	public void setMeetingType(String meetingType) {
		this.meetingType = meetingType;
	}

}