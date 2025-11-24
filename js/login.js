const credentials = {username:"client1",password:"Client@123"};
function login(){const user=document.getElementById("username").value;
const pass=document.getElementById("password").value;
if(user===credentials.username && pass===credentials.password){
window.location.href="viewer.html";}else{document.getElementById("error-msg").innerText="Invalid username or password!";}}