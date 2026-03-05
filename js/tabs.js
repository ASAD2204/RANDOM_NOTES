// Shared tab-switching logic for all topic pages
document.addEventListener("DOMContentLoaded", () => {
  const tabs   = document.querySelectorAll(".lang-tab");
  const panels = document.querySelectorAll(".lang-panel");

  function activateLang(lang) {
    tabs.forEach(t   => t.classList.toggle("active", t.dataset.lang === lang));
    panels.forEach(p => p.classList.toggle("active", p.dataset.lang === lang));
    localStorage.setItem("prefLang", lang);
  }

  // Restore last-used language
  const saved = localStorage.getItem("prefLang") || "cpp";
  activateLang(saved);

  tabs.forEach(tab => {
    tab.addEventListener("click", () => activateLang(tab.dataset.lang));
  });
});
