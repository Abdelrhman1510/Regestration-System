// Sign up variables 
var Name= document.querySelector('#Name');
var Email= document.querySelector('#email');
var Password= document.querySelector('#password');
var siUp= document.querySelector('#signUpBtn');
var approved= document.querySelector('#approved');
var emailExsist= document.querySelector('#emailExsist');


// LogIn variables 
var logInEmail= document.querySelector('#logInEmail');
var logInPassword= document.querySelector('#logInPassword');
var logBtn= document.querySelector('#logBtn');
var loginError=document.querySelector('#loginError');

// logout variables 
var logoutBtn= document.querySelector('#logoutBtn');



// welcome + name 
var welName = document.querySelector("#welName");

var username = localStorage.getItem('welcomeUsername')


if(welName){
if (username) {
    welName.innerHTML = `welcome <span class=" text-warning">${username} </span> `
}}

if (username == null) {
  window.open("./index.html")
}

var users;

// check local storage is empty or not 

if (localStorage.getItem('users') == null) {
    users = []
} else {
    users = JSON.parse(localStorage.getItem('users'))
}

// add user function

function addUser(){

    if(validateUserName() && validateUserEmail () && validateUserPassword()){ 

   
   var user={
        name:Name.value,
        email:Email.value,
        password:Password.value,
    }
    if(users.length == 0){
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users))
    approved.classList.replace('d-none','d-block')
    emailExsist.classList.replace('d-block','d-none')
    
    return true
    }

 
    if(checkEmail() == false){
        emailExsist.classList.replace('d-none','d-block')
        approved.classList.replace('d-block','d-none')
    }else{

        users.push(user);
        localStorage.setItem("users",JSON.stringify(users))
        approved.classList.replace('d-none','d-block')
        emailExsist.classList.replace('d-block','d-none')
    
    }
}
}


if(siUp){
    siUp.addEventListener('click', function(){
    addUser();
});}

// checkEmail is exsited or not 
function checkEmail(){
    for(var i=0 ;i<users.length ;i++){

        if(users[i].email == Email.value){
           
            return false
        }
    }
}

    // valdiate signup varaiables 

function validateUserName(){
    var regex= /^[a-zA-Z0-9_-]{3,16}$/
    
        if (regex.test(Name.value) == true){
            Name.style.border="none"
            wrongUserName.classList.replace("d-block", "d-none")
            return true;
        }else{
            Name.style.border="2px solid red"
            wrongUserName.classList.replace("d-none", "d-block")
            return false;
           
        }

}
function validateUserEmail(){
    var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
        if (regex.test(Email.value) == true ){
            Email.style.border="none"
            wrongUserEmail.classList.replace("d-block", "d-none")
            return true;
        }else{
            Email.style.border="2px solid red"
            wrongUserEmail.classList.replace("d-none", "d-block")
            return false;
           
        }

}
function validateUserPassword(){
    var regex= /^[0-9a-zA-Z ]{6,60}$/
    
    if (regex.test(Password.value) == true){
        Password.style.border="none"
        wrongUserPassword.classList.replace("d-block", "d-none")
        return true;
    }else{
        Password.style.border="2px solid red"
        wrongUserPassword.classList.replace("d-none", "d-block")
        return false;
       
    }

}


// logIn function

function logIn(){
    if( validateLoginEmail () && validateLoginPassword ()){ 
   
    for(var i=0 ;i<users.length ;i++){

        if(users[i].email == logInEmail.value && users[i].password == logInPassword.value){
            localStorage.setItem('welcomeUsername', users[i].name)
            logBtn.href= "./home.html"
          
        }
        else{
            document.getElementById('loginError').innerHTML = '<span class="text-danger">INVALID EMAIL OR PASSWORD</span>'
            
        }

    }

}
}


if(logBtn){


    logBtn.addEventListener('click', function(){
      
   
    logIn();
});}

 // valdiate logIn varaiables 
function validateLoginEmail(){
    var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
        if (regex.test(logInEmail.value) == true ){
            logInEmail.style.border="none"
            wrongUserEmail.classList.replace("d-block", "d-none")
            return true;
        }else{
            logInEmail.style.border="2px solid red"
            wrongUserEmail.classList.replace("d-none", "d-block")
            return false;
           
        }

}
function validateLoginPassword(){
    var regex= /^[0-9a-zA-Z ]{6,60}$/
    
    if (regex.test(logInPassword.value) == true){
        logInPassword.style.border="none"
        wrongUserPassword.classList.replace("d-block", "d-none")
        return true;
    }else{
        logInPassword.style.border="2px solid red"
        wrongUserPassword.classList.replace("d-none", "d-block")
        return false;
       
    }

}


// logout function

function logout() {
    localStorage.removeItem('welcomeUsername')
    logoutBtn.href= "./index.html"
    
}

if(logoutBtn){
    logoutBtn.addEventListener("click", function(){
        logout()
    })
}