var request = require('request');
var { google } = require("googleapis");
var key = require("./../../private/service_account.json");

// Set up the JWT client with the necessary scopes
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  [
    "https://www.googleapis.com/auth/indexing",
    "https://www.googleapis.com/auth/webmasters" 
  ],
  null
);

// Authorize the JWT client
jwtClient.authorize(function(err, tokens) {
  if (err) {
    console.log(err);
    return;
  }

  // If the authorization is successful, set up the options for the request to the Google Search Index API
  // let options = {
  //   url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   auth: { "bearer": tokens.access_token },
  //   json: {
  //     "url": "http://techmonday.co",
  //     "type": "URL_UPDATED"
  //   }
  // };

  // // Make the request and handle the response
  // request(options, function (error, response, body) {
  //   console.log(body);
  // });

  // Submit sitemaps
  var siteUrl = encodeURIComponent("https://techmonday.co");
  var feedpath = encodeURIComponent("https://techmonday.co/sitemap.xml");
  let options = {
    url: `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/sitemaps/${feedpath}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    auth: { "bearer": tokens.access_token }
  };

  // Step 8: Make the request and handle the response
  request(options, function (error, response, body) {
    console.log(body);
  });

  // Add site to Search Console, we need to add this before we can submit sitemaps
  // var siteUrl = encodeURIComponent("https://techmonday.co");
  // var feedpath = encodeURIComponent("https://techmonday.co/sitemap.xml");
  // let options = {
  //   url: `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}`,
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   auth: { "bearer": tokens.access_token }
  // };

  // // Step 8: Make the request and handle the response
  // request(options, function (error, response, body) {
  //   console.log(body);
  // });
});