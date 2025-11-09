// DOM references
const list = document.getElementById("item-list");
const themeSelect = document.getElementById("theme-select");
const listStyleSelect = document.getElementById("list-style-select");
const resetBtn = document.getElementById("reset-btn");

// Generate list dynamically
const colors = ["Red", "Blue", "Green", "Orange", "Purple"];
colors.forEach(color => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = color;
  list.appendChild(li);
});

// Load saved preferences
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedListStyle = localStorage.getItem("listStyle") || "expanded";

  applyTheme(savedTheme);
  applyListStyle(savedListStyle);

  themeSelect.value = savedTheme;
  listStyleSelect.value = savedListStyle;
});

// Theme change
themeSelect.addEventListener("change", e => {
  const theme = e.target.value;
  applyTheme(theme);
  localStorage.setItem("theme", theme);
});

// List style change
listStyleSelect.addEventListener("change", e => {
  const style = e.target.value;
  applyListStyle(style);
  localStorage.setItem("listStyle", style);
});

// Reset preferences
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  applyTheme("light");
  applyListStyle("expanded");
  themeSelect.value = "light";
  listStyleSelect.value = "expanded";
});

// Helper functions
function applyTheme(theme) {
  document.body.className = theme;
}

function applyListStyle(style) {
  list.className = `list-group ${style}`;
}
