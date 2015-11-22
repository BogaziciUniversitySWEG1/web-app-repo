package bucomp.application.web.api.dao;

import java.util.Collection;

import bucomp.application.model.Community;
import bucomp.application.model.Communitymember;

public interface CommunityDao {
	
	public int getCommunityCount();
	
	public Collection<Community> getAllCommunities();
	
	public Community getCommunityById(int id);
	
	public Community saveCommunity(Community c);
	
	public Community updateCommunity(Community c);
	
	public void deleteCommunity(Community c);
	
	public Community addCommunityMember(Community c, Communitymember cm);
	
	public void removeCommunityMember(Community c, Communitymember cm);
	
	public Collection<Community> searchCommunity(String key);

}
