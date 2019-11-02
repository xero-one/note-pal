/* Here is the body api or "index" for the routing dir*/
/*Set express to a constant global variable and init the npm express to run with this route body javascript code*/
const express = require("express");

/*We use the "express.router" class to create route handlers, basically init a routing system*/
const router = express.Router();


/*Set constant variable to call all api information from directory at "/api"*/
const apiRoutes = reuire("./api");

/*Set constant variable to call all essential html information from directory at "/html"*/
const htmlRoutes = require("./html");

/*Cammand the router constant to use the "/api" to pass all api information to*/
router.use("/api",apiRoutes);

/*Cammand the router constant to use the "/"  to pass all html information to*/
router.use("/",htmlRoutes);

/*Command to get all info BUT if some info fails to send command the DOM or window to throw a error message and 404*/
router.get("*", function(req, res) {
    res.send("<h1>File Not Found: 404 error</h1>");
    console.log("404 error window can't load page")
  });
  
/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;


