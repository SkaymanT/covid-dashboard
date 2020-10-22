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
    this.modalCloseBtn.innerText = 'x';

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
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(event) {
    let classes = event.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      if (document.querySelector('.overlay') !== null) {
        document.querySelector('.overlay').remove();
      }
    }
  }
}
