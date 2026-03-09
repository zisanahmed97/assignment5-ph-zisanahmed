

function login(){

const usernameInput = document.getElementById('username');
const username = usernameInput.value;



const passwordInput = document.getElementById('password');
const password =passwordInput.value;

if(username === "admin" && password === "admin123"){

localStorage.setItem("login","true");
window.location.href = "home.html"

}else{

alert("Wrong credentials");

}

}





