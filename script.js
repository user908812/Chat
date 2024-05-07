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
let loopScript = document.getElementById('loopScript');
setInterval(() => { loopScript }, 0);