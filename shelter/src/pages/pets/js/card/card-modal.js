import { Modal } from '../modal';

export class CardModal extends Modal {
  constructor(
    classes,
    {
      name,
      img,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites,
    }
  ) {
    super(classes);
    this.name = name;
    this.img = img;
    this.breed = breed;
    this.type = type;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  generateContentCardModal() {
    this.content = super.createDomNode(this.modal, 'div', 'card-modal-content');

    this.imgCardModal = super.createDomNode(
      this.imgCardModal,
      'img',
      'card-modal-img'
    );
    this.imgCardModal.src = this.img;
    this.imgCardModal.alt = this.name;

    this.infoCardModal = super.createDomNode(
      this.infoCardModal,
      'div',
      'card-modal-info'
    );

    this.infoTitle = super.createDomNode(this.infoTitle, 'h3', 'info-title');
    this.infoTitle.innerHTML = this.name;

    this.infoSubtitle = super.createDomNode(
      this.infoSubtitle,
      'h4',
      'info-subtitle'
    );
    this.infoSubtitle.innerHTML = `${this.type} - ${this.breed}`;

    this.infoParagraph = super.createDomNode(
      this.infoParagraph,
      'h5',
      'info-paragraph'
    );
    this.infoParagraph.innerHTML = this.description;

    this.infoList = super.createDomNode(this.infoList, 'ul', 'info-list');
    this.infoList.innerHTML = `<li><h5>Age: <span>${this.age}</span></h5></li>
    <li><h5>Inoculations: <span>${this.inoculations}</span></h5></li>
    <li><h5>Diseases: <span>${this.diseases}</span></h5></li>
    <li><h5>Parasites: <span>${this.parasites}</span></h5></li>`;

    this.appendCardModalElement();
    return this.content;
  }

  closeModal() {
    super.closeModal();
    document.querySelectorAll('.card').forEach((element) => {
      element.classList.remove('active-card');
    });
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
