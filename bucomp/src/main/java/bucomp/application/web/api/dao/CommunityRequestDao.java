package bucomp.application.web.api.dao;

import java.util.Collection;

import bucomp.application.model.Communityrequest;

public interface CommunityRequestDao {
	
	public Collection<Communityrequest> getAllCommunityRequests();
	
	public Communityrequest getCommunityRequestById(int id);
	
	public Communityrequest saveCommunityRequest(Communityrequest cr);
	
	public boolean approveCommunityRequest(Communityrequest cr);
	
	public boolean denyCommunityRequest(Communityrequest cr);

}
