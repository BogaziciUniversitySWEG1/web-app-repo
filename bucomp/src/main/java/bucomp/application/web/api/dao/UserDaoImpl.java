package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;

import bucomp.application.model.User;

public class UserDaoImpl implements UserDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public User saveUser(User user) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(user);
			dbService.getEntitymanager().flush();
			etx.commit();
			return user;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public boolean delete(Integer userId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public User getUserById(Integer userId) {
		try {
			return dbService.getEntitymanager().find(User.class, userId);
		} catch (Exception e) {
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> getAllUsers() {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<User> userList = dbService.getEntitymanager()
					.createQuery("SELECT u FROM User u").getResultList();
			etx.commit();
			return userList;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<User> searchUser(String key) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<User> userList = dbService.getEntitymanager()
					.createQuery(
							"SELECT u FROM User u where u.name like '%" + key
									+ "%' or u.surname like '%" + key
									+ "%' or u.email like '%" + key
									+ "%' or u.location like '%" + key
									+ "%' or u.hobbies like '%" + key + "%' ")
					.getResultList();
			etx.commit();
			return userList;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public User updateUser(User user) {
		EntityTransaction etx = null;
		try {
			User existingUser = dbService.getEntitymanager().find(
					User.class, user.getUserId());
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			existingUser.setLocation(user.getLocation());
			existingUser.setCommunityoffers(user.getCommunityoffers());
			existingUser.setCVLink(user.getCVLink());
			existingUser.setPhotoLink(user.getPhotoLink());
			existingUser.setEmail(user.getEmail());
			existingUser.setHobbies(user.getHobbies());
			existingUser.setMeetingattendants(user.getMeetingattendants());
			existingUser.setName(user.getName());
			existingUser.setPassword(user.getPassword());
			existingUser.setSurname(user.getSurname());
			existingUser.setUserroles(user.getUserroles());
			existingUser.setEducation(user.getEducation());
			existingUser.setProfession(user.getProfession());

			etx.commit();
			return user;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public User getUserByEmail(String email) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			User user = (User) dbService.getEntitymanager().createQuery(
					"SELECT u FROM User u where u.email='" + email + "'")
					.getSingleResult();
			etx.commit();
			return user;
		} catch (Exception e) {
			e.printStackTrace();
			if(etx!=null)
				etx.rollback();
			return null;
		}
	}

}
