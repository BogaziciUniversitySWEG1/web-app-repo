package bucomp.application.web.api.dao;

import bucomp.application.model.Tagtype;


public class TagTypeDaoImpl implements TagTypeDao {
	
	DatabaseServiceImpl dbService = new DatabaseServiceImpl();

	@Override
	public Tagtype getTagTypeById(Integer tagTypeId) {
		try {
			dbService.getEntitymanager().clear();
			return dbService.getEntitymanager().find(Tagtype.class, tagTypeId);
		} catch (Exception e) {
			return null;
		}
	}


}
