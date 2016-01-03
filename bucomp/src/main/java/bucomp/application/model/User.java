package bucomp.application.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * The persistent class for the users database table.
 * 
 */
@Entity
@Table(name = "users")
@NamedQuery(name = "User.findAll", query = "SELECT u FROM User u")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;

	private String CVLink;

	private String email;

	private String hobbies;

	private String location;
	private String latitude;
	private String longitude;

	private String name;

	private String password;

	private String photoLink;

	private String surname;

	private String education;

	private String profession;

	// bi-directional many-to-one association to Communityoffer
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private List<Communityoffer> communityoffers;

	// bi-directional many-to-one association to Userrole
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private List<Userrole> userroles;

	public User() {
	}

	public int getUserId() {
		return this.userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getCVLink() {
		return this.CVLink;
	}

	public void setCVLink(String CVLink) {
		this.CVLink = CVLink;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getHobbies() {
		return this.hobbies;
	}

	public void setHobbies(String hobbies) {
		this.hobbies = hobbies;
	}

	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhotoLink() {
		return this.photoLink;
	}

	public void setPhotoLink(String photoLink) {
		this.photoLink = photoLink;
	}

	public String getSurname() {
		return this.surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public List<Communityoffer> getCommunityoffers() {
		return this.communityoffers;
	}

	public void setCommunityoffers(List<Communityoffer> communityoffers) {
		this.communityoffers = communityoffers;
	}

	public Communityoffer addCommunityoffer(Communityoffer communityoffer) {
		getCommunityoffers().add(communityoffer);
		communityoffer.setUser(this);

		return communityoffer;
	}

	public Communityoffer removeCommunityoffer(Communityoffer communityoffer) {
		getCommunityoffers().remove(communityoffer);
		communityoffer.setUser(null);

		return communityoffer;
	}

	public List<Userrole> getUserroles() {
		return this.userroles;
	}

	public void setUserroles(List<Userrole> userroles) {
		this.userroles = userroles;
	}

	public Userrole addUserrole(Userrole userrole) {
		getUserroles().add(userrole);
		userrole.setUser(this);

		return userrole;
	}

	public Userrole removeUserrole(Userrole userrole) {
		getUserroles().remove(userrole);
		userrole.setUser(null);

		return userrole;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

}