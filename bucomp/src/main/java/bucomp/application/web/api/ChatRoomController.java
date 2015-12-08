package bucomp.application.web.api;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.chatroom.ChatRoom;
import bucomp.application.model.User;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class ChatRoomController {
	
	private Map<Integer,ChatRoom> chatRooms = new HashMap<Integer, ChatRoom>();
	
	UserDao udao = new UserDaoImpl();
	 
	@RequestMapping(value = "/api/chatroom/join", method = RequestMethod.POST)
	public boolean joinChatRoom(
			@RequestParam(value = "userId") int userId,
			@RequestParam(value = "meetingId") int meetingId) {
		User user = udao.getUserById(userId);
		System.out.println(user.getName() + " joined to chat room for meeting " + meetingId);
		ChatRoom cr = chatRooms.get(meetingId);
		if(cr==null)
			return false;
		cr.addUser(user);
		return true;
	}
	
	@RequestMapping(value = "/api/chatroom/open", method = RequestMethod.POST)
	public boolean openChatRoom(
			@RequestParam(value = "userId") int userId,
			@RequestParam(value = "meetingId") int meetingId) {
		User u = udao.getUserById(userId);
		System.out.println("New chat room for meeting '"+meetingId+"' is opened by " + u.getName());
		ChatRoom cr = new ChatRoom();
		cr.addUser(u);
		if(chatRooms.containsKey(meetingId))
			return false;
		chatRooms.put(meetingId, cr);
		return true;
	}
	
	@RequestMapping(value = "/api/chatroom/close", method = RequestMethod.POST)
	public boolean closeChatRoom(
			@RequestParam(value = "userId") int userId,
			@RequestParam(value = "meetingId") int meetingId) {
		chatRooms.remove(meetingId);
		return true;
	}
	
	@RequestMapping(value = "/api/chatroom/sendMessage", method = RequestMethod.POST)
	public String sendMessage(
			@RequestParam(value = "userId") int userId,
			@RequestParam(value = "meetingId") int meetingId,
			@RequestParam(value = "message") String message) {
		User u = udao.getUserById(userId);
		System.out.println("New message sent from " + u.getName() + ": " + message);
		chatRooms.get(meetingId).appendMessage(u, message);
		return chatRooms.get(meetingId).getChatText().toString();
	}
		

}
