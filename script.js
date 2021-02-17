const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 5;

// to get a Random Number :
function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

// to get a Random Size :
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

// to Creat img element and append it to the container :
for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
}

