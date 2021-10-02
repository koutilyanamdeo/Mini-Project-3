
const mail = document.querySelector(".email");
const pass  = document.querySelector(".password");

const myMail = "koutilyanamdeo888@gmail.com";
const myPass = "1234";

let mybtn = document.getElementById("button");
mybtn.disabled = true;

mail.addEventListener("change", on);
pass.addEventListener("change", onOne);

function on(){
if(mail.value === "" ){
    mybtn.disabled=true ;
}
else{
    mybtn.disabled= false;
}
}

function onOne() {
    if (pass.value === "") {
        mybtn.disabled=true ;
    }
    else{
        mybtn.disabled= false;
    }
}



function check() {
   if (mail.value === myMail && pass.value === myPass){
        location.href = "try.html";
   }
   else{
       document.querySelector(".p").innerHTML =  "incorrect username or id";
   } 
   }

