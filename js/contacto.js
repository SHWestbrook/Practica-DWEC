const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;



    console.log("Nombre: " + nombre);
    console.log("Correo Electrónico: " + email);
    console.log("Mensaje: " + mensaje);

    contactForm.reset();
});
