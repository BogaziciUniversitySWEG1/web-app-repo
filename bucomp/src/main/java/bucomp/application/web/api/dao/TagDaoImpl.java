package bucomp.application.web.api.dao;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityTransaction;

import bucomp.application.model.Tag;

public class TagDaoImpl implements TagDao {

	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public Tag saveTag(Tag tag) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			dbService.getEntitymanager().persist(tag);
			dbService.getEntitymanager().flush();
			etx.commit();
			return tag;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

	@Override
	public Tag getTagById(Integer tagId) {
		try {
			return dbService.getEntitymanager().find(Tag.class, tagId);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public Tag getTagByName(String tagName) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			Tag tag = (Tag) dbService
					.getEntitymanager()
					.createQuery(
							"SELECT t FROM Tag t where t.tag='" + tagName + "'")
					.getSingleResult();
			etx.commit();
			return tag;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<Tag> getCommunityTags(Integer communityId) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Tag> tags = dbService
					.getEntitymanager()
					.createQuery(
							"SELECT t FROM Tag t where t.tagId in (select tr.tag.tagId from Tagrelation tr where tr.tagtype.tagTypeId=1 AND tr.taggedObjectId=" +communityId+ ")").getResultList();
			etx.commit();
			return tags;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Collection<Tag> getTopicTags(Integer topicId) {
		EntityTransaction etx = null;
		try {
			etx = dbService.getEntitymanager().getTransaction();
			etx.begin();
			List<Tag> tags = dbService
					.getEntitymanager()
					.createQuery(
							"SELECT t FROM Tag t where t.tagId in (select tr.tag.tagId from Tagrelation tr where tr.tagtype.tagTypeId=4 AND tr.taggedObjectId=" +topicId+ ")").getResultList();
			etx.commit();
			return tags;
		} catch (Exception e) {
			e.printStackTrace();
			if (etx != null)
				etx.rollback();
			return null;
		}
	}

}
