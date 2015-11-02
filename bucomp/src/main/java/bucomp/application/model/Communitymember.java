package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the communitymembers database table.
 * 
 */
@Entity
@Table(name="communitymembers")
@NamedQuery(name="Communitymember.findAll", query="SELECT c FROM Communitymember c")
public class Communitymember implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int communityMemberId;

	//bi-directional many-to-one association to Community
	@ManyToOne
	@JoinColumn(name="CommunityId")
	private Community community;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="UserId")
	private User user;

	//bi-directional many-to-one association to Role
	@ManyToOne
	@JoinColumn(name="RoleId")
	private Role role;

	public Communitymember() {
	}

	public int getCommunityMemberId() {
		return this.communityMemberId;
	}

	public void setCommunityMemberId(int communityMemberId) {
		this.communityMemberId = communityMemberId;
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

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

}