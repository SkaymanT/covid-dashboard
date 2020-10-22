import Modal from '../modal/modal';

export class CardModal extends Modal {
  constructor(classes, { name }) {
    super(classes);
    this.name = name;
  }

  generateContentCardModal() {
    let content = super.createDomNode(this.modal, 'div', 'test');
    return content;
  }

  renderModal() {
    let content = this.generateContentCardModal();
    super.createModal(content);
  }
}
