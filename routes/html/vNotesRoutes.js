/*Here is the body or "index" for the routing the html sub pages data*/
/*Set express to a constant global variable and init the npm express to run with this route body javascript code*/
const express = require("express");

/*We use the "express.router" class to create route handlers, basically init a routing system*/
const router = express.Router();

const path = require("path");

const getPath = (fileName) =>{
    return "./../../public/html/"+fileName;
  };
  
  /*Set the "/" default/home path of the url to say "landing.html" which is the html code file for the landing page*/
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, getPath("note-pal-landing-page.html")));
  });
  
  /*Set the "/" daughter path of the url to say "notes.html" which is the html code file for the daughter page "notes"*/
  router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, getPath("note-pal-home.html")));
  });
  
  router.get("/instructions", function(req, res) {
    res.sendFile(path.join(__dirname, getPath("instructions.html")));
  });

  router.get("/about-us", function(req, res) {
    res.sendFile(path.join(__dirname, getPath("about-us.html")));
  });
  
/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;