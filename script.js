const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = []; //"let" bc array will be changing

//Unsplash API
const count = 10;
const apiKey = "n3hXl8XvaH1D-33CNsa0jZMcC5rBWMT4ZlF93B1N7lI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Create Elements for Links and Photos, Add to DOM
function displayPhotos() {
  //run function for each object in photosArray
  photosArray.forEach((photo) => {
    //Create <a> to link to UnSplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    //create image for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    //put img inside <a>, put <a> inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photoes from API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //Catch error here
  }
}

//on Load
getPhotos();
