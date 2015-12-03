package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the roles database table.
 * 
 */
@Entity
@Table(name="roles")
@NamedQuery(name="Role.findAll", query="SELECT r FROM Role r")
public class Role implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int roleId;

	private String roleName;

	//bi-directional many-to-one association to Meetingrole
	@OneToMany(mappedBy="role")
	private List<Meetingrole> meetingroles;

	//bi-directional many-to-one association to Userrole
	@OneToMany(mappedBy="role")
	private List<Userrole> userroles;

	public Role() {
	}

	public int getRoleId() {
		return this.roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public List<Meetingrole> getMeetingroles() {
		return this.meetingroles;
	}

	public void setMeetingroles(List<Meetingrole> meetingroles) {
		this.meetingroles = meetingroles;
	}

	public Meetingrole addMeetingrole(Meetingrole meetingrole) {
		getMeetingroles().add(meetingrole);
		meetingrole.setRole(this);

		return meetingrole;
	}

	public Meetingrole removeMeetingrole(Meetingrole meetingrole) {
		getMeetingroles().remove(meetingrole);
		meetingrole.setRole(null);

		return meetingrole;
	}

	public List<Userrole> getUserroles() {
		return this.userroles;
	}

	public void setUserroles(List<Userrole> userroles) {
		this.userroles = userroles;
	}

	public Userrole addUserrole(Userrole userrole) {
		getUserroles().add(userrole);
		userrole.setRole(this);

		return userrole;
	}

	public Userrole removeUserrole(Userrole userrole) {
		getUserroles().remove(userrole);
		userrole.setRole(null);

		return userrole;
	}

}