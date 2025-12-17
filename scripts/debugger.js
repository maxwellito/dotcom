const onDebugCallbacks = [];
const labels = [];
let lastPressedKey;

const debugEl = document.createElement('div');
debugEl.style.position = 'fixed';
debugEl.style.top = '8px';
debugEl.style.left = '8px';
debugEl.innerText = 'debugtool';
debugEl.appendChild(document.createElement('br'));

function triggerDebuggerListener (e) {
  if (lastPressedKey === 'Escape' && e.key === 'Escape') {
    startDebugging();
  }
  lastPressedKey = e.key;
}

function startDebugging () {
  console.log('DEBUGGING STARTS');
  window.removeEventListener('keydown', triggerDebuggerListener);
  document.body.appendChild(debugEl);
  onDebugCallbacks.forEach(l => l());
}

export function whenDebuggingStarts (listener) {
  onDebugCallbacks.push(listener);
}

export function logValue (label, value) {
  if (!labels[label]) {
    const labelEl = document.createElement('span');
    const valueEl = document.createElement('span');
    labelEl.innerText = label + ': ';
    debugEl.appendChild(labelEl);
    debugEl.appendChild(valueEl);
    debugEl.appendChild(document.createElement('br'));
    labels[label] = valueEl;
  }
  labels[label].innerText = value;
}

window.addEventListener('keydown', triggerDebuggerListener);
