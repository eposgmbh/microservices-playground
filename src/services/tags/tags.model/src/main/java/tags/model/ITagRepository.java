package tags.model;

import java.util.List;

public interface ITagRepository {
    List<Tag> getTags(String taggeeId);

    void addTag(Tag tag);
}
