const botonModal = document.querySelector(".boton-modal5 label");

setTimeout(() => {
  if (botonModal) {
    botonModal.click();
  }
}, 10000);

function descargar() {
  window.open("descarga/medicare.pdf", "_blank");
}
