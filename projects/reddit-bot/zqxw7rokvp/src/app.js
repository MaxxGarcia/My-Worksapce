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
  subreddit: "testingground4bots",
  results: 25
};

const posts = client.SubmissionStream(streamOpts);

posts.on("posts", posts => {
  if(post.body) {
    post.reply("They aren't very active on Reddit anymore, try checking out their discord: https://discord.gg/Q4fekPQ \n They are on a bit of a hold right now from what I hear, but are hoping to keep the project moving. There are active games still, so I suggest hopping on the discord and asking around! \n (This action was posted as a bot response. Feel free to let me know if you want it removed.")
  }
});
