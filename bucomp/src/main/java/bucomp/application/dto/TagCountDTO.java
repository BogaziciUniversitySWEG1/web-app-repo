package bucomp.application.dto;

public class TagCountDTO implements Comparable<TagCountDTO> {

	private String tagName;
	private int tagCount;

	public String getTagName() {
		return tagName;
	}

	public void setTagName(String tagName) {
		this.tagName = tagName;
	}

	public int getTagCount() {
		return tagCount;
	}

	public void setTagCount(int tagCount) {
		this.tagCount = tagCount;
	}

	@Override
	public int compareTo(TagCountDTO arg0) {
		return arg0.getTagCount() - this.getTagCount();
	}
}
