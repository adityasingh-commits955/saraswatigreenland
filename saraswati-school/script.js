function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u=="aditya" && p=="Saraswati@2008"){
window.location="dashboard.html";
}
else{
alert("Wrong login");
}

}
<script>
document.getElementById("f1").innerText =
localStorage.getItem("fee1") || "600";

document.getElementById("f2").innerText =
localStorage.getItem("fee2") || "1000";
</script>