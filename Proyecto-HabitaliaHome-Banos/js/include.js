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

        // --- Aquí inicializamos el menú móvil SOLO después de cargar el header ---
        const mobileMenuIcon = el.querySelector(".mobileMenuIcon");
        const mobileMenu = el.querySelector("#mobileMenu");

        if (mobileMenuIcon && mobileMenu) {
          mobileMenuIcon.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
          });
        }

        const mobileDropdowns = el.querySelectorAll(".mobileDropdown");
        mobileDropdowns.forEach((dropdown) => {
          dropdown.addEventListener("click", () => {
            const content = dropdown.querySelector(".mobileDropdown-content");
            content.classList.toggle("open");
          });
        });
      })
      .catch((err) => console.error("Error cargando", file, err));
  });
});

