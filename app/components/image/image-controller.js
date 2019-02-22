import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
    console.log("THE IMAGE DISPLAYS:", _is.Image)
}

export default class ImageController {
    constructor() {
        _is.addSubscriber('image', drawImage)
    }

}