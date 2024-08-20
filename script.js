document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = createTaskItem(taskText);

    document.getElementById('pendingTasks').appendChild(taskItem);
    taskInput.value = '';
}

function createTaskItem(taskText) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', () => editTask(li));
    li.appendChild(editButton);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-button';
    completeButton.addEventListener('click', () => completeTask(li));
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => deleteTask(li));
    li.appendChild(deleteButton);

    return li;
}

function editTask(taskItem) {
    const newTaskText = prompt('Edit your task:', taskItem.querySelector('span').textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span').textContent = newTaskText.trim();
    }
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    document.getElementById('completedTasks').appendChild(taskItem);
    taskItem.querySelector('.complete-button').remove();
}

function deleteTask(taskItem) {
    taskItem.remove();
}
