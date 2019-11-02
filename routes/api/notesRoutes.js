/* Here is the body api or "notesRoutes.js" for the api routing*/
/*Set express to a constant global variable and init the npm express to run with this route body javascript code*/

/*We use the "express.router" class to create route handlers, basically init a routing system*/
const router = express.Router();

router.route("/getNotes").get(notesController.fetchAllNotes);

router
  /*Routing the npm express handler to call the parsed data or value from the notes table in notetaker_db*/  
  .route("/note/:note_id?")

  /*Routing the npm express handeler to run a get action with the jQuery function call to select a note and pass it along with "notesController" data through the parameters*/
  .get(notesController.fetchNote)

  /*Routing the npm express handeler to run a post action with the jQuery function call to make a new note and pass it along with "notesController" data through the parameters*/
  .post(notesController.makeNote)

  /*Routing the npm express handeler to run a delete action with the jQuery function call to remove a note and pass it along with "notesController" data through the parameters*/
  .delete(notesController.removeNote)

  /*Routing the npm express handeler to run a put action which basically calls to place selected context a certain place but with the jQuery function called to add content to a note and pass it along with "notesController" data through the parameters.*/
  .put(notesController.editNote); 

/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;