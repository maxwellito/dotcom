import {whenDebuggingStarts} from './debugger.js';

let currentElement = null;
let debugIsMoving = true;

const clickListener = evt => {
  if (currentElement) {
    currentElement.style.outline = '';
  }
  currentElement = evt.currentTarget
  currentElement.style.outline = '2px solid green';
  debugIsMoving = true;

  evt.preventDefault();
  evt.stopPropagation();
}

const updateItem = (offsetX, offsetY, prefix) => {
  prefix = prefix || getComputedStyle(document.documentElement).getPropertyValue('--layout-name');
  const originalClasses = currentElement.className.split(' ').filter(e => e.startsWith(prefix));
  let x      = parseInt(originalClasses.find(e => e.includes('-x-'))?.split('-x-')[1]) || 1;
  let y      = parseInt(originalClasses.find(e => e.includes('-y-'))?.split('-y-')[1]) || 1;
  let width  = parseInt(originalClasses.find(e => e.includes('-width-'))?.split('-width-')[1]) || 1;
  let height = parseInt(originalClasses.find(e => e.includes('-height-'))?.split('-height-')[1]) || 1;

  currentElement.classList.remove(...originalClasses);
  let newClasses = [];
  if (debugIsMoving) {
    x = Math.max(1, x + offsetX);
    y = Math.max(1, y + offsetY);
  } else {
    width = Math.max(1, width + offsetX);
    height = Math.max(1, height + offsetY);
  }

  currentElement.classList.add(
    prefix + '-x-' + (x),
    prefix + '-y-' + (y),
    prefix + '-width-' + (width),
    prefix + '-height-' + (height),
  );
  console.log({
    x,
    y,
    width,
    height
  });
}

const keyboardListener = e => {
  let killEvent = true;
  switch(e.key) {
    case " ":
      debugIsMoving = !debugIsMoving;
      currentElement.style.outlineColor = debugIsMoving ? 'green' : 'red';
      break;
    case "ArrowUp":
      updateItem(0, -1);
      break;
    case "ArrowDown":
      updateItem(0, 1);
      break;
    case "ArrowLeft":
      updateItem(-1, 0);
      break;
    case "ArrowRight":
      updateItem(1, 0);
      break;
    default:
      killEvent = false;
  }

  if (killEvent) { 
    e.preventDefault();
    e.stopPropagation();
  }
};

whenDebuggingStarts(() => {
  window.addEventListener('keydown', keyboardListener);
  document
    .querySelectorAll('.grid > *')
    .forEach(el => {
      el.addEventListener('click', clickListener);
    });
});