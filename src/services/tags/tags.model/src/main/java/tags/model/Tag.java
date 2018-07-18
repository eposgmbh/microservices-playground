package tags.model;

public class Tag {
    private String id;
    private String taggeeId;
    private String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTaggeeId() {
        return taggeeId;
    }

    public void setTaggeeId(String taggeeId) {
        this.taggeeId = taggeeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
