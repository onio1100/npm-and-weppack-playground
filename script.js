const frame = document.querySelector(".frame");
import { RandomPicture } from "random-picture";
// const { RandomPicture } = require("random-picture");
const img = document.querySelector("img");
const image = RandomPicture()


function changePicture(){
    img.src = image.url;
    console.log("chuj");
}

frame.addEventListener("click",changePicture);