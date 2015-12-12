package bucomp.application.web.api;

import java.util.Collection;
import java.util.Iterator;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import bucomp.application.model.Tag;
import bucomp.application.model.Tagrelation;
import bucomp.application.web.api.dao.TagDao;
import bucomp.application.web.api.dao.TagDaoImpl;
import bucomp.application.web.api.dao.TagRelationsDao;
import bucomp.application.web.api.dao.TagRelationsDaoImpl;
import bucomp.application.web.api.dao.TagTypeDao;
import bucomp.application.web.api.dao.TagTypeDaoImpl;

@RestController
public class TagController {

	private TagDao dao = new TagDaoImpl();
	private TagTypeDao ttdao = new TagTypeDaoImpl();
	private TagRelationsDao trdao = new TagRelationsDaoImpl();

	// Create new community
	@RequestMapping(value = "/api/tags/communityTags/{communityId}", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public boolean createCommunityTags(@PathVariable("communityId") Integer communityId,
			@RequestBody Collection<Tag> tags) {
		
		for (Iterator iterator = tags.iterator(); iterator.hasNext();) {
			Tag tag = (Tag) iterator.next();
			System.out.println(tag.getTag());
			if(dao.getTagByName(tag.getTag()) == null) {
				tag = dao.saveTag(tag);
			} else {
				tag = dao.getTagByName(tag.getTag());
			}
			
			Tagrelation tr = new Tagrelation();
			tr.setTag(tag);
			tr.setTaggedObjectId(communityId);
			tr.setTagtype(ttdao.getTagTypeById(1)); //Community Tags
			trdao.saveTagRelation(tr);
		}
		return true;
	}
	
	@RequestMapping(value = "/api/tags/communityTags/{communityId}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Tag>> getCommunityTags(@PathVariable("communityId") Integer communityId) {
		
		Collection<Tag> tags = dao.getCommunityTags(communityId);
		if(tags==null || tags.size()==0){
			return new ResponseEntity<Collection<Tag>>(tags, HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<Collection<Tag>>(tags,HttpStatus.OK);
	}
	

}
