package tags.persistence;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import tags.model.ITagRepository;
import tags.model.Tag;

public class TagRepository implements ITagRepository {

    private MongoDatabase mongoDatabase;

    public TagRepository(MongoDatabase mongoDatabase) {
        this.mongoDatabase = mongoDatabase;
    }

    public List<Tag> getTags(String taggeeId) {
        FindIterable<Tag> theResult = mongoDatabase.getCollection("tags", Tag.class).find(eq("taggeeId", taggeeId));
        return (List<Tag>) theResult.into(new ArrayList<Tag>());
    }

    public void addTag(Tag tag) {
        tag.setId(UUID.randomUUID().toString());

        MongoCollection<Tag> mongoTags = mongoDatabase.getCollection("tags", Tag.class);
        mongoTags.insertOne(tag);
    }
}
