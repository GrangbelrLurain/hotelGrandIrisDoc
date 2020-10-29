'use strict';

document.querySelector(".asideBtn").addEventListener("click", function(){
    const asideBtn = document.querySelector(".asideBtn");

    closeAside(asideBtn);
})

function closeAside (clickElem){
    const Btn = clickElem;
    const asideMenu = Btn.parentNode;
    if(Btn.classList.contains("close") == false){
        Btn.classList.add("close");
        asideMenu.classList.add("close");
        return;
    }else{
        Btn.classList.remove("close");
        asideMenu.classList.remove("close");
    }
}