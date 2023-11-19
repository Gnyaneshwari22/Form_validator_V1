const nameError=document.getElementById("name-error");
const numError=document.getElementById("num-error");
const emailError=document.getElementById("email-error");
const msgError=document.getElementById("msg-error");
let subError=document.getElementById("submitt-error");


const msgInput=document.getElementById("text-input");


function NameValidator(){
    const name=document.getElementById("name-input").value;
    if(name.length == 0){
        nameError.innerHTML= "Name is required";
        return false;
    }
    if(!name.match(/^[a-zA-Z]+\s{1}[a-zA-Z ]+$/)){
         nameError.innerHTML= "write full name";
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
}

function NumberValidator(){
    const num=document.getElementById("number-input").value;
    if(num.length == 0){
        numError.innerHTML="Number cant be zero";
        return false;
    }
    if(num.length !== 10){
        numError.innerHTML="enter 10 digits"
        return false;
    }
    if(!num.match(/^[0-9]{10}$/)){
        numError.innerHTML="Phone is required"
        return false;
    }

    numError.innerHTML='<i class="fa-solid fa-square-check"></i>'
    return true;
}

function EmailValidator(){
    const email=document.getElementById("email-input").value;
    if(email.length== 0){
        emailError.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
        emailError.innerHTML="not a valid email";
        return false;

    }
    emailError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
}
function MessageValidator(){
     
   const msg=document.getElementById("text-input").value;
   var required=30;
   var left=required-msg.length;
   if(left >0 ){
    msgError.innerHTML=left + "more characters required";
    return false;
   }
   msgError.innerHTML='<i class="fa-solid fa-square-check"></i>';
   return true;
}

function ValidateForm(){

  
    if(!NameValidator() || !EmailValidator() || !NumberValidator () || !MessageValidator()){
          subError.style.display='block';
          subError.innerHTML='Fix error to submit';
          console.log("error fixed");
          setTimeout(function(){subError.style.display='hidden';},1000);
          console.log("error fixed");
          return false;
    }
    else{
        subError.style.display='block';
        subError.innerHTML='file submitted';
        return true;
        
    }
}