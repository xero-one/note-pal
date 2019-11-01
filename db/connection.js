/*Welcome to the connection js file!!!*/

/*After installing mysql tell javascript to init*/
const mysql = require("mysql");

/*Global variable the developer can maniputlat to establish a connection to the backend database*/
var connection;

/*Set up javascript to connect db locally if JAWSDB heroku app deploys*/
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      port: 3306,
      password: "Wolviver24",
      database: "notetaker_db"
    });
  }

/*Transforms BOOLEAN 0s and 1s returned from the db into true and false*/
connection.config.typeCast = function(field, next) {
    if (field.type == "TINY" && field.length == 1) {
      return field.string() == "1"; // 1 = true, 0 = false
    }
    return next();
  };
  
  /*"module.exports" export the connection so it's available in other parts of the app*/
  module.exports = connection;