package bucomp.application.mail;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

/**
 * This class is used to send emails via SMTP.
 * It uses javaMailSender library.
 *
 */
@Component
public class SMTPMailSender {
	
	@Autowired
	JavaMailSender javaMailSender;

	public void send(String to, String subject, String body) {
		
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper;
		try {
			helper = new MimeMessageHelper(message,true);
			helper.setSubject(subject);
			helper.setTo(to);
			helper.setText(body,true);
			
			javaMailSender.send(message);
			
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
