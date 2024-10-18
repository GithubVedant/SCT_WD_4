document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    
    if (taskTitle === "") {
        alert("Please enter a task title");
        return;
    }

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = `<strong>${taskTitle}</strong><br><small>Due: ${taskDueDate}</small>`;

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(taskItem));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => taskItem.remove());

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskDetails);
    taskItem.appendChild(taskActions);
    document.getElementById('taskList').appendChild(taskItem);

    // Clear input fields
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDueDate').value = '';
}

function editTask(taskItem) {
    const taskDetails = taskItem.querySelector('.task-details');
    const currentTitle = taskDetails.querySelector('strong').textContent;
    const currentDueDate = taskDetails.querySelector('small').textContent.replace('Due: ', '');

    // Create input fields for editing
    const newTitle = prompt("Edit Task Title:", currentTitle);
    const newDueDate = prompt("Edit Due Date (YYYY-MM-DDTHH:MM):", currentDueDate);

    if (newTitle !== null && newTitle !== "") {
        taskDetails.querySelector('strong').textContent = newTitle;
    }
    if (newDueDate !== null && newDueDate !== "") {
        taskDetails.querySelector('small').textContent = `Due: ${newDueDate}`;
    }
}