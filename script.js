const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Chapter directory selector: navigate only after the reader activates the Go button.
const chapterSelector = document.querySelector('#chapter-selector');
const chapterSelectorGo = document.querySelector('#chapter-selector-go');
if (chapterSelector && chapterSelectorGo) {
  chapterSelectorGo.addEventListener('click', () => {
    const destination = chapterSelector.value;
    if (!destination) return;
    if (destination.startsWith('#')) {
      const target = document.querySelector(destination);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.location.hash = destination;
    } else {
      window.location.href = destination;
    }
  });
  chapterSelector.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') chapterSelectorGo.click();
  });
}
