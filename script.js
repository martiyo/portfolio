let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function download(pdfUrl) {
  fetch(pdfUrl)
    .then((resp) => resp.arrayBuffer())
    .then((resp) => {
      const file = new Blob([resp], { type: "application/pdf" });

      const fileURL = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "curriculum " + new Date() + ".pdf";
      link.click();
    });
}
