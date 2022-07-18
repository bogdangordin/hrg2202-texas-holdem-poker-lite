/*
PokerLite
Bogdan Gordin
7/14/22
Attempt at writing a very lite poker Texas Hold'em object oriented
*/

require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db.js");


const app = express();
var server = require('http').createServer(app);

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));



// app.get('/story', function (req, res) {
//   console.timeLog('-', `201 ${req.method} ${req.url}`);

//   db.readAll((data) => {

//     var story = '';

//     for (var n = 0; n <= data.length - 1; n++) {
//       story += data[n].sentence + '\n\n';
//     }

//     console.timeLog('-', `200 ${req.method} ${req.url}`);
//     res.send(story);
//   });
// });



// app.get('/story/data', function (req, res) {
//   console.timeLog('-', `201 ${req.method} ${req.url}`);

//   db.readAll((data) => {
//     console.timeLog('-', `200 ${req.method} ${req.url}`);
//     res.send(data);
//   });
// });



// app.post('/story', function (req, res) {
//   console.timeLog('-', `201 ${req.method} ${req.url}`);

//   db.add(req.body);
//   console.timeLog('-', `200 ${req.method} ${req.url}`);
//   res.send([]);
// });



// app.post('/signup', function (req, res) {
//   console.timeLog('-', `201 ${req.method} ${req.url}`);

//   db.addUser(req.body);
//   console.timeLog('-', `200 ${req.method} ${req.url}`);
//   res.send([]);
// });



// app.get('/login', function (req, res) {
//   console.timeLog('-', `201 ${req.method} ${req.url}`);

//   console.log(req.params);

//   console.timeLog('-', `200 ${req.method} ${req.url}`);
//   res.send([]);
// });



// app.get('/quit', function (req, res) {
//   console.timeLog('-', `201 ${req.method} ${req.url}`);

//   if (req.query.key === 'quit') {
//     res.send([]);
//     server.close();
//     console.timeLog('-', `200 ${req.method} ${req.url}`);
//     process.exit(0);
//   } else {
//     console.timeLog('-', `404 ${req.method} ${req.url}`);
//     res.status(404);
//     res.send();
//   }
// });



// app.use((req, res) => {
//   console.timeLog('-', `404 ${req.method} ${req.url}`);
//   res.status(404);
//   res.send();
// });



app.listen(process.env.PORT, () => {
  console.time('-');
  console.log(`Running at http://localhost:${process.env.PORT}`);
});


// http://localhost:3004/products/:product_id=65631
// http://localhost:3004/products/:1
// \i server1/db/seeder2.sql
// \i server1/db/schema.sql
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3004
// sudo -u postgres psql
// sudo systemctl restart postgresql.service
// scp -i "aws-fec.pem" ./../OMD2202-sdc-atelier-overview-API/product.csv ubuntu@13.57.16.20:/home/ubuntu/OMD2202-sdc-atelier-overview-API
// lsof -i tcp:3004
// kill -9 PID

// sudo apt-get update && sudu apt-get upgrade -y
// curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
// sudo apt-get install -y nodejs

// sudo apt-get install git


// sudo apt update
// udo apt install nginx

// sudo systemctl start nginx

// %{*:1-100}

//mongosh
// show dbs

// use CollaboratedStory

// node server/seeder.js

// db.collectionName.find()

// db.sentences.remove({_id: ObjectId("6278acdbd73496107032e469")});