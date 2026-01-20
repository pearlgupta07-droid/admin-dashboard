const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

// Load saved preference or system preference
const saved = localStorage.getItem("theme");
if (saved === "dark" || saved === "light") {
  root.setAttribute("data-theme", saved);
  toggleBtn.textContent = saved === "dark" ? "🌙" : "🌞";
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  root.setAttribute("data-theme", "dark");
  toggleBtn.textContent = "🌙";
}

// Toggle handler
toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggleBtn.textContent = next === "dark" ? "🌙" : "🌞";
});