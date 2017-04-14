const OAuth = require('oauth');

let twitterTimeline = (req, res) => {
  let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  "tkzJXMBITIvJF6jKUHE5HHpbt",
  "tOJuM9OjNVM6Nbsihs3vOeXgenQ6cMN1qcOvuU42no4zb32JyS",
  '1.0A',
  null,
  'HMAC-SHA1'
);

oauth.get(
  'https://api.twitter.com/1.1/statuses/user_timeline.json',
  "3233297970-RdmqH7PuP9mI2epRLLJZ8cE5VaoME1Jrq0laFv8",
  "fkq3ffvOrbD7Kh332CAQ1y08ynmNKHBux0tMoPnxPtJTN",
  (err, data) => {
    let dataTimeline = JSON.parse(data)
    res.send(dataTimeline)
  });
}

let searchTwitterTimeline = (req, res) => {
    let oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'tkzJXMBITIvJF6jKUHE5HHpbt',
    'tOJuM9OjNVM6Nbsihs3vOeXgenQ6cMN1qcOvuU42no4zb32JyS',
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q='+req.body.tweet,
    '3233297970-RdmqH7PuP9mI2epRLLJZ8cE5VaoME1Jrq0laFv8',
    'fkq3ffvOrbD7Kh332CAQ1y08ynmNKHBux0tMoPnxPtJTN',
    (err, data) => {
      let dataTimeline = JSON.parse(data)
      res.send(dataTimeline.statuses)
    });
}

let postTweet = (req, res) => {
  let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  "tkzJXMBITIvJF6jKUHE5HHpbt",
  "tOJuM9OjNVM6Nbsihs3vOeXgenQ6cMN1qcOvuU42no4zb32JyS",
  '1.0A',
  null,
  'HMAC-SHA1'
);

oauth.post(
  `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.tweet}`,
  "3233297970-RdmqH7PuP9mI2epRLLJZ8cE5VaoME1Jrq0laFv8",
  "fkq3ffvOrbD7Kh332CAQ1y08ynmNKHBux0tMoPnxPtJTN",
  `${req.body.tweet}`,
  "text",
  (err, data) => {
    let dataTimeline = JSON.parse(data)
    res.send(dataTimeline.text)
  });
}

module.exports = {
  twitterTimeline, postTweet, searchTwitterTimeline
}
