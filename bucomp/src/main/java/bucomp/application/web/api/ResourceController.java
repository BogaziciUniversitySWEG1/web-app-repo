package bucomp.application.web.api;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.net.URLDecoder;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bucomp.application.model.Resource;
import bucomp.application.web.api.dao.ResourceDao;
import bucomp.application.web.api.dao.ResourceDaoImpl;

@RestController
public class ResourceController {
	
	ResourceDao dao = new ResourceDaoImpl();

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
		String UPLOAD_DIRECTORY= "target/classes/public/file-repository"; 
		
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
	        			uploadedFileLocation = UPLOAD_DIRECTORY+"/communities/" + cid + "/meetings/" + mid + "/users/" + uid + "/";
	        			fileName = uploadedFileLocation + files[i].getOriginalFilename();
	        			fileName = URLDecoder.decode(fileName, "UTF-8");
	        			r.setLink(fileName);
	        			r.setName(URLDecoder.decode(files[i].getOriginalFilename(), "UTF-8"));
	        			dao.saveResource(r);
	        		} else if(cid!=null && cid>0) {
	        			//this is a community resource
	        			uploadedFileLocation =UPLOAD_DIRECTORY+"/communities/" + cid + "/users/" + uid + "/";	
	        			fileName = uploadedFileLocation + files[i].getOriginalFilename();
	        			fileName = URLDecoder.decode(fileName, "UTF-8");
	        			r.setLink(fileName);
	        			r.setName(URLDecoder.decode(files[i].getOriginalFilename(), "UTF-8"));
	        			dao.saveResource(r);
	        		} else {
	        			//this is a user resource (cv or photo)
	        			System.out.println("this is a user resource");
	        			uploadedFileLocation =UPLOAD_DIRECTORY+"/users/" + uid + "/";
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
