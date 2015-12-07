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
        
    	StringBuilder text = new StringBuilder("<html><body>Following join request is waiting for your action.");
		text.append("<br>User : " + "İlyas Alper" + " " + "Karatepe"); 
		text.append("<br>Community : " + "ELECTRONIC GOVERNANCE (EGOV) COMMUNITY GROUP");
		text.append("<br>Explanation :" + "This is my favorite topic among my interesteing area. Please accept my request.");
		text.append("<br><br>Please respond this request by <a href=\"http://localhost:8080/api/communityRequests/approve?communityId=1&userId=1\">approving</a> or <a href=\"http://localhost:8080/api/communityRequests/deny?communityId=1&userId=1\">denying</a> it.<br></body></html>");
		/**
		 * TODO: approve and deny links may be inserted here.
		 */
		smtpMailSender.send("alperkaratepe@gmail.com", "[PROJECT.BUCOMP] - Incoming Join Request", text.toString());
		
    	
    }
}