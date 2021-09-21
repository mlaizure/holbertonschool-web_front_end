const changeMode = (size, weight, transform, background, color) => () => {
  document.body.style.fontSize = size;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
};

const main = () => {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const newParagraph = document.createElement('p');
  newParagraph.innerText = 'Welcome Holberton!';
  document.body.append(newParagraph);

  const spookyButton = document.createElement('button');
  spookyButton.innerHTML = 'Spooky';
  document.body.append(spookyButton);
  spookyButton.onclick = spooky;

  const darkModeButton = document.createElement('button');
  darkModeButton.innerHTML = 'Dark mode';
  document.body.append(darkModeButton);
  darkModeButton.onclick = darkMode;

  const screamModeButton = document.createElement('button');
  screamModeButton.innerHTML = 'Scream mode';
  document.body.append(screamModeButton);
  screamModeButton.onclick = screamMode;
};

main();
