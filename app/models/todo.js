export default class Todo {
    constructor(data) {
        this.description = data.description
        this._id = data._id;
    }

}

    
// getTemplate() {
//     return `
//     <h1>Add new to-do</h1>
//     <h1>${this.description}</h1>
//     `
// }