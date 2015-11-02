package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


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
	private int communityRequestId;

	@Temporal(TemporalType.TIMESTAMP)
	private Date requestDate;

	private int status;

	//bi-directional many-to-one association to Community
	@ManyToOne
	@JoinColumn(name="CommunityId")
	private Community community;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="UserId")
	private User user;

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

	public Community getCommunity() {
		return this.community;
	}

	public void setCommunity(Community community) {
		this.community = community;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}