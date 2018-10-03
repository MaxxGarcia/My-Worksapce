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
  results: 5
};

// for comments
// const comments = client.CommentStream(streamOpts);

//for posts
const submission = client.SubmissionStream(streamOpts);
submission.on("submission", submission => {
  console.log(`New Submission by ${submission.author.name}`)
})


// for comments
// comments.on("comment", comment => {
//   // reply to any comment that has a :( with a :)
//   // if(comment.body === ':(') {
//   //   comment.reply(':)');
//   // }
//   if(comment.body.includes("Overwatch")) {
//       console.log(comment.body)
//     }
// });
