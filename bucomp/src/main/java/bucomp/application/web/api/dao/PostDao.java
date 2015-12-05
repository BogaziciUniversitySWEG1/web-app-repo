package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Post;

public interface PostDao {

	public Post savePost(Post post);

	public boolean deletePost(Integer postId);

	public Post getPostById(Integer postId);

	public List<Post> getUserPosts(int userId);

	public List<Post> getSpecificPosts(int postTypeId, int associatedObjectId);
}