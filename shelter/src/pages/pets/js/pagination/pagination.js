import givePets from '../common/service';
import { createCard } from '../card';
import { giveRandomArray } from '../common/random';

export class Pagination {
  constructor() {
    let isEnabled = true;
    this.pets = [];
    this.currentPage = 0;
  }

  renderPagination(fullPetsList) {
    this.fullPetsList = fullPetsList;
    this.pagination = this.createDomNode(
      this.pagination,
      'div',
      'pets__pagination'
    );

    this.paginationBoxShow = this.renderPaginationBox(this.fullPetsList);

    this.paginationControls = this.renderPaginationControls();

    this.appendPaginationElement();
    return this.pagination;
  }

  appendPaginationElement() {
    this.pagination.append(this.paginationBoxShow);
    this.pagination.append(this.paginationControls);
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  renderPaginationBox(fullPetsList) {
    this.paginationBoxShow = this.createDomNode(
      this.paginationBoxShow,
      'div',
      'pets__pagination-box_show'
    );

    this.paginationBox = this.createDomNode(
      this.paginationBox,
      'div',
      'pets__pagination-box'
    );
    for (let i = 0; i < fullPetsList.length; i++) {
      this.paginationBox.append(
        createCard(
          fullPetsList[i].img,
          fullPetsList[i].name,
          'pets__pagination-box_card'
        )
      );
    }
    this.paginationBoxShow.append(this.paginationBox);
    return this.paginationBoxShow;
  }

  renderPaginationControls() {
    this.paginationControls = this.createDomNode(
      this.paginationControls,
      'div',
      'pets__pagination-controls'
    );

    this.paginationControlsLongPrev = this.createDomNode(
      this.paginationControlsLongPrev,
      'div',
      'pets__pagination-controls_long-prev'
    );
    this.paginationControlsLongPrev.innerHTML = `<button class="button_paginator inactive">&lt;&lt;</button>`;
    this.paginationControls.append(this.paginationControlsLongPrev);

    this.paginationControlsPrev = this.createDomNode(
      this.paginationControlsPrev,
      'div',
      'pets__pagination-controls_prev'
    );
    this.paginationControlsPrev.innerHTML = `<button class="button_paginator inactive">&lt;</button>`;
    this.paginationControls.append(this.paginationControlsPrev);

    this.paginationControlsNumber = this.createDomNode(
      this.paginationControlsNumber,
      'div',
      'pets__pagination-controls_number'
    );
    this.paginationControlsNumber.innerHTML = `<button class="button_paginator active-pagination">1</button>`;
    this.paginationControls.append(this.paginationControlsNumber);

    this.paginationControlsNext = this.createDomNode(
      this.paginationControlsNext,
      'div',
      'pets__pagination-controls_next'
    );
    this.paginationControlsNext.innerHTML = `<button class="button_paginator">></button>`;
    this.paginationControls.append(this.paginationControlsNext);

    this.paginationControlsLongNext = this.createDomNode(
      this.paginationControlsLongNext,
      'div',
      'pets__pagination-controls_long-next'
    );
    this.paginationControlsLongNext.innerHTML = `<button class="button_paginator">>></button>`;
    this.paginationControls.append(this.paginationControlsLongNext);

    this.paginationControls.addEventListener('click', (event) =>
      this.handlerClickLongPrev(event)
    );

    this.paginationControls.addEventListener('click', (event) =>
      this.handlerClickPrev(event)
    );

    this.paginationControls.addEventListener('click', (event) =>
      this.handlerClickNext(event)
    );

    this.paginationControls.addEventListener('click', (event) =>
      this.handlerClickLongNext(event)
    );

    return this.paginationControls;
  }

  handlerClickLongPrev(event) {
    if (event.target.closest('.pets__pagination-controls_long-prev')) {
      this.changePaginationBox('long-prev');
    }
  }

  handlerClickPrev(event) {
    if (event.target.closest('.pets__pagination-controls_prev')) {
      this.changePaginationBox('prev');
    }
  }

  handlerClickNext(event) {
    if (event.target.closest('.pets__pagination-controls_next')) {
      this.changePaginationBox('next');
    }
  }

  handlerClickLongNext(event) {
    if (event.target.closest('.pets__pagination-controls_long-next')) {
      this.changePaginationBox('long-next');
    }
  }

  changePaginationBox(direction) {
    if (window.innerWidth >= 1280) {
      this.heightSlide = 930;
      this.currentPage = this.changeCurrentPage(
        direction,
        this.heightSlide,
        this.currentPage
      );
      this.doMove(this.heightSlide, this.currentPage);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.heightSlide = 1395;
      this.currentPage = this.changeCurrentPage(
        direction,
        this.heightSlide,
        this.currentPage
      );
      this.doMove(this.heightSlide, this.currentPage);
    } else if (window.innerWidth >= 300 && window.innerWidth < 768) {
      this.heightSlide = 1395;
      this.currentPage = this.changeCurrentPage(
        direction,
        this.heightSlide,
        this.currentPage
      );
      this.doMove(this.heightSlide, this.currentPage);
    }
  }

  changeCurrentPage(direction, heightSlide, currentPage) {
    const maxPage = this.paginationBox.offsetHeight / heightSlide - 1;
    if (direction === 'next') {
      if (currentPage < this.paginationBox.offsetHeight / heightSlide - 1) {
        currentPage++;
      }
    } else if (direction === 'long-next') {
      if (currentPage < maxPage) {
        currentPage = maxPage;
      }
    } else if (direction === 'prev') {
      if (currentPage > 0) {
        currentPage--;
      }
    }
    if (direction === 'long-prev') {
      if (currentPage > 0) {
        currentPage = 0;
      }
    }
    if (currentPage === 0) {
      this.paginationControlsPrev.innerHTML = `<button class="button_paginator inactive">&lt;</button>`;
      this.paginationControlsLongPrev.innerHTML = `<button class="button_paginator inactive">&lt;&lt;</button>`;
      this.paginationControlsNext.innerHTML = `<button class="button_paginator">></button>`;
      this.paginationControlsLongNext.innerHTML = `<button class="button_paginator">>></button>`;
    } else if (currentPage === maxPage) {
      this.paginationControlsPrev.innerHTML = `<button class="button_paginator">&lt;</button>`;
      this.paginationControlsLongPrev.innerHTML = `<button class="button_paginator">&lt;&lt;</button>`;
      this.paginationControlsNext.innerHTML = `<button class="button_paginator inactive">></button>`;
      this.paginationControlsLongNext.innerHTML = `<button class="button_paginator inactive">>></button>`;
    } else {
      this.paginationControlsPrev.innerHTML = `<button class="button_paginator">&lt;</button>`;
      this.paginationControlsLongPrev.innerHTML = `<button class="button_paginator">&lt;&lt;</button>`;
      this.paginationControlsNext.innerHTML = `<button class="button_paginator">></button>`;
      this.paginationControlsLongNext.innerHTML = `<button class="button_paginator">>></button>`;
    }
    return currentPage;
  }

  doMove(heightSlide, currentPage) {
    this.paginationBox.style.top = `-${heightSlide * currentPage}px`;
    this.paginationControlsNumber.querySelector(
      '.active-pagination'
    ).innerText = (currentPage + 1).toString();
  }
}
