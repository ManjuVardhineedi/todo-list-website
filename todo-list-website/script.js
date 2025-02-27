 // Function to Add a Task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("⚠️ Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="button-group">
            <button class="edit" onclick="editTask(this)">✏️ Edit</button>
            <button class="delete" onclick="removeTask(this)">❌ Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// Function to Trigger Add Task on Enter Key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to Edit a Task
function editTask(button) {
    let taskItem = button.parentElement.parentElement;
    let taskText = taskItem.querySelector(".task-text");

    let newText = prompt("Edit your task:", taskText.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText.trim();
    }
}

// Function to Remove a Task
function removeTask(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
