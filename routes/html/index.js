/*Here is the body or "index" for the routing the html data*/
/*Set express to a constant global variable and init the npm express to run with this route body javascript code*/
const express = require("express");

/*We use the "express.router" class to create route handlers, basically init a routing system*/
const router = express.Router();

/*Set constant variable to require the "vNotesRoutes.js" file*/ 
const vNotesRoutes = require("./vNotesRoutes");

/*Cammand the router constant to use the "/" to pass all the "vNotesRoutes.js" information to*/
router.use("/",vNotesRoutes);

/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;