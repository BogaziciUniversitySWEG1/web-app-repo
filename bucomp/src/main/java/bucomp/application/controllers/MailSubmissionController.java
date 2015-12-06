package bucomp.application.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.mail.SMTPMailSender;

@RestController
class MailSubmissionController {
	
	@Autowired
	SMTPMailSender smtpMailSender;

    @RequestMapping("/send-mail")
    @ResponseStatus(HttpStatus.OK)
    public void sendMail() {        
        
    	smtpMailSender.send("alperkaratepe@gmail.com", "Deneme", "Test");
    	
    }
}