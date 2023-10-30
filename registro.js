function validarFormulario(){
    var email = document.getElementById("email");
    var emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

    var contra = document.getElementById("passwd");
    var confirContra = document.getElementById("cpasswd");

    if(!emailRegex.test(email.value)){
        alert("El email no es valido");
        return false;
    }

    if(contra !== confirContra){
        alert("La contraseña no coincide introduce otra");
        return false;
    }
    return true;
}