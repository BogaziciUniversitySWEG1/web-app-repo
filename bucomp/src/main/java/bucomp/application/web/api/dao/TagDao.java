package bucomp.application.web.api.dao;

import java.util.Collection;

import bucomp.application.model.Tag;

public interface TagDao {

	public Tag saveTag(Tag tag);

	public Tag getTagById(Integer tagId);
	
	public Tag getTagByName(String tagName);

	public Collection<Tag> getCommunityTags(Integer communityId);

}