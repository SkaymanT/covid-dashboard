import { Modal } from '../modal';

export class CardModal extends Modal {
  constructor(classes, { name }) {
    super(classes);
    this.name = name;
  }

  generateContentCardModal() {
    this.content = super.createDomNode(this.modal, 'div', 'card-modal-content');

    this.imgCardModal = super.createDomNode(
      this.imgCardModal,
      'img',
      'card-modal-img'
    );
    this.imgCardModal.src = './assets/images/about-pets.png';
    this.imgCardModal.alt = 'test';

    this.infoCardModal = super.createDomNode(
      this.infoCardModal,
      'div',
      'card-modal-info'
    );

    this.infoTitle = super.createDomNode(this.infoTitle, 'h3', 'info-title');
    this.infoTitle.innerHTML = 'Jennifer';

    this.infoSubtitle = super.createDomNode(
      this.infoSubtitle,
      'h4',
      'info-subtitle'
    );
    this.infoSubtitle.innerHTML = 'Dog - Labrador';

    this.infoParagraph = super.createDomNode(
      this.infoParagraph,
      'div',
      'info-paragraph'
    );
    this.infoParagraph.innerHTML = `Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`;

    this.infoList = super.createDomNode(this.infoList, 'ul', 'info-list');
    this.infoList.innerHTML = `<li><h5>test<span>test</span></h5></li>
    <li><h5>test</h5><span>test</span></li>
    <li><h5>test</h5><span>test</span></li>
    <li><h5>test</h5><span>test</span></li>`;

    this.appendCardModalElement();
    return this.content;
  }

  appendCardModalElement() {
    this.content.append(this.imgCardModal);
    this.content.append(this.infoCardModal);
    this.infoCardModal.append(this.infoTitle);
    this.infoCardModal.append(this.infoSubtitle);
    this.infoCardModal.append(this.infoParagraph);
    this.infoCardModal.append(this.infoList);
  }

  renderCardModal() {
    let content = this.generateContentCardModal();
    super.createModal(content);
  }
}
