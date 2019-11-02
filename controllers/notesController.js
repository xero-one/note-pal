
/*set a constant that requires the database data files from the path*/
const db = require("./../db/connection");

/*"module.exports" export the route so the JQUERY functions along with the data its manipulating it's available in other parts of the app*/
module.exports={
  fetchAllNotes : function(req, res){
    db.query("SELECT * FROM notes order by created_dt desc,-modified_dt desc",function(err,dbNotesData){
      if(err) res.json(err);
      res.json(dbNotesData);
      console.log(dbNotesData);
    });
  },
  fetchNote : function(req, res){
    db.query("SELECT * FROM notes WHERE ?",[req.query],function(err,dbNotesData){
      if(err) res.json(err);
      res.json(dbNotesData);
    });
  },
  makeNote : function(req,res){
    db.query("INSERT INTO notes SET ?", [req.body], function(err, dbNote){
      if(err) res.json(err);
      res.json(dbNote);
      console.log(dbNote);
    });
  },
  removeNote : function(req,res){
    db.query("DELETE FROM notes WHERE ?", [req.body], function(err, dbNote){
      if(err) res.json(err);
      res.json(dbNote);
    });
  },
  editNote : function(req,res){
    db.query("UPDATE notes SET modified_dt = CURRENT_TIMESTAMP, ? WHERE ?", [req.body, {note_id:req.params.note_id}], function(err, dbNote){
      if(err) res.json(err);
      
      res.json(dbNote);
    });
  }

}