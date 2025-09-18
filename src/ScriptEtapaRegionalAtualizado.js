// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== Header Scroll Effect =====
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // ===== Mobile Menu Toggle =====
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Fecha menu ao clicar nos links
    navMenu.querySelectorAll("a, button").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("active"));
    });
  }

  // ===== Scroll Suave para Seções =====
  document.querySelectorAll("a[href^='#'], button[data-scroll]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      const id = el.getAttribute("href")?.slice(1) || el.dataset.scroll;
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== Pesquisa (documentacao.html) =====
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll(".docs-card").forEach(card => {
        const match = card.innerText.toLowerCase().includes(query);
        card.style.display = match ? "block" : "none";
      });
    });
  }

  // ===== Progress Bar Fake (documentacao.html) =====
  const progressFill = document.querySelector(".progress-fill");
  if (progressFill) {
    let progress = 35;
    setInterval(() => {
      progress = (progress + 5) % 100;
      progressFill.style.width = `${progress}%`;
    }, 4000);
  }
});
