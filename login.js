function inicio(){
    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");

    if (usuario.value=="Nadia" && password.value=="1234") {
        //alert("Bienvenido!!");
        window.location='welcome.html';

    }
    else{
        alert('Los datos indroducido son incorrectos')
    }
}