const frame = document.querySelector(".frame");
const img = document.querySelector("img");
const randomImage = require("cool-images");


function changePicture(){
    let newImage = randomImage.one();
    img.src = newImage;
}



frame.addEventListener("click", changePicture);