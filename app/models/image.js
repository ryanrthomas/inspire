export default class Image {
    constructor(data) {
        console.log('[RAW IMAGE API DATA]', data);
        this.url = data.large_url
    }

    getTemplate() {
        return `
        <img src=${this.url}>
        `
    }
}