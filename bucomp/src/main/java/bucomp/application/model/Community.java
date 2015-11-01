package bucomp.application.model;

import java.util.Date;

public class Community {
	
	private int id;
	private String title;
	private String description;
	private Date creationDate;
	private int creatorUserId;
	private int accessType;
	private int joinType;
	private int postType;
	private int meetingCreationType;
	private int resourceAdditionType;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	public int getCreatorUserId() {
		return creatorUserId;
	}
	public void setCreatorUserId(int creatorUserId) {
		this.creatorUserId = creatorUserId;
	}
	public int getAccessType() {
		return accessType;
	}
	public void setAccessType(int accessType) {
		this.accessType = accessType;
	}
	public int getJoinType() {
		return joinType;
	}
	public void setJoinType(int joinType) {
		this.joinType = joinType;
	}
	public int getPostType() {
		return postType;
	}
	public void setPostType(int postType) {
		this.postType = postType;
	}
	public int getMeetingCreationType() {
		return meetingCreationType;
	}
	public void setMeetingCreationType(int meetingCreationType) {
		this.meetingCreationType = meetingCreationType;
	}
	public int getResourceAdditionType() {
		return resourceAdditionType;
	}
	public void setResourceAdditionType(int resourceAdditionType) {
		this.resourceAdditionType = resourceAdditionType;
	}
	
	

}
