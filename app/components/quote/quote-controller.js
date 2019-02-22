import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
    console.log('THE QUOTE READS:', _qs.Quote);
    document.querySelector('#quote').innerHTML = _qs.Quote.getTemplate()
}

export default class QuoteController {

    constructor() {
        _qs.addSubscriber('quote', drawQuote);
        _qs.getQuote();
    }

}
