const toggleButton = document.getElementById("toggle-mode");
const body = document.body;

// Alterna entre as classes "dark-mode" e padrão
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});