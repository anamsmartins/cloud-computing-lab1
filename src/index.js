import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = process.argv[2] || process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send({ 'date': new Date(), 'text': faker.lorem.paragraph()});
});

app.listen(port, () => console.log(`App started on ${port}!`));