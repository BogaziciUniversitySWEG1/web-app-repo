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
	@SuppressWarnings("unchecked")
	public List<Post> getSpecificPosts(int postTypeId, int associatedObjectId) {
		try{
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			List<Post> posts = DatabaseServiceImpl.entitymanager.createQuery("SELECT p FROM Post p where p.postTypeId = " + postTypeId + " AND p.associatedObjectId =" + associatedObjectId).getResultList();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return posts;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Post> getUserPosts(int userId) {
		try{
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			List<Post> posts = DatabaseServiceImpl.entitymanager.createQuery("SELECT p FROM Post p where p.userId = " + userId).getResultList();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return posts;
		} catch(Exception e){
			e.printStackTrace();
			DatabaseServiceImpl.entitymanager.getTransaction().rollback();
			return null;
		}
	}

}
