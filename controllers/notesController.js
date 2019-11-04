
/*set a constant that requires the database data files from the path*/
const db = require("./../db/connection");

/*"module.exports" export the route so the JQUERY functions along with the data its manipulating it's available in other parts of the app*/
module.exports={
  /*JQERY select a note function to select * ALL data in the mysql / server */  
  fetchAllNotes : function(req, res){
    db.query("SELECT * FROM notes order by created_dt desc,-modified_dt desc",function(err,dbNotesData){
      if(err) res.json(err);
      res.json(dbNotesData);
      console.log(dbNotesData);
    });
  },
  /*JQERY select a note function to select data in the mysql / server */
  fetchNote : function(req, res){
    db.query("SELECT * FROM notes WHERE ?",[req.query],function(err,dbNotesData){
      if(err) res.json(err);
      res.json(dbNotesData);
    });
  },
  /*JQERY add note function to push a note created by the user to add to the mysql / server */
  makeNote : function(req,res){
    db.query("INSERT INTO notes SET ?", [req.body], function(err, dbNote){
      if(err) res.json(err);
      res.json(dbNote);
      console.log(dbNote);
    });
  },
  /*JQERY delete note function to delete note stored in the mysql / server */
  removeNote : function(req,res){
    db.query("DELETE FROM notes WHERE ?", [req.body], function(err, dbNote){
      if(err) res.json(err);
      res.json(dbNote);
    });
  },
  /*JQERY edit a note function to edit data in the mysql / server */
  editNote : function(req,res){
    db.query("UPDATE notes SET modified_dt = CURRENT_TIMESTAMP, ? WHERE ?", [req.body, {note_id:req.params.note_id}], function(err, dbNote){
      if(err) res.json(err);
      
      res.json(dbNote);
    });
  }

}