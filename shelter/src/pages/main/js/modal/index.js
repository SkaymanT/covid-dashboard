import { Modal } from './modal';

const renderModalWindow = (content) => {
  let modal = new Modal('modal');
  modal.createModal(content);
};

export default renderModalWindow;
