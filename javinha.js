function login() {
var login = document.getElementById("login").value;
var password = document.getElementById("password").value;
if(login =="abc" && password =="abc") {
    alert("sucesso")
    location.href="untitled-2.html"
}
else{
    alert("Erro, nome ou senha incorreto")
}
}
