package bucomp.application.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


/**
 * The persistent class for the communityrequests database table.
 * 
 */
@Entity
@Table(name="communityrequests")
@NamedQuery(name="Communityrequest.findAll", query="SELECT c FROM Communityrequest c")
public class Communityrequest implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int communityRequestId;

	@Temporal(TemporalType.TIMESTAMP)
	private Date requestDate;

	private int status;

	private int CommunityId;

	private int UserId;
	
	private String explanation;

	public Communityrequest() {
	}

	public int getCommunityRequestId() {
		return this.communityRequestId;
	}

	public void setCommunityRequestId(int communityRequestId) {
		this.communityRequestId = communityRequestId;
	}

	public Date getRequestDate() {
		return this.requestDate;
	}

	public void setRequestDate(Date requestDate) {
		this.requestDate = requestDate;
	}

	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getCommunityId() {
		return CommunityId;
	}

	public void setCommunityId(int communityId) {
		CommunityId = communityId;
	}

	public int getUserId() {
		return UserId;
	}

	public void setUserId(int userId) {
		UserId = userId;
	}

	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}


}