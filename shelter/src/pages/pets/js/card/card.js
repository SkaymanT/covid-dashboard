export class Card {
  constructor() {}

  createCard(url, name, classes) {
    this.card = this.createDomNode(this.card, 'div', 'card', classes);
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

    this.appendCardElement();
    return this.card;
  }

  appendCardElement() {
    this.card.append(this.img);
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
