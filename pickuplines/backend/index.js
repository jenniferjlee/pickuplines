const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pickuplinetrends.firebaseio.com',
});

const db = admin.firestore();
const app = express();
const port = 8080;
app.use(express.json());

app.get('/', (_, resp) => resp.send('Hello World!'));

const linesCollection = db.collection("pickuplines");

app.get('https://trendspickupline.herokuapp.com/', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => (line.data())));
});

app.get('https://trendspickupline.herokuapp.com/', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => (line.data().line)));
});

app.post('https://trendspickupline.herokuapp.com/', async (req, res) => {
  const newLine = req.body;
  const addedLine = await linesCollection.add(newLine);
  res.send(addedLine.id);
});

app.get('https://trendspickupline.herokuapp.com/', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => (line.data().category)));
});

app.listen(process.env.port || port, () => console.log('Backend started'));