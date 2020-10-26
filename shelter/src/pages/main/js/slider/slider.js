import { givePets, giveRandomArray } from '../common';
let isEnabled = true;
let pets = [];

export async function sliderClickHandler() {
  pets = await givePets();
  document.querySelector('.slider_line').style.left = 0 + 'px';
  document.querySelector('.pets__slider').addEventListener('click', (event) => {
    if (isClickOnNext(event) && isEnabled) {
      changeSlide('next', document.querySelector('.slider_line'));
    }
    if (isClickOnPrev(event) && isEnabled) {
      changeSlide('prev', document.querySelector('.slider_line'));
    }
  });
}

const isClickOnNext = (event) => {
  return (
    event.target.classList.contains('pets__slider_next') ||
    event.target.parentNode.classList.contains('pets__slider_next') ||
    event.target.parentNode.parentNode.classList.contains('pets__slider_next')
  );
};

const isClickOnPrev = (event) => {
  return (
    event.target.classList.contains('pets__slider_prev') ||
    event.target.parentNode.classList.contains('pets__slider_prev') ||
    event.target.parentNode.parentNode.classList.contains('pets__slider_prev')
  );
};

const changeSlide = (direction, showSlide) => {
  isEnabled = false;
  let widthSlide;
  if (window.innerWidth >= 1280) {
    widthSlide = 980;
    addSlide(direction, widthSlide, createSlide(3, showSlide));
    let slidesAfterUpdate = document.querySelectorAll('.slider_line');
    doMove(direction, widthSlide, slidesAfterUpdate);
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    widthSlide = 620;
    addSlide(direction, widthSlide, createSlide(3, showSlide));
    let slidesAfterUpdate = document.querySelectorAll('.slider_line');
    doMove(direction, widthSlide, slidesAfterUpdate);
  } else if (window.innerWidth >= 300 && window.innerWidth < 768) {
    widthSlide = 310;
    addSlide(direction, widthSlide, createSlide(3, showSlide));
    let slidesAfterUpdate = document.querySelectorAll('.slider_line');
    doMove(direction, widthSlide, slidesAfterUpdate);
  }
};

const doMove = (direction, widthSlide, slides) => {
  if (direction === 'next') {
    setTimeout(() => {
      slides.forEach((element, index) => {
        element.style.left = index * widthSlide - widthSlide + 'px';
      });
      slides[0].addEventListener('transitionend', () => {
        slides[0].remove();
        isEnabled = true;
      });
    }, 1);
  } else if (direction === 'prev') {
    setTimeout(() => {
      slides.forEach((element, index) => {
        element.style.left = index * widthSlide + 'px';
      });
      slides[1].addEventListener('transitionend', () => {
        slides[1].remove();
        isEnabled = true;
      });
    }, 1);
  }
};

const addSlide = (direction, widthSlide, slide) => {
  if (direction === 'next') {
    slide.style.left = widthSlide + 'px';
    document.querySelector('.slider').append(slide);
  } else if (direction === 'prev') {
    slide.style.left = -widthSlide + 'px';
    document.querySelector('.slider').prepend(slide);
  }
};

const createSlide = (countCardsOnSlide, showSlide) => {
  let prevPets = [];
  for (let index = 0; index < showSlide.children.length; index++) {
    prevPets.push(showSlide.children[index].id);
  }
  let newSlide = document.createElement('div');
  newSlide.classList.add('slider_line');
  let randomPets = doRandomPets(pets, prevPets);
  for (let index = 0; index < countCardsOnSlide; index++) {
    newSlide.append(createCard(randomPets[index].img, randomPets[index].name));
  }
  return newSlide;
};

const createCard = (url, name) => {
  let card = document.createElement('div');
  card.classList.add('pets__slider_card');
  card.classList.add('card');
  card.id = name;

  let img = document.createElement('img');
  img.classList.add('card_image');
  img.src = url;
  img.alt = name;
  card.append(img);

  let nameParagraph = document.createElement('p');
  nameParagraph.classList.add('card_name');
  nameParagraph.innerText = name;
  card.append(nameParagraph);

  let cardButton = document.createElement('div');
  cardButton.classList.add('card_button');

  let button = document.createElement('button');
  button.classList.add('button_secondary');
  button.innerText = 'Learn more';
  cardButton.append(button);
  card.append(cardButton);

  return card;
};

const doRandomPets = (initArray, prevArrayPets) => {
  let randomArrayNumber = giveRandomArray(
    convertNameToNumber(initArray, prevArrayPets),
    3,
    0,
    initArray.length - 1
  );
  let randomArrayPets = randomArrayNumber.map((element) => {
    return initArray[element];
  });
  return randomArrayPets;
};

const convertNameToNumber = (initArray, prevArrayPets) => {
  let prevArrayNumbers = prevArrayPets.map((prevElement) => {
    return initArray.findIndex(
      (element) => element.name.toLowerCase() === prevElement.toLowerCase()
    );
  });
  return prevArrayNumbers;
};
