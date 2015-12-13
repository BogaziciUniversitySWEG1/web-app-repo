package bucomp.application.web.api;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ResourceController {

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
			@RequestParam(required=true, value="uid") Integer uid,
            @RequestParam("file") MultipartFile[] files) {
		
		String uploadedFileLocation;
		String UPLOAD_DIRECTORY= "/file-repository"; 
		String uploadPath = System.getenv(UPLOAD_DIRECTORY);
		
		
		if(mid!=null && mid>0){
			// this is a meeting resource
			uploadedFileLocation = uploadPath+"/communities/" + cid + "/meetings/" + mid + "/users/" + uid + "/";
		} else if(cid!=null && cid>0) {
			//this is a community resource
			uploadedFileLocation =uploadPath+"/communities/" + cid + "/users/" + uid + "/";			
		} else {
			//this is a user resource (cv or photo)
			uploadedFileLocation =uploadPath+"/file-repository/users/" + uid + "/";						
		}
		String fileName = null;
		String output = "";
		
		if (files != null && files.length >0) {
			for (int i = 0; i < files.length; i++) {
				if(files[i].getOriginalFilename()==null || files[i].getOriginalFilename().equals("")){
					continue;
				}
				try {
	                fileName = uploadedFileLocation + files[i].getOriginalFilename();
	                System.out.println(fileName);
	                File file = new File(fileName);
	                file.getParentFile().mkdirs();
	                byte[] bytes = files[i].getBytes();
	                BufferedOutputStream buffStream = 
	                        new BufferedOutputStream(new FileOutputStream(new File(fileName)));
	                buffStream.write(bytes);
	                buffStream.close();
	                output += "You have successfully uploaded " +  files[i].getOriginalFilename() +"<br/>";
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