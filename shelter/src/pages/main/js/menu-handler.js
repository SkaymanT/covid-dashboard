export default function menuClickHandler() {
  document.querySelector('.header__menu').addEventListener('click', (event) => {
    changeHeaderLogo();

    if (isBlurMenu(event)) {
      closeMenu();
    }
    if (isClickOnMenuItem(event)) {
      closeMenu();
      document.querySelector('.header').scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  });
}

const closeMenu = () => {
  document.getElementById('menu__toggle').checked = false;
  document.querySelector('.header_wrapper').classList.remove('open_menu');
};

const isBlurMenu = (event) => {
  return event.target.classList.contains('menu__container');
};

const changeHeaderLogo = () => {
  let isChecked = document.getElementById('menu__toggle').checked;
  if (isChecked) {
    document.querySelector('.header_wrapper').classList.add('open_menu');
  } else {
    document.querySelector('.header_wrapper').classList.remove('open_menu');
  }
};

const isClickOnMenuItem = (event) => {
  if (event.target.classList.length != 0) {
    const {
      classList,
      parentNode
    } = event.target;
    return (
      classList.length &&
      (classList.contains('active') || parentNode.classList.contains('active'))
    );
  }
};