// Your htmlRoutes.js file should include two routes:

// 1. A GET Route to /survey which should display 
    //the survey page.
// 2. A default, catch-all route that leads to home.html 
    //which displays the home page.


// DEPENDENCIES
var path = require("path");



// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  // when users visit webpages, they are shown the HTML page content


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


  // default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
