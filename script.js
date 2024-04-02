
//Unsplash API
const count = 10;
const apiKey = 'n3hXl8XvaH1D-33CNsa0jZMcC5rBWMT4ZlF93B1N7lI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photoes from API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        //Catch error here
    }
}

//on Load
getPhotos();