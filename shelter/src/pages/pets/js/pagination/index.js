import { Pagination } from './pagination';
import { generateFullPetsList } from '../common';
import { givePets } from '../common';

async function addPaginationClickHandler() {
  let pets = await givePets();
  let multiplier = 6;
  document.querySelector('.pets__pagination').remove();
  document
    .querySelector('.pets__wrapper')
    .append(generatePagination(pets, multiplier));
}

const generatePagination = (pets, multiplier) => {
  const fullPetsList = generateFullPetsList(pets, multiplier);
  let pagination = new Pagination();
  return pagination.renderPagination(fullPetsList);
};

export { addPaginationClickHandler };
