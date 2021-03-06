package bucomp.application.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// import org.springframework.web.bind.annotation.ResponseBody;

/**
 * This class is the main controller for web application, it redirects incoming
 * requests to home page to index.html.
 *
 */
@Controller
public class MainController {

	@RequestMapping("/")
	// @ResponseBody
	public String index() {
		return "index.html";
	}

}
