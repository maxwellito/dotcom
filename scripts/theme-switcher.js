import {logValue} from './debugger.js';

const sections = [];


// Start the magic
window.addEventListener('load', () => {
  document
    .querySelectorAll('.grid')
    .forEach(gridEl => {
      const theme = {
        fgColor: gridEl.getAttribute('data-fg'),
        bgColor: gridEl.getAttribute('data-bg')
      };
      sections.push({
        el: gridEl,
        theme
      })
    });
  scrollListener();
  console.log('Sections loaded', sections);
});

// Start the magic
window.addEventListener('resize', () => {
  sections.forEach(section => {
    section.y = section.el.getBoundingClientRect
  })
});


let sectionInViewport = null;
const scrollListener = () => {
  const y = window.scrollY + window.innerHeight / 2;
  let currentSection = null;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (section.el.offsetTop - y < 0) {
      currentSection = section;
    }
  }

  logValue('Y___________', y);
  logValue('INNER_HEIGHT', window.innerHeight);
  logValue('OFFSET______', currentSection?.el.offsetTop);

  if (sectionInViewport !== currentSection) {
    console.log('New contestant', currentSection.theme.fgColor, currentSection.theme.bgColor);
    sectionInViewport = currentSection;
    document.documentElement.style.setProperty('--color-fg', currentSection.theme.fgColor);
    document.documentElement.style.setProperty('--color-bg', currentSection.theme.bgColor);
  }
};
window.addEventListener('scroll', scrollListener);

