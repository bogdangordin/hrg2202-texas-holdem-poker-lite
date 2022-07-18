const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/CollaboratedStory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('seeder connected');
}).catch((err) => {
  console.log(err);
});

var sch = mongoose.Schema({
  username: String,
  sentence: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
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



var db = async () => {
  await Sentence.deleteMany({});
  await User.deleteMany({});
  await Sentence.insertMany(data);
  await User.insertMany(data2);
}

db().then(() => {
  mongoose.connection.close();
});


var data = [
  {
    username: "Guest",
    sentence: "This is a story of an adventurer named Stanley. Like many other adventurers they are cunning fortune seekers, well-meant bystanders and journeyman with substantial skills.",
  },
  {
    username: "Guest",
    sentence: "Although unlike Stanley he is unique from the bunch, with no recollection of mere moments ago Stanley finds himself in a peculiar situation..."
  },
]

var data2 = [
  {
    username: "Bogdan",
    password: "123abc",
  }
]