import express from 'express';

import { LoremIpsumController } from './controllers/lorem-ipsum.controller';

const app = express();

// --- Routes ---

app.use('/api/v1/lorem-ipsum', LoremIpsumController);

// --- Application host ---

const port: number = Number(process.env.PORT) || 5001;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
