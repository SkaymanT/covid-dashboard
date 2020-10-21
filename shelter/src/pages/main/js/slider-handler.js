export default function sliderClickHandler() {
  document.querySelector('.pets__slider').addEventListener('click', (event) => {
    if (isClickOnNext(event)) {
      console.log('next Slide');
    }
    if (isClickOnPrev(event)) {
      console.log('prev Slide');
    }
  });
  
  document.querySelector('.pets__slider').addEventListener('click', (event) => {
    if (isClickOnNext(event)) {
      console.log('next Slide');
    }
    if (isClickOnPrev(event)) {
      console.log('prev Slide');
    }
  });
}

const isClickOnNext = (event) => {
  return (
    event.target.classList.contains('pets__slider_next') ||
    event.target.parentNode.classList.contains('pets__slider_next')
  );
};

const isClickOnPrev = (event) => {
  return (
    event.target.classList.contains('pets__slider_prev') ||
    event.target.parentNode.classList.contains('pets__slider_prev')
  );
};

// function changeCurrentSlide(n) {
//   // функция изменяющая текущий слайд "карусель"
//   currentSlide = (n + slides.length) % slides.length;
// }

// function changeSlide(direction, n) {
//   // функция появления следующего элемента
//   isEnabled = false;
//   slider.classList.add(direction);
//   slides[currentSlide].classList.add('current'); //начало анимации на экране два слайда
//   changeCurrentSlide(n + 1);
//   slides[currentSlide].classList.add('next'); //начало анимации на экране два слайда
//   slider.addEventListener('animationend', function () {
//     slider.classList.remove(direction); // удаляем класс следующий, т.к. Анимация закончилась
//     changeCurrentSlide(n);
//     slides[currentSlide].classList.remove('current'); // удаляем класс следующий, т.к. Анимация закончилась
//     slides[currentSlide].classList.remove('active_slide'); // удаляем класс следующий, т.к. Анимация закончилась
//     changeCurrentSlide(n + 1);
//     slides[currentSlide].classList.add('active_slide'); // объявляем след слайд актив
//     slides[currentSlide].classList.remove('next'); // объявляем след слайд актив
//     isEnabled = true;
//   });
// }

// function nextSlide(n) {
//   //функция смены слайда право
//   changeSlide('slider_right', n);
//   if (n % 2 == 0) {
//     document.querySelector('.main').classList.remove('red_slide');
//     document.querySelector('.main').classList.add('blue_slide');
//   } else {
//     document.querySelector('.main').classList.remove('blue_slide');
//     document.querySelector('.main').classList.add('red_slide');
//   }
// }

// function previousSlide(n) {
//   //функция смены слайда право
//   changeSlide('slider_left', n);
//   if (n % 2 == 0) {
//     document.querySelector('.main').classList.remove('red_slide');
//     document.querySelector('.main').classList.add('blue_slide');
//   } else {
//     document.querySelector('.main').classList.remove('blue_slide');
//     document.querySelector('.main').classList.add('red_slide');
//   }
// }

// document.querySelector('.slider__prev').addEventListener('click', function () {
//   if (isEnabled) {
//     previousSlide(currentSlide);
//   }
// });

// document.querySelector('.slider__next').addEventListener('click', function () {
//   if (isEnabled) {
//     nextSlide(currentSlide);
//   }
// });
