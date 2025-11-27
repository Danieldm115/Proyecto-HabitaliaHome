// Script de carga de el header y footer (O cualquier archivo html)
// Usar con un div con el atributo data-include="archivo.html" a cargar
document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach((el) => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then((res) => res.text())
      .then((html) => {
        el.innerHTML = html;
      })
      .catch((err) => console.error("Error cargando", file, err));
  });
});
