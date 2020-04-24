// variables
const createMeme = document.getElementById('create');
const allMemes = document.getElementById('allMemes');
const memeForm = document.getElementById('form');
let imageURL = document.getElementById('imageURL');
let textOnTop = document.getElementById('textOnTop');
let textOnBottom = document.getElementById('textOnBottom');

// logic to add new meme & clear form
createMeme.addEventListener('submit', function(e){
    // prevent submit from leaving page
    e.preventDefault();

    // create new variables to be added
    let newMeme = document.createElement('div');
    let top = document.createElement('div');
    let bottom = document.createElement('div');
    let newURL = `url(${imageURL.value})`; 
    let newTopText = textOnTop.value;
    let newBottomText = textOnBottom.value;

    // add memeCard class to newMeme variable
    newMeme.classList = "memeCard"
    // add background image
    newMeme.style.backgroundImage = newURL;
    // add top class to top variable
    top.classList = "top"; 
    // add top text top variable
    top.innerText = newTopText;
    // add bottom class to bottom variable
    bottom.classList = "bottom"; 
    // add bottom text to bottom variable
    bottom.innerText = newBottomText;
    //add top to div to newMeme variable
    newMeme.append(top);
    // add bottom to div to newMeme variable
    newMeme.append(bottom);

    // add newMeme to memes div currently on webpage
    allMemes.append(newMeme);
    
    // clear form
    memeForm.reset();
});



// logic to remove meme from page when clicked delete image
allMemes.addEventListener('click', function(e){
    let clickedItem = e.target;
    clickedItem.remove();
});

// logic to add x over image when move enters

// allMemes.addEventListener('mouseout', handleMouseEnter);
allMemes.addEventListener('mouseover', function (e){
    let mouseOver = e.target;
    mouseOver.classList.add('hover');
});

// // logic to remove x over image when move leavess
allMemes.addEventListener('mouseout', function(e){
    let mouseOut = e.target;
    mouseOut.classList.remove('hover');
});
