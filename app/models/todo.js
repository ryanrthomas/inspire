export default class Todo {
    constructor(data) {
        this.description = data.description
    }
    
    getTemplate() {
        return `
        <h1>${this.description}</h1>
        `
    }
}