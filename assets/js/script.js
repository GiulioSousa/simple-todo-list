const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

taskForm.addEventListener('submit', e => {
    e.preventDefault()

    const data = getFormData(taskForm)
    const newRow = taskList.insertRow()

    newRow.innerHTML = `
                <td>${data.date}</td>
                <td>${data.description}</td>
                <td>${data.status}</td>
                <td>
                    <button class="btn-delete" onclick="deleteTask(this)">Excluir</button>
                </td>
            `
    taskForm.date.value = ''
    taskForm.description.value = ''
    taskForm.status.value = 'Em Andamento'
}) 

function getFormData(formData) {
    let task = {
        date: formatDate(formData.date.value),
        description: formData.description.value,
        status: formData.status.value
    }

    return task
}

function formatDate (date) {
    const arrayDate = date.split('-')
    const formattedDate = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`
    return formattedDate
}

function deleteTask(button) {
    const row = button.parentNode.parentNode
    return taskList.deleteRow(row.rowIndex - 1)
}