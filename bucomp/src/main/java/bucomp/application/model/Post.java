package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the posts database table.
 * 
 */
@Entity
@Table(name="posts")
@NamedQuery(name="Post.findAll", query="SELECT p FROM Post p")
public class Post implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int postId;

	private int associatedObjectId;

	@Lob
	private byte[] post;

	@Temporal(TemporalType.TIMESTAMP)
	private Date postDate;

	private String title;

	//bi-directional many-to-one association to Posttype
	@ManyToOne
	@JoinColumn(name="PostTypeId")
	private Posttype posttype;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="UserId")
	private User user;

	public Post() {
	}

	public int getPostId() {
		return this.postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public int getAssociatedObjectId() {
		return this.associatedObjectId;
	}

	public void setAssociatedObjectId(int associatedObjectId) {
		this.associatedObjectId = associatedObjectId;
	}

	public byte[] getPost() {
		return this.post;
	}

	public void setPost(byte[] post) {
		this.post = post;
	}

	public Date getPostDate() {
		return this.postDate;
	}

	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Posttype getPosttype() {
		return this.posttype;
	}

	public void setPosttype(Posttype posttype) {
		this.posttype = posttype;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}