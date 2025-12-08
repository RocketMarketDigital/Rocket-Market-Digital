// ANIMAÇÃO DE ENTRADA (scroll reveal)
const reveals = document.querySelectorAll(".section, .panel, .heroCard, .card");

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";
    }
  });
}, { threshold: 0.18 });

reveals.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(22px)";
  el.style.transition = "opacity .65s ease, transform .65s ease";
  io.observe(el);
});

// ANCORAS: suaviza o pulo e mantém o topo bonito
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// Ano no footer
document.getElementById("year").textContent = new Date().getFullYear();
