package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import bucomp.application.model.User;

public class UserDaoImpl implements UserDao {

	@Override
	public User saveUser(User user) {
		
		try {
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			DatabaseServiceImpl.entitymanager.persist(user);
			DatabaseServiceImpl.entitymanager.flush();
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return user;
		} catch(Exception e){
			e.printStackTrace();
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
		try{
			return DatabaseServiceImpl.entitymanager.find(User.class, userId);			
		} catch(Exception e){
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<User> getAllUsers() {
		
		DatabaseServiceImpl.entitymanager.getTransaction().begin();
		List<User> userList = DatabaseServiceImpl.entitymanager.createQuery("SELECT u FROM User u").getResultList();
		DatabaseServiceImpl.entitymanager.getTransaction().commit();
		return userList;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<User> searchUser(String key) {
		DatabaseServiceImpl.entitymanager.getTransaction().begin();
		List<User> userList = DatabaseServiceImpl.entitymanager.createQuery("SELECT u FROM User u where u.name like '%" + key + "%' or u.surname like '%" + key + "%' or u.email like '%" + key + "%' or u.location like '%" + key + "%' or u.hobbies like '%" + key + "%' ").getResultList();
		DatabaseServiceImpl.entitymanager.getTransaction().commit();
		return userList;
	}

	@Override
	public User updateUser(User user) {
		try {
			User existingUser = DatabaseServiceImpl.entitymanager.find(User.class, user.getUserId());
			DatabaseServiceImpl.entitymanager.getTransaction().begin();
			existingUser.setLocation(user.getLocation());
			existingUser.setCommunitymembers(user.getCommunitymembers());
			existingUser.setCommunityoffers(user.getCommunityoffers());
			existingUser.setCommunityrequests(user.getCommunityrequests());
			existingUser.setCVLink(user.getCVLink());
			existingUser.setEmail(user.getEmail());
			existingUser.setHobbies(user.getHobbies());
			existingUser.setLocation(user.getLocation());
			existingUser.setMeetingattendants(user.getMeetingattendants());
			existingUser.setName(user.getName());
			existingUser.setPassword(user.getPassword());
			existingUser.setSurname(user.getSurname());
			existingUser.setUserroles(user.getUserroles());
			
			DatabaseServiceImpl.entitymanager.getTransaction().commit();			
			return user;
		} catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public User getUserByEmail(String email) {
		
		DatabaseServiceImpl.entitymanager.getTransaction().begin();
		User user = (User) DatabaseServiceImpl.entitymanager.createQuery("SELECT u FROM User u where u.email='" + email + "'").getSingleResult();
		DatabaseServiceImpl.entitymanager.getTransaction().commit();
		return user;
		
	}

}
