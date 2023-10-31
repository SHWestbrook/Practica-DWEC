function validarFormulario(){
    var email = document.getElementById("email");
    var emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

    var dni= document.getElementById("dni");
    var dniRegex= /^\d{8}[A-HJ-NP-TV-Z]$/i;

    var contra = document.getElementById("passwd");
    var confirContra = document.getElementById("cpasswd");

    if(!emailRegex.test(email.value)){
        alert("El email no es valido");
        return false;
    }

    if(!dniRegex.test(dni.value)){
        alert("El dni no es valido introduce otro")
    }

    if(contra !== confirContra){
        alert("La contraseña no coincide introduce otra");
        return false;
    }
    return true;
}