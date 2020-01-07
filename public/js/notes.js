const colors = {
    1: "LightPink",
    2: "LightSalmon",
    3: "Yellow",
    4: "LightGreen",
    5: "LightCyan",
    6: "MediumPurple"
};

/*Function to call for users existing notes ""*/
const showExistingNotes = function() {
    $.ajax({
        url: "/NoteTaker/api/getNotes",
        method: "GET"
        }).then(function (data) {
          if(data){
            displayNotes(data);
          }
      });
    };

/*Function to display already made notes in the #savedNotes section and keep track of them. This function calls on another function that creates a note "makeNoteCard"*/
const displayNotes = function(noteData) {
  $("#savedNotes").empty();
  if(noteData.length > 0){
    for(let i=0; i < noteData.length; i++){
      $("#savedNotes").append(makeNoteCard(noteData[i]));
    }
  }else{
    $("#savedNotes").text("There are no notes logged at this time.");
    console.log("There are no notes logged at this time");
  }
};

/*Function that creates the cards*/
const makeNoteCard = function(dbNote) {
    var date = dbNote.modify_date?dbNote.modify_date:dbNote.create_date;
    var creationDate = moment(date,'YYYY-MM-DD HH:mm:ss').format("Do MMM[']YY[, ]h:mm a");

    $card = $("<div class='collapsed-note'>");

    $card.attr("id",dbNote.note_id);

    $cardTitle = $("<div class='card-content white-text'>")
    $cardTitle.addClass(colors[dbNote.color_id]);
    $cardTitle.attr("id",dbNote.note_id);

    $cardTitle.append(`<a data-toggle="collapse" href="#collapse${dbNote.note_id}">${dbNote.note_title}</a>`);
    $cardTitle.append(`
    <span style='float:right;'>${creationDate} 
    <div class="col s1 edit-svg" title="Edit Note">
            <svg width="100%" height="100%" viewBox="0 0 1070 1071" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g transform="matrix(1,0,0,1,-465,-506)">
                    <g transform="matrix(1,0,0,1.0186,0,0)">
                        <g id="Edit" transform="matrix(15.2802,1.84904e-31,1.88343e-31,15.0012,-19521.4,-13093.8)">
                            <g transform="matrix(1,0,0,1,-63.5,-488.6)">
                                <path d="M1383.5,1414.6L1413.5,1414.6L1411.5,1416.6L1385.5,1416.6L1385.5,1450.6L1419.5,1450.6L1419.5,1424.6L1421.5,1422.6L1421.5,1452.6L1383.5,1452.6L1383.5,1414.6ZM1421.9,1412L1402.5,1431.5L1404.6,1433.6L1424,1414.1L1425.5,1415.5L1405.7,1435.3L1399.1,1436.9L1400.7,1430.4L1420.5,1410.6L1421.9,1412ZM1429.3,1410.3L1425.8,1406.8C1425.4,1406.4 1424.8,1406.4 1424.4,1406.8L1422.1,1409.1L1427,1414L1429.3,1411.7C1429.6,1411.3 1429.6,1410.7 1429.3,1410.3Z"/>
                            </g>
                            <g transform="matrix(1.27273,-2.73691e-48,0,1.2963,992.364,882.667)">
                                <rect x="248" y="18" width="55" height="54" style="fill:none;"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
    </div>

    <div class="col s1 delete-svg" title="Delete Note">
            <svg width="100%" height="100%" viewBox="0 0 584 812" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g transform="matrix(1,0,0,1,-706,-583)">
                    <g transform="matrix(1,0,0,1.0186,0,0)">
                        <g id="Delete" transform="matrix(6.32578,-5.39363e-16,-4.32618e-16,6.62429,-3471.17,-2288.85)">
                            <g transform="matrix(2.56,2.0844e-16,1.64135e-16,2.4,209.92,-1.4966e-13)">
                                <path d="M198.103,180.001C198.238,180.006 198.373,180.015 198.508,180.032C198.836,180.074 199.159,180.156 199.467,180.278C200.035,180.502 200.55,180.858 200.961,181.31C201.33,181.716 201.614,182.198 201.79,182.717C201.929,183.13 201.994,183.559 202,183.994L202,186L200,186C200,185.316 200.008,184.632 199.999,183.948C199.99,183.714 199.948,183.485 199.862,183.267C199.654,182.74 199.22,182.316 198.688,182.121C198.483,182.046 198.27,182.009 198.052,182.001C195.351,181.966 192.649,181.966 189.948,182.001C189.73,182.009 189.517,182.046 189.312,182.121C188.765,182.322 188.322,182.765 188.121,183.312C188.039,183.536 188.003,183.769 188,184.006L188,186L186,186C186,185.299 185.992,184.598 186.001,183.897C186.018,183.462 186.093,183.035 186.243,182.625C186.633,181.56 187.479,180.693 188.533,180.278C188.841,180.156 189.164,180.074 189.492,180.032C189.627,180.015 189.762,180.006 189.897,180.001C192.632,179.966 195.368,179.966 198.103,180.001Z" style="fill-rule:nonzero;"/>
                            </g>
                            <g transform="matrix(2.56,2.0844e-16,1.64135e-16,2.4,209.92,-1.4966e-13)">
                                <rect x="176" y="186" width="36" height="2" style="fill-rule:nonzero;"/>
                            </g>
                            <g transform="matrix(2.56,2.0844e-16,1.64135e-16,2.4,209.92,-1.4966e-13)">
                                <rect x="193" y="192" width="2" height="32" style="fill-rule:nonzero;"/>
                            </g>
                            <g transform="matrix(2.56,2.0844e-16,1.64135e-16,2.4,209.92,-1.4966e-13)">
                                <path d="M202,192.031L201,224.031L199,223.969L200,191.969C200.667,191.99 201.333,192.01 202,192.031Z" style="fill-rule:nonzero;"/>
                            </g>
                            <g transform="matrix(2.56,2.0844e-16,1.64135e-16,2.4,209.92,-1.4966e-13)">
                                <path d="M189,223.969L187,224.031L186,192.031L188,191.969C188.333,202.635 188.666,213.302 189,223.969Z" style="fill-rule:nonzero;"/>
                            </g>
                            <g transform="matrix(2.38933,1.94544e-16,1.64135e-16,2.4,243.029,-1.46964e-13)">
                                <path d="M181.859,226.133C181.879,226.359 181.931,226.579 182.027,226.787C182.255,227.285 182.703,227.684 183.246,227.874C183.454,227.946 183.671,227.985 183.892,227.998C190.609,228.225 197.335,228.076 204.056,227.999C204.278,227.992 204.496,227.958 204.707,227.89C205.271,227.706 205.738,227.3 205.973,226.787C206.069,226.579 206.121,226.359 206.141,226.134L209.003,187.93L211.14,188.07C210.184,200.839 209.391,213.619 208.269,226.376C208.222,226.79 208.119,227.192 207.943,227.575C207.486,228.571 206.593,229.367 205.505,229.747C205.056,229.904 204.586,229.983 204.107,229.999C197.37,230.075 190.63,230.075 183.893,229.999C183.414,229.983 182.944,229.904 182.495,229.747C181.375,229.356 180.463,228.524 180.018,227.488C179.853,227.102 179.759,226.698 179.723,226.285L176.86,188.07L178.997,187.93C179.951,200.665 180.905,213.399 181.859,226.133Z" style="fill-rule:nonzero;"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
    </div>
    </span>`);

    $cardBody = $("<p><textarea id='note_text' class='note-text' placeholder='Note' maxlength='300'></textarea></p>");
   
    $cardBody.append(dbNote.note_text);
  
    $collapseDiv = $("<div class='collapse'>");
    $collapseDiv.attr("id","collapse"+dbNote.note_id);
    $collapseDiv.append($cardBody);
      
    $card.append($cardTitle,$collapseDiv);
     
    return $card;
  };

