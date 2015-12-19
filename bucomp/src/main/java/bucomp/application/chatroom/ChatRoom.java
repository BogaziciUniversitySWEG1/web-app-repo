package bucomp.application.chatroom;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import bucomp.application.model.User;

/**
 * 
 * This class is used as the infrastructure of the chat feature.
 * Chat room will be available for online meetings. 
 *
 */
public class ChatRoom {
	
	/**
	 * list of users messaging in a chat room
	 */
	List<User> userList = new ArrayList<User>();
	
	/**
	 * consolidated chat text in a chat room
	 */
	StringBuilder chatText = new StringBuilder("");

	/**
	 * This method appends a new message coming from a user to chatText.
	 * @param user, the user sending the message
	 * @param message, the message text sent
	 */
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
