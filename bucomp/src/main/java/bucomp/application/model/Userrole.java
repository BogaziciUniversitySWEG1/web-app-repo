package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the userroles database table.
 * 
 */
@Entity
@Table(name="userroles")
@NamedQuery(name="Userrole.findAll", query="SELECT u FROM Userrole u")
public class Userrole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int userRoleId;

	//bi-directional many-to-one association to Role
	@ManyToOne
	@JoinColumn(name="RoleId")
	private Role role;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="UserId")
	private User user;

	public Userrole() {
	}

	public int getUserRoleId() {
		return this.userRoleId;
	}

	public void setUserRoleId(int userRoleId) {
		this.userRoleId = userRoleId;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}