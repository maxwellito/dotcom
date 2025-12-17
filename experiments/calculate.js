function detectWin(history) {

  positions = []

  // Vertical
  for (let line = 0; line < 3; line++) {
    let val = history[0][line];
    positions = [[0,line]];
    for (let row = 1; row < 3; row++) {
      val = val === history[row][line] ? val : null;
      positions.push([row,line]);
    }
    if (val !== null) {
      return [val, positions];
    }
  }

  // Horizontal
  for (let row = 0; row < 3; row++) {
    let val = history[row][0];
    positions = [[row, 0]];
    for (let line = 1; line < 3; line++) {
      val = val === history[row][line] ? val : null;
      positions.push([row,line]);
    }
    if (val !== null) {
      return [val, positions];
    }
  }

  // Diagonal 1
  for (let line = 0; line < 3; line++) {
    let val = history[0][line];
    positions = [[0,line]];
    for (let row = 1; row < 3; row++) {
      val = val === history[row][(line+row)%3] ? val : null;
      positions.push([row,(line+row)%3]);
    }
    if (val !== null) {
      return [val, positions];
    }
  }

  // Diagonal 2
  for (let row = 0; row < 3; row++) {
    let val = history[row][0];
    positions = [[row, 0]];
    for (let line = 1; line < 3; line++) {
      val = val === history[(row-line+3)%3][line] ? val : null;
      positions.push([(row-line+3)%3,line]);
    }
    if (val !== null) {
      return [val, positions];
    }
  }
}

function testGrid (raw) {
  return detectWin([raw.slice(0,3), raw.slice(3,6), raw.slice(6,9)])
}

function enterTheLoop(raw, symbolToPlay, count = 0) {
  for (let i = 0; i<9; i++) {
    if (raw[i] !== null) {
      continue;
    }
    const newgrid = [...raw];
    newgrid[i] = symbolToPlay;
    const result = testGrid(newgrid);

    if (result) {
      attemptLog[count+1] += 1;
      output.set(symbolToPlay, output.get(symbolToPlay)+1);
    } else {
      enterTheLoop(newgrid, symbolToPlay === 'cross' ? 'circle' : 'cross', count+1)
    }
  }
}


const history = [null, null, null,null, null, null,null, null, null];
const attemptLog =  [0, 0, 0,0, 0, 0,0, 0, 0, 0];
const output = new Map();
output.set('circle', 0);
output.set('cross', 0);

enterTheLoop(history, 'cross');

console.log(output);
console.log(attemptLog)

