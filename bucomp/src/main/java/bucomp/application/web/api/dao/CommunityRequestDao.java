package bucomp.application.web.api.dao;

import java.util.Collection;

import bucomp.application.model.Communityrequest;

public interface CommunityRequestDao {
	
	public Collection<Communityrequest> getCommunityRequests(int communityId);
	
	public Communityrequest saveCommunityRequest(Communityrequest cr);
	
	public boolean approveCommunityRequest(int userId, int communityId);
	
	public boolean denyCommunityRequest(int userId, int communityId);

}
