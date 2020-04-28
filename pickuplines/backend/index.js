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
// app.use(bodyParser.json());

app.get('/', (_, resp) => resp.send('Hello World!'));

const linesCollection = db.collection("pickuplines");

app.get('/getLines', async (req, res) => {
  const lines = await linesCollection.get();
  res.json(lines.docs.map((line) => ({ ...line.data(), id: line.id })));
});

// might need to be modified 
app.post('/createLine', async (req, res) => {
  const newLine = req.body;
  const addedLine = await linesCollection.add(newLine);
  res.send(addedLine.id);
});


app.listen(port, () => console.log('Backend started'));