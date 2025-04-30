
// Change text content
document.getElementById('changeTextBtn').addEventListener('click', () => {
  const intro = document.getElementById('intro');
  intro.textContent = 'The text has been changed dynamically!';
});

// Toggle CSS style
document.getElementById('toggleStyleBtn').addEventListener('click', () => {
  const title = document.getElementById('title');
  title.classList.toggle('highlight');
});

// Add or remove element
document.getElementById('addRemoveBtn').addEventListener('click', () => {
  const existing = document.getElementById('newElement');
  if (existing) {
    existing.remove();
  } else {
    const newPara = document.createElement('p');
    newPara.id = 'newElement';
    newPara.textContent = 'This paragraph was added with JavaScript!';
    document.querySelector('article').appendChild(newPara);
  }
});
