package bucomp.application.web.api.dao;

import java.util.Collection;

import bucomp.application.model.User;

public interface UserDao {

	public User saveUser(User user);

	public boolean delete(Integer userId);

	public Collection<User> getUsers(String key);

	public User getUserById(Integer userId);
}
