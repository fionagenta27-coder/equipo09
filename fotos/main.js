document.addEventListener("DOMContentLoaded", () => {
    
    // Capturamos los elementos del HTML
    const btnSuscribir = document.querySelector("#btn-suscribir");
    const emailInput = document.querySelector("#email-input");
    const msgFeedback = document.querySelector("#msg-feedback");

    // Verificamos que el botón exista en la página antes de ejecutar nada
    if (btnSuscribir) {
        btnSuscribir.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que el formulario recargue la página

            const email = emailInput.value;

            // Validación: ¿Tiene un "@" y un "."?
            if (email.includes("@") && email.includes(".")) {
                // Caso ÉXITO
                msgFeedback.textContent = "¡Gracias por suscribirte!";
                msgFeedback.className = "mensaje-exito"; // Aplica color verde
                msgFeedback.style.display = "block";
                emailInput.value = ""; // Limpiamos el campo después de suscribir
            } else {
                // Caso ERROR
                msgFeedback.textContent = "Por favor, ingresá un correo válido.";
                msgFeedback.className = "mensaje-error"; // Aplica color rojo
                msgFeedback.style.display = "block";
            }
        });
    }
});