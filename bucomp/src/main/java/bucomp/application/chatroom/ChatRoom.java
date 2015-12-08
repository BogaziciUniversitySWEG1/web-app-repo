package bucomp.application.chatroom;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import bucomp.application.model.User;

public class ChatRoom {
	
	List<User> userList = new ArrayList<User>();
	
	StringBuilder chatText = new StringBuilder("");

	public void appendMessage(User user, String message) {
		chatText.append(new Date().toString() + " [" + user.getName() + "] : " + message + "\r\n");
	}

	public StringBuilder getChatText() {
		return this.chatText;
	}

	public List<User> getUserList() {
		return userList;
	}

	public void addUser(User user) {
		this.userList.add(user);
	}

}
