export default function sliderClickHandler() {
  document.querySelector('.slider_line').style.left = 0 + 'px';
  document.querySelector('.pets__slider').addEventListener('click', (event) => {
    if (isClickOnNext(event)) {
      doMove('next');
    }
    if (isClickOnPrev(event)) {
      doMove('prev');
    }
  });

  // document.querySelector('.pets__slider').addEventListener('click', (event) => {
  //     if (isClickOnNext(event)) {
  //         console.log('next Slide');
  //     }
  //     if (isClickOnPrev(event)) {
  //         console.log('prev Slide');
  //     }
  // });
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

const doMove = (direction) => {
  let sign = direction === 'next' ? '-' : '+';
  let offsetRight = 0;
  let offsetLeft = 0;
  if (window.innerWidth >= 1280) {
    addSlide(direction, doSlides(3));
    document.querySelector('.slider_line').style.left = sign + 310 * 3 + 'px';
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    addSlide(direction, doSlides(2));
    document.querySelector('.slider_line').style.left = sign + 310 * 2 + 'px';
  } else if (window.innerWidth >= 300 && window.innerWidth < 768) {
    addSlide(direction, doSlides(1));
    document.querySelector('.slider_line').style.left = sign + 310 * 1 + 'px';
  }
};

const addSlide = (direction, slides) => {
  if (direction === 'next') {
    slides.forEach((element) => {
      document.querySelector('.slider_line').append(element);
    });
  } else if (direction === 'prev') {
    slides.forEach((element) => {
      document.querySelector('.slider_line').prepend(element);
    });
  }
};

const doSlides = (count) => {
  let newSlides = [];
  for (let index = 0; index < count; index++) {
    // const buf = createCard('testURL', 'testName');
    newSlides.push(createCard('testURL', 'testName'));
    // document.querySelector('.slider_line').appendChild(buf);
  }
  return newSlides;
};

const createCard = (url, name) => {
  let card = document.createElement('div');
  card.classList.add('pets__slider_card');
  card.classList.add('card');

  let img = document.createElement('img');
  img.classList.add('card_image');
  img.src = url;
  img.alt = name;
  card.append(img);

  let button = document.createElement('button');
  button.classList.add('button_secondary');

  card.append(button);

  return card;
};
