package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userId;

	private String CVLink;

	private String email;

	private String hobbies;

	private String location;

	private String name;

	private String password;

	private String photoLink;

	private String surname;

//	// bi-directional many-to-one association to Community
//	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//	private List<Community> communities;

	// bi-directional many-to-one association to Communitymember
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private List<Communitymember> communitymembers;

	// bi-directional many-to-one association to Communityoffer
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private List<Communityoffer> communityoffers;

	// bi-directional many-to-one association to Meetingattendant
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private List<Meetingattendant> meetingattendants;

	// bi-directional many-to-one association to Post
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private List<Post> posts;

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

//	public List<Community> getCommunities() {
//		return this.communities;
//	}
//
//	public void setCommunities(List<Community> communities) {
//		this.communities = communities;
//	}

//	public Community addCommunity(Community community) {
//		getCommunities().add(community);
//		community.setUser(this);
//
//		return community;
//	}
//
//	public Community removeCommunity(Community community) {
//		getCommunities().remove(community);
//		community.setUser(null);
//
//		return community;
//	}

	public List<Communitymember> getCommunitymembers() {
		return this.communitymembers;
	}

	public void setCommunitymembers(List<Communitymember> communitymembers) {
		this.communitymembers = communitymembers;
	}

	public Communitymember addCommunitymember(Communitymember communitymember) {
		getCommunitymembers().add(communitymember);
		communitymember.setUser(this);

		return communitymember;
	}

	public Communitymember removeCommunitymember(Communitymember communitymember) {
		getCommunitymembers().remove(communitymember);
		communitymember.setUser(null);

		return communitymember;
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

	public List<Meetingattendant> getMeetingattendants() {
		return this.meetingattendants;
	}

	public void setMeetingattendants(List<Meetingattendant> meetingattendants) {
		this.meetingattendants = meetingattendants;
	}

	public Meetingattendant addMeetingattendant(
			Meetingattendant meetingattendant) {
		getMeetingattendants().add(meetingattendant);
		meetingattendant.setUser(this);

		return meetingattendant;
	}

	public Meetingattendant removeMeetingattendant(
			Meetingattendant meetingattendant) {
		getMeetingattendants().remove(meetingattendant);
		meetingattendant.setUser(null);

		return meetingattendant;
	}

	public List<Post> getPosts() {
		return this.posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	public Post addPost(Post post) {
		getPosts().add(post);
		post.setUser(this);

		return post;
	}

	public Post removePost(Post post) {
		getPosts().remove(post);
		post.setUser(null);

		return post;
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

}