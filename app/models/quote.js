export default class Quote {
    constructor(data) {
        console.log('[RAW QUOTE API DATA]', data)
        this.quote = data.quote.body
        this.author = data.quote.author        
    }

    getTemplate() {
    
    let date = new Date();
    
        return `
        <h5>"${this.quote}"</h5>
        <p>- ${this.author}</p>        
        `
    }
}