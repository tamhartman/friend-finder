//Dependencies required (npm) to provide useful functionality

var express = require("express");
var bodyParser = require("body-parser");

//configuration for the express server
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//Router to point to a series of "route" files. The routes then give the server a map of how to respond when users visit or request data


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener to start the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
