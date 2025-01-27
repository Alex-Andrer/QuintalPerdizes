const toggleButton = document.getElementById("toggle-mode");
const body = document.body;

// Alterna entre as classes "dark-mode" e padrão
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const petForm = document.getElementById("pet-form");
const petTableBody = document.querySelector("#pet-table tbody");

// Função para adicionar um pet na tabela
petForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o envio do formulário padrão

  // Coleta os dados do formulário
  const name = document.getElementById("name").value;
  const breed = document.getElementById("breed").value;
  const age = document.getElementById("age").value;
  const size = document.getElementById("size").value;
  const notes = document.getElementById("notes").value;

  // Cria uma nova linha na tabela
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${breed}</td>
    <td>${age}</td>
    <td>${size}</td>
    <td>${notes}</td>
  `;

  // Adiciona a nova linha à tabela
  petTableBody.appendChild(newRow);

  // Limpa o formulário
  petForm.reset();
});