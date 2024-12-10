const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tasks) {
  const taskList = document.querySelector(".tasks__list");

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = createTaskItem(task, index);
    taskList.appendChild(taskItem);
  });
}

function createTaskItem(task, index) {
  const liElement = document.createElement("li");
  liElement.className = "task__item";

  const divContainer = document.createElement("div");
  divContainer.className = "task-info__container";

  const spanElement = document.createElement("span");
  spanElement.className = "task-type";

  if (task.type.toLowerCase() === "urgente") {
    spanElement.classList.add("span-urgent");
  } else if (task.type.toLowerCase() === "importante") {
    spanElement.classList.add("span-important");
  } else if (task.type.toLowerCase() === "normal") {
    spanElement.classList.add("span-normal");
  }

  const pElement = document.createElement("p");
  pElement.textContent = task.title;
  divContainer.appendChild(spanElement);
  divContainer.appendChild(pElement);

  const buttonElement = document.createElement("button");
  buttonElement.className = "task__button--remove-task";

  buttonElement.addEventListener("click", () => {
    removeTask(task);
  });

  liElement.appendChild(divContainer);
  liElement.appendChild(buttonElement);

  return liElement;
}

function removeTask(taskToRemove) {
  const index = tasks.indexOf(taskToRemove);

  if (index !== -1) {
    tasks.splice(index, 1);
    renderElements(tasks);
  }
}

function addTask() {
  const titleInput = document.getElementById("input_title");
  const typeInput = document.querySelector(".form__input--priority");

  const taskTitle = titleInput.value.trim();
  const taskType = typeInput.value;

  if (taskTitle && taskType) {
    const newTask = {
      title: taskTitle,
      type: taskType,
    };

    tasks.push(newTask);

    renderElements(tasks);

    titleInput.value = "";
    typeInput.value = "";
  } else {
    alert("Por favor, preencha todos os campos antes de adicionar a tarefa.");
  }
}

const addButton = document.querySelector(".form__button--add-task");
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
});

renderElements(tasks);
