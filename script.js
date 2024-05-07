let jokeOutput = document.getElementById('jokeOutput');

fetch('https://official-joke-api.appspot.com/random_joke')
.then(response => response.json())
.then(data => {
    console.log(data);
    jokeOutput.innerHTML = `${data.setup} <br> ${data.punchline}`;
});

let images = ['BG_1.png', 'BG_2.png', 'BG_3.png', 'BG_4.png', 'BG_5.png'];
let lastImageIndex;

let leftSide = document.getElementById('left');
let bgc = document.getElementById('bgc');

if (localStorage.getItem('lastImageIndex')) {
    lastImageIndex = parseInt(localStorage.getItem('lastImageIndex'));
} else {
    lastImageIndex = 0;
}
document.body.style.background = `url(\'${images[lastImageIndex]}\')`;

function changeBGImage() {
    let i = Math.floor(Math.random() * images.length);
    document.body.style.background = `url(\'${images[i]}\')`;

    localStorage.setItem('lastImageIndex', i);
}
function setLightTheme() {
    leftSide.style.backgroundColor = '#fff';

    document.body.style.color = 'black';
}
function setDarkTheme() {
    leftSide.style.backgroundColor = '#282b30';

    document.body.style.color = '#fff';
}
function setBGColor() {
    document.body.style.background = bgc.value;
}


function dodajKomentarz() {
    var chatDiv = document.getElementById('chat');
    chatDiv.innerHTML = '';

    var scriptElement = document.createElement('script');
    scriptElement.src = "https://giscus.app/client.js";
    scriptElement.dataset.repo = "user908812/Chat";
    scriptElement.dataset.repoId = "R_kgDOL4LeXw";
    scriptElement.dataset.category = "General";
    scriptElement.dataset.categoryId = "DIC_kwDOL4LeX84CfMRf";
    scriptElement.dataset.mapping = "pathname";
    scriptElement.dataset.strict = "0";
    scriptElement.dataset.reactionsEnabled = "1";
    scriptElement.dataset.emitMetadata = "0";
    scriptElement.dataset.inputPosition = "bottom";
    scriptElement.dataset.theme = "dark_dimmed";
    scriptElement.dataset.lang = "pl";
    scriptElement.crossorigin = "anonymous";
    scriptElement.async = true;
    
    chatDiv.appendChild(scriptElement);

    chatDiv.removeEventListener('DOMNodeInserted', dodajKomentarz);
}
document.body.addEventListener('keydown', (e) => {
    document.getElementById('chat').addEventListener('DOMNodeInserted', dodajKomentarz);
});