const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')
const table = taskList.parentNode

taskForm.addEventListener('submit', e => {
    e.preventDefault()

    if (!table.classList.contains('table--active')) {
        table.classList.add('table--active')
    }
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
    taskList.deleteRow(row.rowIndex - 1)
    if (taskList.rows.length == 0) {
        table.classList.remove('table--active')
    }
    return showTable()
}
