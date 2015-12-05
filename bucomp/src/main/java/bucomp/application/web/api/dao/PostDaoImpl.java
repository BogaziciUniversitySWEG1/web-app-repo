package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Post;


public class PostDaoImpl implements PostDao {

	@Override
	public Post savePost(Post post) {
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.persist(post);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return post;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

	@Override
	public boolean deletePost(Integer postId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Post getPostById(Integer postId) {
		try{
			return DatabaseServiceImpl.entitymanager.find(Post.class, postId);			
		} catch(Exception e){
			return null;
		}
	}

	@Override
	public List<Post> getCommunityPosts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Post> getUserPosts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Post> getMeetingPosts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Post updatePost(Post post) {
		// TODO Auto-generated method stub
		return null;
	}


}
