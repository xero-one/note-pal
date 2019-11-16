/* Here is the body api or "index" for the api routing*/
/*Set express to a constant global variable and init the npm express to run with this route body javascript code*/
const express = require("express");

/*We use the "express.router" class to create route handlers, basically init a routing system*/
const router = express.Router();

/*Set a constant variable to require the "notesRoutes.js" file for the URL*/
const notesRoutes = require("./notesRoutes");

/*Apply the routing to "/" or home and pass the constant variable for the "notesRoutes.js"*/
router.use("/",notesRoutes);

/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;