document.querySelectorAll(".note_cont_btn").forEach(function(elem){
  const btn = elem;
  elem.addEventListener("click", function(){
    btn.parentElement.querySelector(".note_cont").style.display = "block";
    document.querySelector(".everyBtnClose").style.display = "block";
  })
})

document.querySelector(".everyBtnClose").addEventListener("click", function(){
  this.style.display = "none";
  document.querySelectorAll(".note_cont").forEach(function(elem){
    elem.style.display = "none";
  })
})