package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the communities database table.
 * 
 */
@Entity
@Table(name="communities")
@NamedQuery(name="Community.findAll", query="SELECT c FROM Community c")
public class Community implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int communityId;

	private int accessType;

	@Temporal(TemporalType.TIMESTAMP)
	private Date creationDate;

	private String description;

	private int joinType;

	private int meetingCreationType;

	private int postType;

	private int resourceAdditionType;
	
	//private int topicCreationType;

	private String title;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="CreaterUserId")
	private User user;

	//bi-directional many-to-one association to Communitymember
	@OneToMany(mappedBy="community")
	private List<Communitymember> communitymembers;

	//bi-directional many-to-one association to Communityoffer
	@OneToMany(mappedBy="community")
	private List<Communityoffer> communityoffers;

	//bi-directional many-to-one association to Communityrequest
	@OneToMany(mappedBy="community")
	private List<Communityrequest> communityrequests;

	//bi-directional many-to-one association to Meeting
	@OneToMany(mappedBy="community")
	private List<Meeting> meetings;

	public Community() {
	}

	public int getCommunityId() {
		return this.communityId;
	}

	public void setCommunityId(int communityId) {
		this.communityId = communityId;
	}

	public int getAccessType() {
		return this.accessType;
	}

	public void setAccessType(int accessType) {
		this.accessType = accessType;
	}

	public Date getCreationDate() {
		return this.creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getJoinType() {
		return this.joinType;
	}

	public void setJoinType(int joinType) {
		this.joinType = joinType;
	}

	public int getMeetingCreationType() {
		return this.meetingCreationType;
	}

	public void setMeetingCreationType(int meetingCreationType) {
		this.meetingCreationType = meetingCreationType;
	}

	public int getPostType() {
		return this.postType;
	}

	public void setPostType(int postType) {
		this.postType = postType;
	}

	public int getResourceAdditionType() {
		return this.resourceAdditionType;
	}

	public void setResourceAdditionType(int resourceAdditionType) {
		this.resourceAdditionType = resourceAdditionType;
	}
	
//	public int GetTopicCreationType(){
//		return this.topicCreationType;
//	}
//	
//	public void setTopicCreationType(int topicCreationType){
//		this.topicCreationType = topicCreationType;
//	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Communitymember> getCommunitymembers() {
		return this.communitymembers;
	}

	public void setCommunitymembers(List<Communitymember> communitymembers) {
		this.communitymembers = communitymembers;
	}

	public Communitymember addCommunitymember(Communitymember communitymember) {
		getCommunitymembers().add(communitymember);
		communitymember.setCommunity(this);

		return communitymember;
	}

	public Communitymember removeCommunitymember(Communitymember communitymember) {
		getCommunitymembers().remove(communitymember);
		communitymember.setCommunity(null);

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
		communityoffer.setCommunity(this);

		return communityoffer;
	}

	public Communityoffer removeCommunityoffer(Communityoffer communityoffer) {
		getCommunityoffers().remove(communityoffer);
		communityoffer.setCommunity(null);

		return communityoffer;
	}

	public List<Communityrequest> getCommunityrequests() {
		return this.communityrequests;
	}

	public void setCommunityrequests(List<Communityrequest> communityrequests) {
		this.communityrequests = communityrequests;
	}

	public Communityrequest addCommunityrequest(Communityrequest communityrequest) {
		getCommunityrequests().add(communityrequest);
		communityrequest.setCommunity(this);

		return communityrequest;
	}

	public Communityrequest removeCommunityrequest(Communityrequest communityrequest) {
		getCommunityrequests().remove(communityrequest);
		communityrequest.setCommunity(null);

		return communityrequest;
	}

	public List<Meeting> getMeetings() {
		return this.meetings;
	}

	public void setMeetings(List<Meeting> meetings) {
		this.meetings = meetings;
	}

	public Meeting addMeeting(Meeting meeting) {
		getMeetings().add(meeting);
		meeting.setCommunity(this);

		return meeting;
	}

	public Meeting removeMeeting(Meeting meeting) {
		getMeetings().remove(meeting);
		meeting.setCommunity(null);

		return meeting;
	}

}