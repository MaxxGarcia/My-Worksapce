require("dotenv").config();

const snoowrap = require("snoowrap");
const snoostorm = require("snoostorm");

const r = new snoowrap({
  userAgent: "reddit-bod-example-node",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

let userDatabase = [
  {
    user: "ma5xy",
    house: "",
    points: "",
    posts: []
  }
];

let houseDatabase = {
  Pigeonfeet: {
    points: 0
  },
  Wheezybreeze: {
    points: 0
  },
  Cumberbatch: {
    points: 0
  },
  Frictionout: {
    points: 0
  }
};

const client = new snoostorm(r);

const streamOpts = {
  subreddit: "testingground4bots",
  results: 25
};

const comments = client.CommentStream(streamOpts);

comments.on("comment", comment => {
  let regex = /[0-9]|10/;
  console.log(`!${regex} points to`);
  if (comment.body.search(`!/\d|\d\d/points to`)) {
    let points = Number(comment.body.slice(1, 3));
    let house = comment.body.slice(14);
    console.log(points);
    if (points <= 10) {
      comment.reply(`10 points have been givien to ${house}`)
      houseDatabase[house].points += points;
    } else {
      comment.reply(`Only a maximum of 10 points can be awarded at any time. Feel free to try again with a value of 1-9.`)
    }
  }
  if (comment.body.search(`!/\d|\d\d/points to`)) {

  }
});

// let string = "!10 points to";
// string.search(`!/\d|\d\d/points to`) ? console.log(true) : console.log(false);
// let points = Number(string.slice(1, 3));
// console.log(points);
// console.log(houseDatabase.Wheezybreeze.points);
// let house = "Wheezybreeze";
// let points = 10;
// houseDatabase[house].points += points;

// console.log(houseDatabase[house].points);
