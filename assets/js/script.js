const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('task-date').value;
    const description = document.getElementById('task-description').value;
    const status = document.getElementById('task-status').value;

    const newRow = taskList.insertRow();
    newRow.innerHTML = `
                <td>${date}</td>
                <td>${description}</td>
                <td>${status}</td>
                <td>
                    <button class="btn-delete" onclick="deleteTask(this)">Excluir</button>
                </td>
            `;

    document.getElementById('task-date').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-status').value = 'Em Andamento';
});

function deleteTask(button) {
    const row = button.parentNode.parentNode;
    taskList.deleteRow(row.rowIndex);
}