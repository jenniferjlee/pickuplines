const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pickuplinetrends.firebaseio.com',
});

const db = admin.firestore();
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

app.get('/', (_, resp) => resp.send('Hello World!'));

const linesCollection = db.collection("pickuplines");

app.get('/getLines', async (req, res) => {
  const lines = await linesCollection.get();
  // not sure if this is right
  res.json(lines.docs.map((line) => (line.data())));
  // res.send(data);
});

app.get('/getJustLines', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => (line.data().line)));
  // res.send(data);
});

app.post('/addLine', async (req, res) => {
  const newLine = req.body;
  const addedLine = await linesCollection.add(newLine);
  res.send(addedLine.id);
});

app.get('/getCategories', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => (line.data().category)));
  // res.send(data);
});
// process.env.port
app.listen(process.env.PORT || port, () => console.log('Backend started'));