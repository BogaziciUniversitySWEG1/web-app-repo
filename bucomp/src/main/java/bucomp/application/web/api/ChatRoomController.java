package bucomp.application.web.api;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.chatroom.ChatRoom;
import bucomp.application.model.User;
import bucomp.application.web.api.dao.MeetingDao;
import bucomp.application.web.api.dao.MeetingDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

/**
 * The rest controller class used for chat room operations.
 *
 */
@RestController
public class ChatRoomController {
	
	private Map<Integer,ChatRoom> chatRooms = new HashMap<Integer, ChatRoom>();
	
	UserDao udao = new UserDaoImpl();
	MeetingDao mdao = new MeetingDaoImpl();
	
	/**
	 * This method enables a user to open a chat room for a meeting.
	 * @param userId, id of the user opening the chat room
	 * @param meetingId, the meeting id of the chat room
	 * @return, true if the chat room opened successfully.
	 */
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
	
	/**
	 * This method enables a user to join a chat room created for a meeting.
	 * @param userId, the user id joining into chat room
	 * @param meetingId, the meeting id of the chat room
	 * @return, tru if the user joins successfully
	 */
	@RequestMapping(value = "/api/chatroom/join", method = RequestMethod.POST)
	public boolean joinChatRoom(
			@RequestParam(value = "userId") int userId,
			@RequestParam(value = "meetingId") int meetingId) {
		User user = udao.getUserById(userId);
		System.out.println(user.getName() + " joined to chat room for meeting " + meetingId);
		ChatRoom cr = chatRooms.get(meetingId);
		if(cr==null) {
			openChatRoom(userId, meetingId);
			cr = chatRooms.get(meetingId);
		}
			
		List<User> attandents = cr.getUserList();
		for (Iterator<User> iterator = attandents.iterator(); iterator.hasNext();) {
			User u = iterator.next();
			if(u.getUserId()==userId) {
				System.out.println("User is already joined...");
				return true;
			}
		}
		cr.addUser(user);
		return true;
	}
	
	/**
	 * This method enables a user to close a chat room.
	 * @param userId, the user id closing the chat room
	 * @param meetingId, the meeting id of the chat room
	 * @return
	 */
	@RequestMapping(value = "/api/chatroom/close", method = RequestMethod.POST)
	public boolean closeChatRoom(
			@RequestParam(value = "userId") int userId,
			@RequestParam(value = "meetingId") int meetingId) {
		mdao.updateMeetingStatus(meetingId, 2);
		mdao.updateMeetingNote(meetingId, chatRooms.get(meetingId).getChatText().toString());
		chatRooms.remove(meetingId);
		return true;
	}
	
	/**
	 * This method enables a user to send a text message in a chat room.
	 * @param userId, the user id sending the message
	 * @param meetingId, the meeting id of the chat room
	 * @param message, the message sent by the user
	 * @return, the consolidated chat content
	 */
	@RequestMapping(value = "/api/chatroom/sendMessage", method = RequestMethod.POST)
	public void sendMessage(
			@RequestParam(value = "userId") int userId,
			@RequestParam(value = "meetingId") int meetingId,
			@RequestParam(value = "message") String message) {
		User u = udao.getUserById(userId);
		System.out.println("New message sent from " + u.getName() + ": " + message);
		chatRooms.get(meetingId).appendMessage(u, message);
		return;
	}


	@RequestMapping(value = "/api/chatroom/getChatHistory", method = RequestMethod.GET)
	public String getChatHistory(@RequestParam(value = "meetingId") int meetingId) {
		return chatRooms.get(meetingId).getChatText().toString();
	}
	
	@RequestMapping(value = "/api/chatroom/getAttendants", method = RequestMethod.GET)
	public List<User> getAttendanceList(@RequestParam(value = "meetingId") int meetingId) {
		return chatRooms.get(meetingId).getUserList();
	}
}
