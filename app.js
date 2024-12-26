let btn = document.querySelector(".click");
let body = document.querySelector("body");

btn.addEventListener("click" , ()=>{
    if(body.classList.contains("light-theme")){
    body.classList.toggle("dark-theme");
    }
    else{
        body.classList.toggle("light-theme");
    }
});