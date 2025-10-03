const taskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const tasks = [];

taskButton.addEventListener('click', () => {
  createTask();
});

taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    createTask();
  }
});

function createTask() {
  const taskText = taskInput.value.trim();

  if (taskText.length === 0) {
    alert('Você deve digitar alguma coisa');
    return;
  }
  tasks.push(taskText);
  updateTaskList();
  taskInput.value = '';
}

function createTaskElement(taskText) {
  const listItem = document.createElement('li');
  listItem.innerText = taskText;
  listItem.id = tasks.indexOf(taskText);
  return listItem;
}

function updateTaskList() {
  taskList.innerHTML = '';
  tasks.map((task) => taskList.appendChild(createTaskElement(task)));
}
