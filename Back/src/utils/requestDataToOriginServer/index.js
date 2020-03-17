const request = require("request");

const url = "https://hn.algolia.com/api/v1/search_by_date?query=nodejs";

const requestDataToOriginServer = callback => {
  request({ url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to server", undefined);
    } else {
      callback(undefined, res);
    }
  });
};

module.exports = requestDataToOriginServer;
