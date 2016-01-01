package bucomp.application.model;

import java.io.Serializable;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 * The persistent class for the communities database table.
 * 
 */
@Entity
@Table(name = "communities")
@NamedQuery(name = "Community.findAll", query = "SELECT c FROM Community c")
public class Community implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int communityId;

	private int accessType;

	@Temporal(TemporalType.TIMESTAMP)
	private Date creationDate;

	private String description;

	private int joinType;

	private int meetingCreationType;

	private int postType;

	private int resourceAdditionType;

	private int topicCreationType;

	private String title;
	
	@Transient
	private int memberCount;
	
	@Transient
	private List<Tag> tagsList;
	
	@Transient
	private List<Integer> memberList;
	

	// bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name = "CreaterUserId")
	private User user;

	// bi-directional many-to-one association to Communityoffer
	@OneToMany(mappedBy = "community")
	private List<Communityoffer> communityoffers;

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

	public int GetTopicCreationType() {
		return this.topicCreationType;
	}

	public void setTopicCreationType(int topicCreationType) {
		this.topicCreationType = topicCreationType;
	}

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

	public int getTopicCreationType() {
		return topicCreationType;
	}

	public int getMemberCount() {
		return memberCount;
	}

	public void setMemberCount(int memberCount) {
		this.memberCount = memberCount;
	}

	public List<Tag> getTagsList() {
		return tagsList;
	}

	public void setTagsList(List<Tag> tagsList) {
		this.tagsList = tagsList;
	}

	public List<Integer> getMemberList() {
		return memberList;
	}

	public void setMemberList(List<Integer> memberList) {
		this.memberList = memberList;
	}
	
	public static class MemberCountComparator implements Comparator<Community> {
	    @Override
	    public int compare(Community o1, Community o2) {
	        return o2.getMemberCount() - o1.getMemberCount();
	    }
	}

}