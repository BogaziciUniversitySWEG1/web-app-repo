package bucomp.application.web.api.dao;

import java.util.List;

import bucomp.application.model.Resource;

public interface ResourceDao {

	public List<Resource> getCommunityResources(int communityId);
	public List<Resource> getMeetingResources(int meetingId);
	public List<Resource> getTopicResources(int topicId);
	
	public Resource saveResource(Resource r);

}
