package bucomp.application.web.api.dao;

import java.util.List;

import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;

import bucomp.application.model.Post;


public class PostDaoImpl implements PostDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public Post savePost(Post post) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(post);
			dbService.getEntitymanager().flush();
			etx.commit();			
			return post;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
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
			return dbService.getEntitymanager().find(Post.class, postId);			
		} catch(Exception e){
			return null;
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Post> getSpecificPosts(int postTypeId, int associatedObjectId) {
		EntityTransaction etx = null;
		try{
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Post> posts = dbService.getEntitymanager().createQuery("SELECT p FROM Post p where p.postTypeId = " + postTypeId + " AND p.associatedObjectId =" + associatedObjectId).getResultList();
			etx.commit();			
			return posts;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Post> getUserPosts(int userId) {
		EntityTransaction etx = null;
		try{
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Post> posts = dbService.getEntitymanager().createQuery("SELECT p FROM Post p where p.user.userId = " + userId).getResultList();
			etx.commit();			
			return posts;
		} catch(Exception e){
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
