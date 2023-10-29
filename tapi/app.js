console.log("APP IS STARTED");
import * as env from "dotenv";
import axios from "axios";

env.config({
  path: ".env",
});

async function postTweetNow(input) {
  try {
    let result = await axios.post(
      "https://api.twitter.com/2/tweets",
      {
        text: input.message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          //   client_id: process.env.TWITTER_API_KEY,
          //   client_secret: process.env.TWITTER_API_SECRET,
        },
      }
    );
    console.log(result.data);
  } catch (err) {
    console.log({ err });
  }
}

postTweetNow({ message: "Tweeting from bot" });
