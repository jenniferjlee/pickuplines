const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
// const bodyParser = require('body-parser');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pickuplinetrends.firebaseio.com',
});

const db = admin.firestore();
const app = express();
const port = 8080;
// const port = 3000;
// app.use(bodyParser.json());

app.get('/', (_, resp) => resp.send('Hello World!'));

const linesCollection = db.collection("pickuplines");

app.get('/getLines', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => (line.data())));
});

// not done
app.post('/addLine', async (req, res) => {
  const newLine = req.body;
  // console.log('newLine is ' + newLine);
  const addedLine = await linesCollection.add(newLine);
  res.send(addedLine.id);
});

app.get('/getCategories', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => (line.data().category)));
});

app.listen(port, () => console.log('Backend started'));