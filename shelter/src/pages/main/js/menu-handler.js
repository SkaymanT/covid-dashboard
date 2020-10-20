export default function menuClickHandler() {
  document.querySelector('.header__menu').addEventListener('click', (event) => {
    console.log('sss');
    const el = event.target.closest('.menu__items__item');
    if (el) {
      const functionName = el.dataset.handler;
      if (functionName === CURRENT_STATE.page) {
        return;
      }
      if (functionName !== undefined) {
        hideMain(true);
        document.body.addEventListener(
          'transitionend',
          () => {
            clearBodyClasses();
            regenerateMainContainer();
            menuHandlers[functionName](loginResponse);
            CURRENT_STATE.page = functionName;
            hideMain(false);
          },
          {
            once: true,
          }
        );
      }
    }
  });
}
