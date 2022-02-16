const ecomHambergar=document.querySelector("#ecom-hamburger");
const ecomSidebar=document.querySelector(".ecom-sidebar");

// ecomSidebar.style.display="none";
ecomHambergar.addEventListener("click",()=>{
    if(ecomSidebar.style.display==="block"){
        ecomSidebar.style.display="none"
    }
    else{
        ecomSidebar.style.display="block"
        ecomSidebar.style.zIndex="3"
    }
})

