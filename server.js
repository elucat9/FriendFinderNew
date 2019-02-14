var express = require("express");
var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// to map out how to respond when users visit/request data from different URLs

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// LISTENER - this code "starts" the server:

app.listen(PORT, function() {
  console.log("This app is listening on PORT: " + PORT);
});
