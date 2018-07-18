package tags.rest;

import com.mongodb.client.MongoClient;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import tags.model.ITagRepository;
import tags.persistence.TagRepository;

@Configuration
public class ApplicationConfiguration {
    private static final Logger LOGGER = LoggerFactory.getLogger(TagsController.class);

    @Value("${mongoUri}")
    private String mongoUri;

    @Bean
    public ITagRepository getTagRepository() {
        LOGGER.info("Mongo DB URI: " + mongoUri);

        MongoClient theClient = MongoClients.create(mongoUri);

        MongoDatabase theDatabase = theClient.getDatabase("tags-service");
        CodecRegistry thePojoCodecRegistry = CodecRegistries.fromRegistries(
                MongoClientSettings.getDefaultCodecRegistry(),
                CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build()));
        theDatabase = theDatabase.withCodecRegistry(thePojoCodecRegistry);

        return new TagRepository(theDatabase);
    }
}