/*Make sure the note is valid in the database if it is display it and if not, hide it by returning false*/
  const validateNote = function(noteData) {
    if(!noteData.note_title  && !noteData.note_text ){
      return false;
    }
    return true;
  }

/*JQUERY call to make a new note and send the data to the api so it can then be routed to the db to be saved/entered*/
  const makeNote = function(noteData) {
    $.ajax({
      url: "/NoteTaker/api/note",
      method: "POST",
      data:noteData
      }).then(function () {
        clearNote();
        showExistingNotes();
    });
  }

/*JQUERY call to remove a note and call the delete response to api so it can then be routed to the db so the selected info can be deleted*/
 const removeNote = function(note_id) {
    $.ajax({
      url: "/NoteTaker/api/note",
      method: "DELETE",
      data:{note_id:note_id}
      }).then(function () {
        showExistingNotes();
    });
  };

/*JQUERY call to edit note and send the newly edit data to the api so it can then be routed to the db to be saved/entered*/
const editNote = function(note_id, noteData) {
    $.ajax({
      url: "/NoteTaker/api/note/"+note_id,
      method: "PUT",
      data:noteData
      }).then(function () {
        clearNote();
        showExistingNotes();
    });
  }

/*JQUERY call to Set Note to Edit*/
const setNoteToEdit = (note_id)=>{
    /*Retrieve Note from db*/
    $.ajax({
      url: "/NoteTaker/api/note",
      method: "GET",
      data:{note_id:note_id}
      }).then(function (noteData) {
        if(noteData){
          addDataToNote(noteData[0]);
        }
    });
  };

