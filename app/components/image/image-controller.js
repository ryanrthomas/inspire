import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log("THE IMAGE DISPLAYS:", _is.Image)
    // Display background image
    document.querySelector('body').style.backgroundImage = `url(${_is.Image.url})`
    var hours = date.getHours();

    // Change greeting based on time of day
    if (hours >= 4 && hours < 12) {
        document.querySelector('#greeting').innerHTML = `<h1>Good morning, Ryan!</h1>`
    } else if (hours >= 12 && hours < 17) {
        document.querySelector('#greeting').innerHTML = `<h1>Good afternoon, Ryan!</h1>`
    } else {
        document.querySelector('#greeting').innerHTML = `<h1>Good evening, Ryan!</h1>`
    }
 
    //
    document.querySelector('#time').innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    document.querySelector('#date').innerHTML = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export default class ImageController {
    constructor() {
        _is.addSubscriber('image', drawImage)
        _is.getImage();
    }

}