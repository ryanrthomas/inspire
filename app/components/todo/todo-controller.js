import TodoService from "./todo-service.js";

const _tds = new TodoService()

function _drawTodos() {
	console.log("LISTING ALL TO-DOS.")
	let template = ''
	_tds.Todos.forEach(t => {
		template += `
		<li>${t.description} <i class="fas fa-check-square"></i> <i onclick="app.controllers.todoController.removeTodo('${t._id}')" class="fas fa-trash-alt"></i></li>
		
		`
	})
	document.querySelector('#todos').innerHTML = template;
}

function _drawError() {
	console.error('[TODO ERROR]', _tds.TodoError)
	//document.querySelector('#todo-error').textContent = `${_tds.TodoError.message}`
}

export default class TodoController {
	constructor() {
		_tds.addSubscriber('todos', _drawTodos)
		_tds.addSubscriber('error', _drawError)
		_tds.getTodos()
	}

	// Create To-do
	addTodo(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			description: form.description.value
		}
		_tds.addTodo(todo)
		// Clears the form
		form.reset();
	}

	// Get one to-do
	getTodos(todoId) {
		_tds.getTodos(todoId)
	}

	// Get all to-dos by user
	toggleTodoStatus(todoId) {
		_tds.toggleTodoStatus(todoId)
	}

	// Edit To-do at Id
	toggleTodoStatus(todoId) {
		_tds.toggleTodoStatus(todoId)
	}

	// Delete To-do by Id
	removeTodo(todoId) {
		_tds.removeTodo(todoId)
	}

}




{
    description: ""
}