const envelope = document.getElementById("envelope");
const title = document.getElementById("title");
const message = document.getElementById("message");

// Personalización
const nombre = prompt("¿Para quién es la carta?");
const mensajePersonalizado = prompt("Escribe tu mensaje personalizado:");

if (nombre) {
  title.textContent = `Para ${nombre} 💖`;
}

if (mensajePersonalizado) {
  message.textContent = mensajePersonalizado;
}

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
