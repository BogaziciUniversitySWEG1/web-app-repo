package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Post;

public interface PostDao {

	public Post savePost(Post post);

	public boolean deletePost(Integer postId);

	public Post getPostById(Integer postId);

	public List<Post> getCommunityPosts();

	public List<Post> getUserPosts();

	public List<Post> getMeetingPosts();

	public Post updatePost(Post post);
}