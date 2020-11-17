loadDoc()

function loadDoc() {

  const req = new XMLHttpRequest();
  req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          makeDoc(this);
      }
  };
  req.open("GET", "assets/data/note/note1.xml", true);
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
    };
  }

  btnEventAdd();
}

function btnEventAdd(){
    document.querySelectorAll(".note_cont_btn").forEach(function(elem, index){
    const btn = elem;
    const btnIndex = index;
    elem.addEventListener("click", function(){
      btn.parentElement.querySelector(".note_cont").style.display = "block";
      document.querySelector(".everyBtnClose").style.display = "block";
      if(!document.querySelectorAll(".note_cont")[btnIndex].innerHTML){
        loadContents(btnIndex);
      }
    })
  })

  document.querySelector(".everyBtnClose").addEventListener("click", function(){
    this.style.display = "none";
    document.querySelectorAll(".note_cont").forEach(function(elem){
      elem.style.display = "none";
    })
  })
}

function loadContents(btnIndex) {

  const req = new XMLHttpRequest();
  req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          contentsMake(this, btnIndex);
      }
  };
  req.open("GET", "assets/data/note/note1.xml", true);
  req.send();
}

function contentsMake(xml, btnIndex){

  const xmlDoc = xml.responseXML;
  const noteContents = xmlDoc.getElementsByTagName("contents");
  const contentsLocation = document.querySelectorAll(".note_cont");

      
  const newNoteContents = document.createElement("p");
  newNoteContents.classList.add("text");
  newNoteContents.innerHTML = noteContents[btnIndex].innerHTML;

  contentsLocation[btnIndex].appendChild(newNoteContents);
  imageEventAdd(btnIndex);
  // Image Event Add Function is on 'imageGallery.js' //
}

function imageEventAdd(btnIndex){
  if(document.querySelectorAll(".note_cont")[btnIndex].querySelectorAll("img").length){
  document.querySelectorAll(".note_cont")[btnIndex].querySelectorAll("img").forEach(function(elem){
    const clickImg = elem
    elem.addEventListener("click", function(){
      window.open(clickImg.src);
    })
  })
  }
}
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
