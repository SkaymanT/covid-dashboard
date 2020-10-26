function dontScroll() {
  document.querySelector('body').classList.add('no-scroll');
}

function doScroll() {
  document.querySelector('body').classList.remove('no-scroll');
}

export { dontScroll, doScroll };
