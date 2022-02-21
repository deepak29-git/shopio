const ecomHambergar=document.querySelector("#ecom-hamburger");
const ecomSidebar=document.querySelector(".ecom-sidebar");

ecomHambergar.addEventListener("click",()=>{
    if(ecomSidebar.style.display==="block"){
        ecomSidebar.style.display="none"
    }
    else{
        ecomSidebar.style.display="block"
        ecomSidebar.style.zIndex="3"
    }
})

