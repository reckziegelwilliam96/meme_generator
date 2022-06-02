document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".form");
    // const memeGallery = document.querySelector("memeGallery");
    // const image = document.getElementsByTagName("img");


form.addEventListener("submit", function(event){
    event.preventDefault();

    //create divs to append to gallery
    const galleryList = document.createElement("li");
    const meme = document.createElement("div");
    const topText = document.createElement("div");
    const bottomText = document.createElement("div");
    const image = document.createElement("img") ;

    //create button to remove memes
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "REMOVE";

    //get URL from form
    image.src = document.getElementById("image-url").value;
    image.setAttribute("class", "image");

    //get text inputs from form
    topText.classList.add("topText");
    topText.innerHTML = document.getElementById("topText").value;
    bottomText.classList.add("bottomText");
    bottomText.innerHTML = document.getElementById("bottomText").value;

    //create Meme
    meme.classList.add("meme");
    meme.appendChild(topText);
    meme.appendChild(bottomText);
    meme.appendChild(image);
    meme.appendChild(button);

    //attach Meme to Gallery
    const memeGallery = document.getElementById("memeGallery");
    memeGallery.setAttribute("class", "memeGallery");
    galleryList.appendChild(meme);
    memeGallery.appendChild(galleryList);

    //reset form values
    document.getElementById('image-url').value = "";
    document.getElementById('topText').value = "";
    document.getElementById('bottomText').value = "";

    button.addEventListener('click', function(event){
        galleryList.remove();
    })
})

})

