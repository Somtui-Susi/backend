import express from 'express';
import { getDb } from './db.js';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World! 123');
}); 

app.get('/test', (req, res) => {
    res.json({
        name: 'John Doe',
        age: 30,
    })
});

app.post('/create', async(req, res) => {
    const db = await getDb();
    const collection = db.collection("sensor-DATA");
    const callback = await collection.insertOne({
        "tempereture": 37.8,
        "humidity": 67,   
    });
    res.json(callback);
});

app.get('/read', async(req, res) => {
    const db = await getDb();
    const collection = db.collection("sensor-DATA");
    const callback = await collection.find({}).toArray();
    res.json(callback);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});