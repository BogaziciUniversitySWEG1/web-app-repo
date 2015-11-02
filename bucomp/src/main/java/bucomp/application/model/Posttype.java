package bucomp.application.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the posttypes database table.
 * 
 */
@Entity
@Table(name="posttypes")
@NamedQuery(name="Posttype.findAll", query="SELECT p FROM Posttype p")
public class Posttype implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int postTypeId;

	private String postType;

	//bi-directional many-to-one association to Post
	@OneToMany(mappedBy="posttype")
	private List<Post> posts;

	public Posttype() {
	}

	public int getPostTypeId() {
		return this.postTypeId;
	}

	public void setPostTypeId(int postTypeId) {
		this.postTypeId = postTypeId;
	}

	public String getPostType() {
		return this.postType;
	}

	public void setPostType(String postType) {
		this.postType = postType;
	}

	public List<Post> getPosts() {
		return this.posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	public Post addPost(Post post) {
		getPosts().add(post);
		post.setPosttype(this);

		return post;
	}

	public Post removePost(Post post) {
		getPosts().remove(post);
		post.setPosttype(null);

		return post;
	}

}