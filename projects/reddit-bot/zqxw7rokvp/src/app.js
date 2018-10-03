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
const client = new snoostorm(r);

const streamOpts = {
  subreddit: "all",
  results: 1
};

const comments = client.CommentStream(streamOpts);

comments.on("comments", comments => {
  console.log(comments)
});
