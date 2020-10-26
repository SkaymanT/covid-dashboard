import { dontScroll, doScroll } from '../common';

export class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  createModal(content) {
    this.overlay = this.createDomNode(
      this.overlay,
      'div',
      'overlay',
      'overlay_modal'
    );
    this.modal = this.createDomNode(this.modal, 'div', this.classes);
    this.modalContent = this.createDomNode(
      this.modalContent,
      'div',
      'modal__content'
    );
    this.modalCloseBtn = this.createDomNode(
      this.modalCloseBtn,
      'div',
      'modal__close-icon'
    );
    this.modalCloseBtn.innerHTML =
      '<button class="button_close"><img src="./assets/icons/icon-close.svg" alt="close"></button>';

    this.setContent(content);
    this.appendModalElement();

    this.bindEvents();
    this.openModal();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.append(content);
    }
  }

  appendModalElement() {
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
    this.overlay.append(this.modalCloseBtn);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', (event) =>
      this.handlerCloseModal(event)
    );
    this.overlay.addEventListener('click', (event) =>
      this.handlerCloseModal(event)
    );
  }

  openModal() {
    document.body.append(this.overlay);
    dontScroll();
  }

  handlerCloseModal(event) {
    let classes = event.target.classList;
    if (
      classes.contains('overlay') ||
      (event.target.closest('.button_close') !== null &&
        event.target
          .closest('.button_close')
          .classList.contains('button_close'))
    ) {
      if (document.querySelector('.overlay') !== null) {
        this.closeModal();
      }
    }
  }
  closeModal() {
    document.querySelector('.overlay').remove();
    doScroll();
  }
}
