package bucomp.application.web.api;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLConnection;
import java.net.URLDecoder;
import java.nio.charset.Charset;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bucomp.application.model.Resource;
import bucomp.application.web.api.dao.ResourceDao;
import bucomp.application.web.api.dao.ResourceDaoImpl;
import bucomp.application.web.api.dao.UserDao;
import bucomp.application.web.api.dao.UserDaoImpl;

@RestController
public class ResourceController {
	
	ResourceDao dao = new ResourceDaoImpl();
	UserDao udao = new UserDaoImpl();

	private static final String FILE_PATH = "file-repository/";
	
	@RequestMapping(value = "/api/resources/download", method = RequestMethod.GET)
	public void downloadCV(HttpServletResponse response,
			@RequestParam(required = true, value = "fileName") String fileName,
			@RequestParam(required = true, value = "uid") Integer uid,
			@RequestParam(required = false, value = "cid") Integer cid,
			@RequestParam(required = false, value = "mid") Integer mid,
			@RequestParam(required = false, value = "tid") Integer tid)
			throws IOException {
		String fileLocation;
		File file = null; //new File(FILE_PATH + "users/" + uid + "/" + fileName);

		if(mid!=null && mid>0){
			// this is a meeting resource
			fileLocation = FILE_PATH + "communities/" + cid + "/meetings/" + mid + "/users/" + uid + "/" + fileName;
		} else if(tid!=null && tid>0) {
			fileLocation = FILE_PATH + "communities/" + cid + "/topics/" + tid +  "/users/" + uid + "/" + fileName;	
		}else if(cid!=null && cid>0) {
			//this is a community resource
			fileLocation = FILE_PATH + "communities/" + cid + "/users/" + uid + "/" + fileName;	
		} else {
			//this is a user resource (cv or photo)
			fileLocation = FILE_PATH + "users/" + uid + "/" + fileName;
		}
		System.out.println(fileLocation);
		file = new File(fileLocation);
		
		if (!file.exists()) {
			String errorMessage = "Sorry. The file you are looking for does not exist";
			System.out.println(errorMessage);
			OutputStream outputStream = response.getOutputStream();
			outputStream.write(errorMessage.getBytes(Charset.forName("UTF-8")));
			outputStream.close();
			return;
		}

		String mimeType = URLConnection
				.guessContentTypeFromName(file.getName());
		if (mimeType == null) {
			System.out.println("mimetype is not detectable, will take default");
			mimeType = "application/octet-stream";
		}

		System.out.println("mimetype : " + mimeType);

		response.setContentType(mimeType);

		/*
		 * "Content-Disposition : inline" will show viewable types [like
		 * images/text/pdf/anything viewable by browser] right on browser while
		 * others(zip e.g) will be directly downloaded [may provide save as
		 * popup, based on your browser setting.]
		 */
		response.setHeader("Content-Disposition",
				String.format("inline; filename=\"" + file.getName() + "\""));

		/*
		 * "Content-Disposition : attachment" will be directly download, may
		 * provide save as popup, based on your browser setting
		 */
		// response.setHeader("Content-Disposition",
		// String.format("attachment; filename=\"%s\"", file.getName()));

		response.setContentLength((int) file.length());

		InputStream inputStream = new BufferedInputStream(new FileInputStream(
				file));

		// Copy bytes from source to destination(outputstream in this example),
		// closes both streams.
		FileCopyUtils.copy(inputStream, response.getOutputStream());
	}

	/**
	 * 
	 * @param uid - user id uplaoding the resource
	 * @param cid - community id of the resource
	 * @param mid - meeting id of the resource
	 * @param files - file array to be uploaded
	 * @return
	 */
	@RequestMapping(value = "/api/resources/upload", method = RequestMethod.POST)
	public ResponseEntity<String> uploadFile(
			@RequestParam(required=false, value="cid") Integer cid,
			@RequestParam(required=false, value="mid") Integer mid,
			@RequestParam(required=false, value="tid") Integer tid,
			@RequestParam(required=true, value="uid") Integer uid,
            @RequestParam("file") MultipartFile[] files) {
		
		String uploadedFileLocation;
		
		Resource r = new Resource();
		r.setCommunityId(cid);
		r.setMeetingId(mid);
		r.setUserId(uid);
		r.setTopicId(tid);

		String fileName = null;
		String output = "";
		
		if (files != null && files.length >0) {
			for (int i = 0; i < files.length; i++) {
				if(files[i].getOriginalFilename()==null || files[i].getOriginalFilename().equals("")){
					continue;
				}
				try {
					
	        		if(mid!=null && mid>0){
	        			// this is a meeting resource
	        			System.out.println("this is a meeting resource");
	        			uploadedFileLocation = FILE_PATH + "communities/" + cid + "/meetings/" + mid + "/users/" + uid + "/";
	        			fileName = uploadedFileLocation + files[i].getOriginalFilename();
	        			fileName = URLDecoder.decode(fileName, "UTF-8");
	        			r.setLink(fileName);
	        			r.setName(URLDecoder.decode(files[i].getOriginalFilename(), "UTF-8"));
	        			dao.saveResource(r);
	        		} else if(tid!=null && tid>0) {
	        			//this is a topic resource
	        			System.out.println("this is a topic resource");
	        			uploadedFileLocation = FILE_PATH + "communities/" + cid + "/topics/" + tid +  "/users/" + uid + "/";	
	        			fileName = uploadedFileLocation + files[i].getOriginalFilename();
	        			fileName = URLDecoder.decode(fileName, "UTF-8");
	        			r.setLink(fileName);
	        			r.setName(URLDecoder.decode(files[i].getOriginalFilename(), "UTF-8"));
	        			dao.saveResource(r);
	        		}else if(cid!=null && cid>0) {
	        			//this is a community resource
	        			System.out.println("this is a community resource");
	        			uploadedFileLocation = FILE_PATH + "communities/" + cid + "/users/" + uid + "/";	
	        			fileName = uploadedFileLocation + files[i].getOriginalFilename();
	        			fileName = URLDecoder.decode(fileName, "UTF-8");
	        			r.setLink(fileName);
	        			r.setName(URLDecoder.decode(files[i].getOriginalFilename(), "UTF-8"));
	        			dao.saveResource(r);
	        		} else {
	        			//this is a user resource (cv or photo)
	        			System.out.println("this is a user resource");
	        			uploadedFileLocation = FILE_PATH + "users/" + uid + "/";
	        			fileName = uploadedFileLocation + files[i].getOriginalFilename();
	        			fileName = URLDecoder.decode(fileName, "UTF-8");
	        		}
	                File file = new File(fileName);
	                file.getParentFile().mkdirs();
	                byte[] bytes = files[i].getBytes();
	                BufferedOutputStream buffStream = 
	                        new BufferedOutputStream(new FileOutputStream(new File(fileName)));
	                buffStream.write(bytes);
	                buffStream.close();
	                output += "Success <br/>";
	            } catch (Exception e) {
	                return new ResponseEntity<String>("You failed to upload " + fileName + ": " + e.getMessage() +"<br/>", HttpStatus.INTERNAL_SERVER_ERROR);
	            }
			}
    		return new ResponseEntity<String>(output, HttpStatus.OK);    		
        } else {
            return new ResponseEntity<String>("Unable to upload. File is empty.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
	
	}

}
