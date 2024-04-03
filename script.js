const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = []; //"let" bc array will be changing

//Unsplash API
const count = 30;
const apiKey = "n3hXl8XvaH1D-33CNsa0jZMcC5rBWMT4ZlF93B1N7lI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Check if images were loaded
function imageLoaded() {
    console.log('image loaded');
}


//Helper function to set Attribute on DOM Elements
function setAttributes(element,attributes) {
    for (const key in attributes) {
        element.setAttribute(key,attributes[key])
    }
}

//Create Elements for Links and Photos, Add to DOM
function displayPhotos() {
  //run function for each object in photosArray
  photosArray.forEach((photo) => {
    //Create <a> to link to UnSplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
    });

    //create image for photo
    const img = document.createElement('img');
    setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
    });
    // Event Listener, check when each img is finished loading
    img.addEventListener('load', imageLoaded);

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

//Check if scrolling is near the bottom of the page, Load more photoes
window.addEventListener('scroll', () =>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000)
    {
        getPhotos();
        console.log('load more');
    }
});

//on Load
getPhotos();
