import { Router, Request, Response } from 'express';

import { LoremIpsumService } from '../model/lorem-ipsum.service';

export const LoremIpsumController = Router();

LoremIpsumController.get('/', (req, res) => {
    let theService = new LoremIpsumService();

    if (req.query.paragraphs) {
        res.send(theService.getParagraphs(req.query.paragraphs));
    } else if (req.query.sentences) {
        res.send(theService.getSentences(req.query.sentences));
    } else if (req.query.words) {
        res.send(theService.getWords(req.query.words));
    } else {
        res.send(theService.loremIpsum); // First Lorem Ipsum paragraph
    }
});
