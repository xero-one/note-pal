/*Welcome to the server connection js file!!!*/
/*Set constant variable declairing our routes folder to be used*/
const routes = require("./routes");

/*Set constant variable for npm express*/
const express = require("express");

/*Global variable the developer can maniputlat to establish a port for connection to Heroku*/
var PORT = process.env.PORT || 3000;

/*Global constant to call function for npm express to do work*/
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/*Command express to use our static file in our public folder route*/
app.use(express.static("public"));

/*Command to pass or the homedirectory and routes directory data to the HOST*/
app.use("/NoteTaker",routes);

/*Command that sets a listening function for Heroku*/
app.listen(PORT, function() {
  console.log("Your NoteTaker application is listening on PORT: " + PORT);
});