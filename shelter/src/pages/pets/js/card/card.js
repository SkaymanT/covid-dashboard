export class Card {
  constructor() {}

  createCard(url, name) {
    this.card = this.createDomNode(
      this.card,
      'div',
      'pets__slider_card',
      'card'
    );
    this.card.id = name;

    this.img = this.createDomNode(this.img, 'img', 'card_image');
    this.img.src = url;
    this.img.alt = name;

    this.nameParagraph = this.createDomNode(
      this.nameParagraph,
      'p',
      'card_name'
    );
    this.nameParagraph.innerText = name;

    this.cardButton = this.createDomNode(this.cardButton, 'div', 'card_button');

    this.button = this.createDomNode(this.button, 'button', 'button_secondary');
    this.button.innerText = 'Learn more';

    appendCardElement();
    bindEvents();
    return card;
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  appendCardElement() {
    this.card.append(img);
    this.card.append(this.nameParagraph);
    this.card.append(this.cardButton);
    this.cardButton.append(this.button);
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
}
