const clapButton = document.getElementById('clap-button');


clapButton.addEventListener('click', switchBackground);


function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


function switchBackground() {
  const backgroundColor = randomColor();
  const header = document.querySelector('header');
  if (header) {
    header.style.background = backgroundColor;
  }
}