/*JQUERY call that adds the right ids to the data so it can be matched/parsed and stored in our db the right way*/
const addDataToNote = function(noteData) {
    $("#note_title").val(noteData.note_title);
    $("#note_text").val(noteData.note_text);
    $("#note_id").val(noteData.note_id);
  
    var color_id = noteData.color_id;
    var color = colors[color_id];
    colorCard(color, color_id);
  }


/*JQUERY call to clear the note of all the text/content*/
const clearNote = function() {
    $("#note_title").val("");
    $("#note_text").val("");
  };


const colorNote = function(color, color_id) {
    $(".card").css('background-color',color);
  
    $("#color_id").val(color_id);
  }

/*Call functions once the document is loaded*/
$(document).ready(function(){
    /*Call function that displays existing data*/
    showExistingNotes();
  
    /*Event handler that saves and adds note to the db*/
    $(document).on("click",".save-svg",function(){
      var note_id = $("#note_id").val();
      var note_title = $("#note_title").val().trim();
      var note_text = $("#note_text").val().trim();
      var color_id = $("#color_id").val();
      
      
  
      var noteData = {note_title:note_title, note_text:note_text, color_id:color_id};
  
      if(validateNote(noteData)){
        if(note_id){
          editNote(note_id, noteData);
        }else{
          makeNote(noteData);
        }
      }else{
        $("#note_text").text("Nothing to save.");
      }
  
      
    });
  
    /*Call the function that deletes the note*/
    $(document).on("click",".delete-svg",function(){
      let note_id = $(this).closest("div").attr("id");
      removeNote(note_id);
    });
  
    /*Call the JQUERY function to edit the note*/
    $(document).on("click",".edit-svg",function(){
      let note_id = $(this).closest("div").attr("id");
      setNoteToEdit(note_id);
    });
  
    /*Call the JQUERY function that clears all text/content from the note*/
    $(document).on("click",".clear-svg",function(){
      clearNote();
    });
  
    /*Call the JQUERY function that colors the note*/
    $(document).on("click",".color-option",function(){
      let color = $(this).attr("color");
      let color_id = $(this).attr('color_id');
      colorNote(color,color_id);
    });
  });