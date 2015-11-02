package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the communityoffers database table.
 * 
 */
@Entity
@Table(name="communityoffers")
@NamedQuery(name="Communityoffer.findAll", query="SELECT c FROM Communityoffer c")
public class Communityoffer implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int communityOfferId;

	@Temporal(TemporalType.TIMESTAMP)
	private Date offerDate;

	private String offerKey;

	//bi-directional many-to-one association to Community
	@ManyToOne
	@JoinColumn(name="CommunityId")
	private Community community;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="UserId")
	private User user;

	public Communityoffer() {
	}

	public int getCommunityOfferId() {
		return this.communityOfferId;
	}

	public void setCommunityOfferId(int communityOfferId) {
		this.communityOfferId = communityOfferId;
	}

	public Date getOfferDate() {
		return this.offerDate;
	}

	public void setOfferDate(Date offerDate) {
		this.offerDate = offerDate;
	}

	public String getOfferKey() {
		return this.offerKey;
	}

	public void setOfferKey(String offerKey) {
		this.offerKey = offerKey;
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