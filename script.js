
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

// FunciÃ³n para mostrar la ventana emergente
function showModal() {
    // Comprueba si el modal ya se ha mostrado en esta sesiÃ³n
    if (!sessionStorage.getItem("modalShown")) {
        modal.style.display = "block";
        sessionStorage.setItem("modalShown", "true"); // Marca que se mostrÃ³ el modal en esta sesiÃ³n
    }
}

// Cierra el modal al hacer clic en la 'x'
span.onclick = function() {
    modal.style.display = "none";
}

// Cierra el modal al hacer clic fuera de Ã©l
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Ejecuta la funciÃ³n cuando la pÃ¡gina carga
window.onload = function() {
    showModal();
}

