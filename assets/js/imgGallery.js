function imageEventAdd(){
  document.querySelectorAll("img").forEach(function(elem){
    const clickImage = elem
    elem.addEventListener("click",function(){
    const newImageWindow = document.createElement("div");
    newImageWindow.classList.add("layerPopUp");

    const newImageBtnPlus = document.createElement("button");
    newImageBtnPlus.classList.add("plusBtn")

    const newImageBtnMinus = document.createElement("button");
    newImageBtnMinus.classList.add("minusBtn")

    const documentWrap = document.querySelector("#wrap");
    
    documentWrap.appendChild(newImageWindow);
    newImageWindow.appendChild(clickImage);
    newImageWindow.appendChild(newImageBtnPlus);
    newImageWindow.appendChild(newImageBtnMinus);

    newImageWindow.addEventListener("click", function(){

    })
    })
  })
}