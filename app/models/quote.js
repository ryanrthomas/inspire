export default class Quote {
    constructor(data) {
        console.log('[RAW QUOTE API DATA]', data)
        this.quote = data.quote.body
        this.author = data.quote.author        
    }

    getTemplate() {
        return `
        <h3>"${this.quote}"</h3>
        <h5>${this.author}</h5>
        `
    }
}