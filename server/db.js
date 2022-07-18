const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/CollaboratedStory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

var sch = mongoose.Schema({
  username: String,
  sentence: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  versionKey: false
});

var sch2 = mongoose.Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  versionKey: false
});

var Sentence = mongoose.model('Sentence', sch);
var User = mongoose.model('User', sch2);



var readAll = function (callback) {
  db.collection('sentences').find().toArray((err, docs) => {
    callback(docs);
  });
}

var getUser = function (obj ,callback) {
  db.collection('users').find(obj).toArray((err, docs) => {
    callback(docs);
  });
}



var add = function (obj) {
  Sentence.create(obj, (err, sentence) => {
    if (err) console.log(err);
  });
}

var addUser = function (obj) {
  User.create(obj, (err, sentence) => {
    if (err) console.log(err);
  });
}



module.exports.readAll = readAll;
module.exports.add = add;
module.exports.addUser = addUser;
module.exports.getUser = getUser;