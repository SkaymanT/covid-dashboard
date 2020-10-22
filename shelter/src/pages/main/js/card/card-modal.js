import { Modal } from '../modal';

export class CardModal extends Modal {
  constructor(classes, { name }) {
    super(classes);
    this.name = name;
  }

  generateContentCardModal() {
    let content = super.createDomNode(this.modal, 'div', 'test');
    console.log(this.name);
    return content;
  }

  renderCardModal() {
    let content = this.generateContentCardModal();
    super.createModal(content);
  }
}
