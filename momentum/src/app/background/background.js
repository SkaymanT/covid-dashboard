let iconBackground = document.querySelector('.icon__background');
let iconBackgroundSvg = document.querySelector('.icon__background__svg');

iconBackground.addEventListener('click', (event) => {
  if (
    event.target === iconBackground ||
    iconBackground.contains(event.target)
  ) {
    event.preventDefault();
    if (iconBackgroundSvg.classList.contains('icon__rotate-in-process')) return;

    counter++;
    setBackground(counter);

    iconBackgroundSvg.classList.add('icon__rotate-in-process');
    setTimeout(() => {
      iconBackgroundSvg.classList.remove('icon__rotate-in-process');
    }, 800);
  }
});
