loadDoc()

function loadDoc() {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          makeDoc(this);
      }
  };
  req.open("GET", "/assets/data/note/note1.xml  ", true);
  req.send();
}

function makeDoc(xml) {
  let i = null;
  const xmlDoc = xml.responseXML;
  const notePage = xmlDoc.getElementsByTagName("note");
  const note = document.querySelector("#note>ul");
  
  for(i=0; i<notePage.length; i++){
    const noteTitle = notePage[i].getElementsByTagName("title");
    const noteList = notePage[i].getElementsByTagName("list");
    const noteContents = notePage[i].getElementsByTagName("contents");

    const newNotePage = document.createElement("li");
    newNotePage.classList.add("note")
    note.appendChild(newNotePage);

    const newNoteTitle = document.createElement("h4");
    newNoteTitle.innerHTML = noteTitle[0].innerHTML;
    newNotePage.appendChild(newNoteTitle);

    const newNoteListWrap = document.createElement("ul");
    newNoteListWrap.classList.add("note_sub");
    newNotePage.appendChild(newNoteListWrap);
    if(noteList.length){
      for(a = 1; a < noteList[0].childNodes.length; a++){
        const newNoteList = (noteList[0].childNodes[a]);
        newNoteListWrap.appendChild(newNoteList);
      }
    }
    if(noteContents.length){
      const newContentsBtn = document.createElement("button");
      newContentsBtn.innerHTML = "세부내용 확인";
      newContentsBtn.classList.add("note_cont_btn");

      const newNoteList = document.createElement("li");
      newNoteListWrap.appendChild(newNoteList);
      newNoteList.appendChild(newContentsBtn);

      const newNoteDiv = document.createElement("div");
      newNoteDiv.classList.add("note_cont");
      newNoteList.appendChild(newNoteDiv);
      
      const newNoteContents = document.createElement("p");
      newNoteContents.classList.add("text");
      newNoteContents.innerHTML = noteContents[0].innerHTML;
      newNoteDiv.appendChild(newNoteContents);
    };
  }
  btnEventAdd();
/*
  var gname = xmlDoc.getElementsByTagName("name")[0].firstChild.data;
  document.getElementById("gname").innerHTML = gname;

  var members = "";
  var member = xmlDoc.getElementsByTagName("member");
  for (i = 0; i < member.length; i++) { 
      if (i != 0) { members += ", "; }
      members += member[i].firstChild.data;
  }
  document.getElementById("members").innerHTML = members;

  var albums = "";
  var album = xmlDoc.getElementsByTagName("album");
  for (i = 0; i < album.length; i++) { 
      albums += "<li>" + album[i].getAttribute('order') + ": " +
      album[i].firstChild.data + "</li>\n";
  }
  document.getElementById("albums").innerHTML = albums;*/
}