// ===============================
// 🌐 SAFE STEP - SCRIPT GLOBAL
// ===============================

// ----- MENÚ HAMBURGUESA -----
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Al hacer clic en el botón hamburguesa
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // Cambia el ícono (X o ☰)
  navbar.classList.toggle("show"); // Muestra/Oculta el menú
});

// Cierra el menú cuando se hace clic en un enlace
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbar.classList.remove("show");
  });
});

// ----- SISTEMA DE PESTAÑAS (NAVEGACIÓN ENTRE SECCIONES) -----
const sections = document.querySelectorAll(".section");

// Al hacer clic en cualquier enlace del menú
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita el salto de página

    // Obtiene el nombre de la sección desde el atributo data-section
    const sectionId = link.getAttribute("data-section");

    // Si el enlace no tiene sección, no hace nada
    if (!sectionId) return;

    // Elimina la clase "active" de todos los enlaces del menú
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Oculta todas las secciones
    sections.forEach((sec) => sec.classList.remove("active"));

    // Muestra la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
      // Animación suave al aparecer
      targetSection.style.animation = "fadeIn 0.6s ease";
    }

    // Desplaza al inicio de la página (por si acaso)
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ----- BOTONES INTERNOS (como "Comienza a entrenar" o "Registrarme ahora") -----
const internalButtons = document.querySelectorAll("[data-section]");
internalButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const sectionId = btn.getAttribute("data-section");
    if (!sectionId) return;

    // Oculta todas las secciones
    sections.forEach((sec) => sec.classList.remove("active"));

    // Muestra la sección correspondiente
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add("active");

    // Marca el enlace correspondiente en el menú
    navLinks.forEach((l) => {
      l.classList.toggle(
        "active",
        l.getAttribute("data-section") === sectionId
      );
    });

    // Cierra el menú hamburguesa si estaba abierto
    menuToggle.classList.remove("active");
    navbar.classList.remove("show");
  });
});

// ----- EFECTO DE TRANSICIÓN GLOBAL ENTRE SECCIONES -----
document.addEventListener("DOMContentLoaded", () => {
  sections.forEach((sec) => {
    sec.addEventListener("animationend", () => {
      sec.style.animation = ""; // Limpia la animación para reutilizarla
    });
  });
});

/* =======================
   FORMULARIO DE CONTACTO
=========================*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simula el envío
      status.textContent = "Enviando mensaje...";
      status.style.color = "#0077ff";

      setTimeout(() => {
        status.textContent = "¡Tu mensaje fue enviado correctamente!";
        status.style.color = "green";
        form.reset();
      }, 1500);
    });
  }
});
