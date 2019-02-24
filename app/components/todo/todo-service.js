import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/ryan/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}

let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	// Get data!
	getTodos() {
		console.log("Getting the To-do List")
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(t => new Todo(t))
				_setState('todos', data)
			})
	}

	// Post data!
	addTodo(todo) {
		let newTodo = new Todo(todo)
		todoApi.post('', newTodo)
			.then(res => {
				this.getTodos()
			})
	}

	// Edit data!
	completeTodo(todoId) {
		todoApi.put(newData.todoId, newData)
			.then(res => {
				console.log(res.data)
				this.getTodos();
			})
			.catch(err => {
				console.error(err)
			})
	}

	// Delete data!
	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				console.log(res.data)
				this.getTodos();
			})
			.catch(err => {
				console.error(err)
			})
	}

}
