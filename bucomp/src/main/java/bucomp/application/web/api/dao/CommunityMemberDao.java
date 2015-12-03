package bucomp.application.web.api.dao;

import java.util.Collection;

import bucomp.application.model.Communitymember;

public interface CommunityMemberDao {
	
	public Collection<Communitymember> getCommunityMembers(int communityId);
	
	public Communitymember saveCommunityMember(Communitymember cm);
	
}
