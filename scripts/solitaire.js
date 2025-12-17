function solitaire(el, opt) {
  const options = {
    height: 400,
    xMove: 6,
    direction: 1,
    xToRad: Math.PI*2,
    x: 0,
    length: 200,
    ...opt
  };

  el.style.position = 'relative';

  renderFrame(el, options);
}

function renderFrame(el, opt) {
  const shadows = [];
  let offsetX = 0,
    offsetY = 0;
  for (let i=opt.x; i > 0; i--) {
    const x = i * opt.direction * opt.xMove;
    const yPercent = (1 - Math.abs(Math.cos(i / opt.xToRad))) * (1 - (i / opt.length)) + (i / opt.length);
    const y = Math.round(yPercent * opt.height);
    if (i < opt.x) {
      shadows.push(`${x-offsetX}px ${y-offsetY}px white,
        ${x-offsetX-2}px ${y-offsetY-2}px black,
        ${x-offsetX-2}px ${y-offsetY+2}px black,
        ${x-offsetX+2}px ${y-offsetY-2}px black,
        ${x-offsetX+2}px ${y-offsetY+2}px black`);
    } else {
      el.style.top = `${y}px`;
      el.style.left = `${x}px`;
      offsetX = x;
      offsetY = y;
    }
  }
  el.style.boxShadow = shadows.join(',');

  if (opt.x < 200) {
    opt.x++;
    requestAnimationFrame(()=>{
      renderFrame(el, opt) 
    });
  }
}

function start(letter) {
  const el = document.querySelector('.item-'+letter);
  const rect = el.getBoundingClientRect();
  const height = window.innerHeight - rect.y - rect.height;
  console.log(height, window.innerHeight, rect.y, rect.height);
  if (letter==='a'){
    solitaire(el, {height});
  } else {
    solitaire(el, {
      xMove: 8,
      direction: -1,
      xToRad: Math.PI*4,
      x: 0,
      length: 200,
      height
    });
  }
}