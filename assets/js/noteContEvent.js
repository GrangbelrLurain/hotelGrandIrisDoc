/*function btnEventAdd(){
    document.querySelectorAll(".note_cont_btn").forEach(function(elem, index){
    const btn = elem;
    const btnIndex = index;
    elem.addEventListener("click", function(){
      btn.parentElement.querySelector(".note_cont").style.display = "block";
      document.querySelector(".everyBtnClose").style.display = "block";
      loadContents(btnIndex);
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
  const btnIndex = btnIndex

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
  const btnIndex = btnIndex

  const xmlDoc = xml.responseXML;
  const noteContents = xmlDoc.getElementsByTagName("contents");
  const contentsLocation = document.querySelectorAll(".note_cont");

      
  const newNoteContents = document.createElement("p");
  newNoteContents.classList.add("text");
  newNoteContents.innerHTML = noteContents[btnIndex].innerHTML;

  contentsLocation[btnIndex].appendChild(newNoteContents);
}*/