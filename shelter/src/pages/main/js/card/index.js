import renderModalWindow from '../modal';

export function addCardClickHandler() {
  document
    .querySelector('.card_button .button_secondary')
    .addEventListener('click', () => {
      generateCardModal();
    });
}

const generateCardModal = () => {
  renderModalWindow('Test content for Card Modal');
};
