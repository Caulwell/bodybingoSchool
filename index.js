const words = [
    {"word": "head", "image": "./images/head.png"},
    {"word": "eyes", "image": "./images/eyes.jfif"},
    {"word": "nose", "image": "./images/nose.jfif"},
    {"word": "shoulders", "image": "./images/shoulders.jpg"},
    {"word": "chest", "image": "./images/chest.png"},
    {"word": "ankles", "image": "./images/ankles.png"},
    {"word": "wrists", "image": "./images/wrists.jfif"},
    {"word": "fingers", "image": "./images/fingers.jfif"},
    {"word": "stomach", "image": "./images/stomach.png"},
    {"word": "back", "image": "./images/back.png"},
    {"word": "elbows", "image": "./images/elbows.jpg"},
    {"word": "arms", "image": "./images/arms.png"},
    {"word": "mouth", "image": "./images/mouth.png"},
    {"word": "ears", "image": "./images/ears.png"},
    {"word": "knees", "image": "./images/knees.png"},
    {"word": "legs", "image": "./images/legs.jfif"},
    {"word": "eyebrows", "image": "./images/eyebrows.jfif"},
    {"word": "feet", "image": "./images/feet.jfif"},
    {"word": "toes", "image": "./images/toes.png"},
    {"word": "neck", "image": "./images/neck.jfif"},
];

let viewWordsButton = document.getElementsByClassName("view-words-button")[0];
let wordGeneratorButton = document.getElementsByClassName("generate-word-button")[0];
let prevWordsButton = document.getElementsByClassName("prev-words-button")[0];
let playAgainButton = document.getElementsByClassName("play-again-button")[0];

let viewWordsPanel = document.getElementsByClassName("view-words")[0];
let wordGeneratorPanel = document.getElementsByClassName("word-generator")[0];
let wordImageContainer = document.getElementsByClassName("word-image")[0];
let wordWordContainer = document.getElementsByClassName("word-word")[0];

let wordList = document.getElementsByClassName("word-list")[0];
let modal = document.getElementsByClassName("modal")[0];

// hide panel
viewWordsPanel.style.display = "none";
wordList.style.display = "none";
modal.style.display = "none";

// add words to panel
words.forEach(word => {

    let div = document.createElement("div");
    let text = document.createElement("h4");
    let image = document.createElement("img");

    div.className = "view-word-word";
    text.className = "view-word-text";
    image.className = "view-word-image";

    image.src = word.image;
    text.innerText = word.word;

    div.appendChild(image);
    div.appendChild(text);

    viewWordsPanel.appendChild(div);
});

viewWordsButton.addEventListener("click", () => {
    if(viewWordsPanel.style.display === "none"){
        viewWordsPanel.style.display = "grid";
        wordGeneratorPanel.style.display = "none";
    } else {
        viewWordsPanel.style.display = "none";
        wordGeneratorPanel.style.display = "flex";
    }
});

prevWordsButton.addEventListener("click", () => {
    if(wordList.style.display === "none"){
        wordList.style.display = "flex";
    } else {
        wordList.style.display = "none";
    }
});

let wordsLeft = [...words];

let getRandomWord = () => {
    let word = wordsLeft.splice(Math.floor(Math.random()*wordsLeft.length), 1);

    word = word[0];
    let first = word.word.charAt(0).toUpperCase()
    let rest = word.word.slice(1);

    word.word = first + rest;

    return word;
};
let finished = () => {
    modal.style.display = "flex";
};



wordGeneratorButton.addEventListener("click", () => {

    if(wordGeneratorPanel.style.display === "none"){
        wordGeneratorPanel.style.display = "flex";
        viewWordsPanel.style.display = "none";
    }

    let word = getRandomWord();

    if(!word){
        finished();
    }

    let element = document.createElement("h4");
    element.innerText = word.word;
    wordWordContainer.innerHTML = "";
    wordWordContainer.appendChild(element);

    let image = document.createElement("img");
    image.src = word.image;
    wordImageContainer.innerHTML = "";
    wordImageContainer.appendChild(image);

    let wordListElement = document.createElement("h5");
    wordListElement.innerText = word.word;
    wordList.appendChild(wordListElement);

});

playAgainButton.addEventListener("click", () => {
    modal.style.display = "none";
    wordsLeft = [...words];

    wordWordContainer.innerHTML = "";
    wordImageContainer.innerHTML = "";

    let title = wordList.childNodes[0];
    console.log(title);
    wordList.innerHTML = "";
    wordList.appendChild(title);
});

