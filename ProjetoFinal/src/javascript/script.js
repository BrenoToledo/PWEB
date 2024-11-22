document.addEventListener("DOMContentLoaded", () => {
    // Referências aos elementos do DOM
    const modal = document.getElementById("addCardModal");
    const closeBtn = document.querySelector(".close-btn");
    const addCardButtons = document.querySelectorAll(".add-card");
    const deleteCardBtn = document.getElementById("deleteCardBtn");
    let editingCard = null;
  
    // Função para abrir o modal
    const openModal = () => (modal.style.display = "flex");
  
    // Função para fechar o modal
    const closeModal = () => {
      modal.style.display = "none";
      clearModalFields();
      editingCard = null;
      deleteCardBtn.style.display = "none"; // Esconde o botão "Excluir" ao fechar o modal
    };
  
    // Event listener para abrir o modal ao clicar no botão de adicionar card
    addCardButtons.forEach((button) =>
      button.addEventListener("click", openModal)
    );
    
    // Event listener para fechar o modal ao clicar no "X"
    closeBtn.addEventListener("click", closeModal);
  
    // Fechar modal se clicar fora dele
    window.addEventListener("click", (e) => e.target === modal && closeModal());
  
    // Função para limpar os campos do modal
    function clearModalFields() {
      document.getElementById("cardTitle").value = "";
      document.getElementById("cardDescription").value = "";
      document.getElementById("cardPriority").value = "low";
      document.getElementById("cardDueDate").value = "";
      document.getElementById("cardResponsible").value = "";
    }
  
    // Evento de salvar o card
    document.getElementById("saveCardBtn").addEventListener("click", (e) => {
      e.preventDefault();
      const cardTitle = document.getElementById("cardTitle").value;
      const cardDescription = document.getElementById("cardDescription").value;
      const cardPriority = document.getElementById("cardPriority").value;
      const cardDueDate = document.getElementById("cardDueDate").value;
      const cardResponsible = document.getElementById("cardResponsible").value;
  
      if (
        cardTitle &&
        cardDescription &&
        cardPriority &&
        cardDueDate &&
        cardResponsible
      ) {
        if (editingCard) {
          updateCard(
            editingCard,
            cardTitle,
            cardDescription,
            cardPriority,
            cardDueDate,
            cardResponsible
          );
        } else {
          const newCard = createCard(
            cardTitle,
            cardDescription,
            cardPriority,
            cardDueDate,
            cardResponsible
          );
          const column = document.querySelector(
            ".kanban-column[data-id='1'] .kanban-cards"
          );
          column.appendChild(newCard);
        }
        closeModal();
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  
    // Função para criar um novo card
    function createCard(title, description, priority, dueDate, responsible) {
      const card = document.createElement("div");
      card.classList.add("kanban-card");
      card.setAttribute("data-priority", priority);
      card.setAttribute("data-due-date", dueDate);
      card.setAttribute("draggable", "true");
      card.setAttribute("id", `card-${Date.now()}`);
  
      card.innerHTML = `
              <div class="card-title" style="font-weight: bold;">${title}</div>
              <div class="card-description">Descrição: ${description}</div>
              <div class="card-priority">Prioridade: ${priority}</div>
              <div class="card-due-date">Prazo: ${dueDate}</div>
              <div class="card-responsible">Responsável: ${responsible}</div>
          `;
  
      card.addEventListener("click", () => openModalWithCardInfo(card));
      addDragEvents(card);
      applyDueDateColor(card);
      return card;
    }
  
    // Função para preencher o modal com as informações do card a ser editado
    function openModalWithCardInfo(card) {
      openModal();
      document.getElementById("modalTitle").textContent = "Editar Card";
      document.getElementById("cardTitle").value =
        card.querySelector(".card-title").textContent;
      document.getElementById("cardDescription").value =
        card.querySelector(".card-description").textContent.replace("Descrição: ", "");
      document.getElementById("cardPriority").value =
        card.getAttribute("data-priority");
      document.getElementById("cardDueDate").value =
        card.getAttribute("data-due-date");
      document.getElementById("cardResponsible").value =
        card.querySelector(".card-responsible").textContent.replace("Responsável: ", "");
      editingCard = card;
      deleteCardBtn.style.display = "inline-block"; // Mostra o botão "Excluir" ao editar
    }
  
    // Função para atualizar as informações do card
    function updateCard(
      card,
      title,
      description,
      priority,
      dueDate,
      responsible
    ) {
      card.querySelector(".card-title").textContent = title;
      card.querySelector(".card-description").textContent = `Descrição: ${description}`;
      card.querySelector(".card-priority").textContent = `Prioridade: ${priority}`;
      card.querySelector(".card-due-date").textContent = `Prazo: ${dueDate}`;
      card.querySelector(".card-responsible").textContent = `Responsável: ${responsible}`;
      card.setAttribute("data-priority", priority);
      card.setAttribute("data-due-date", dueDate);
      applyDueDateColor(card);
    }
  
    // Função para excluir o card
    deleteCardBtn.addEventListener("click", () => {
      if (editingCard) {
        editingCard.remove();
        closeModal();
      }
    });
  
    // Função para alterar a cor do card conforme o prazo
    function applyDueDateColor(card) {
      const dueDate = new Date(card.getAttribute("data-due-date"));
      const currentDate = new Date();
      const timeDifference = dueDate - currentDate;
      const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
      card.classList.remove(
        "card-due-soon",
        "card-due-soonish",
        "card-due-later"
      );
  
      if (dayDifference <= 3) {
        card.classList.add("card-due-soon");
      } else if (dayDifference <= 7) {
        card.classList.add("card-due-soonish");
      } else {
        card.classList.add("card-due-later");
      }
    }
  
    // Função para adicionar os eventos de arrastar nos cards
    function addDragEvents(card) {
      card.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", card.id);
        setTimeout(() => card.classList.add("dragging"), 0);
      });
  
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
      });
    }
  
    // Funções para as colunas de arrastar e soltar os cards
    const columns = document.querySelectorAll(".kanban-column");
  
    columns.forEach((column) => {
      const cardContainer =
        column.querySelector(".kanban-cards") || createCardContainer(column);
  
      cardContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
        cardContainer.classList.add("dragover");
      });
  
      cardContainer.addEventListener("dragleave", () => {
        cardContainer.classList.remove("dragover");
      });
  
      cardContainer.addEventListener("drop", (e) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData("text");
        const draggedCard = document.getElementById(cardId);
  
        if (draggedCard) {
          cardContainer.appendChild(draggedCard);
          cardContainer.classList.remove("dragover");
        }
      });
    });
  
    // Função para criar o container de cards nas colunas
    function createCardContainer(column) {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("kanban-cards");
      column.appendChild(cardContainer);
      return cardContainer;
    }
  
    // Adiciona eventos de arrastar a todos os cards existentes
    document.querySelectorAll(".kanban-card").forEach(addDragEvents);
  });
  