package tags.rest;

import java.net.URI;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import tags.model.Tag;
import tags.model.ITagRepository;

@RestController
@RequestMapping("/api/v1/tags")
public class TagsController {
    private final ITagRepository tagRepository;

    public TagsController(ITagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @RequestMapping(value = "/{taggeeId}", method = RequestMethod.GET)
    public List<Tag> getTagsByTaggeeId(@PathVariable("taggeeId") String taggeeId) {
        return tagRepository.getTags(taggeeId);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addTag(@RequestBody Tag tag) {
        tagRepository.addTag(tag);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tag.getId())
                .toUri();

        return ResponseEntity.created(location).build();
    }
}
