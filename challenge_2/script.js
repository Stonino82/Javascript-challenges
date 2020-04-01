function generateCat() {
    var image = document.createElement('img');
    image.src= 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';   //set the link to the images to the source

    var div = document.getElementById('container');
    div.appendChild(image);
}