export default function sliderClickHandler() {
    document.querySelector('.header__menu').addEventListener('click', (event) => {
        changeHeaderLogo();

        if (isBlurMenu(event)) {
            closeMenu();
        }
        if (isClickOnMenuItem(event)) {
            closeMenu();
            document.querySelector('.header').scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        }
    });
}

const closeMenu = () => {
    document.getElementById('menu__toggle').checked = false;
    document.querySelector('.header_wrapper').classList.remove('open_menu');
};

const isBlurMenu = (event) => {
    return event.target.classList.contains('menu__container');
};

const changeHeaderLogo = () => {
    let isChecked = document.getElementById('menu__toggle').checked;
    if (isChecked) {
        document.querySelector('.header_wrapper').classList.add('open_menu');
    } else {
        document.querySelector('.header_wrapper').classList.remove('open_menu');
    }
};

const isClickOnMenuItem = (event) => {
    if (event.target.classList.length != 0) {
        const {
            classList,
            parentNode
        } = event.target;
        return (
            classList.length &&
            (classList.contains('active') || parentNode.classList.contains('active'))
        );
    }
};

function changeCurrentSlide(n) { // функция изменяющая текущий слайд "карусель"
    currentSlide = (n + slides.length) % slides.length;
}




function changeSlide(direction, n) { // функция появления следующего элемента
    isEnabled = false;
    slider.classList.add(direction);
    slides[currentSlide].classList.add('current'); //начало анимации на экране два слайда
    changeCurrentSlide(n + 1);
    slides[currentSlide].classList.add('next'); //начало анимации на экране два слайда
    slider.addEventListener('animationend', function () {
        slider.classList.remove(direction); // удаляем класс следующий, т.к. Анимация закончилась
        changeCurrentSlide(n);
        slides[currentSlide].classList.remove('current'); // удаляем класс следующий, т.к. Анимация закончилась
        slides[currentSlide].classList.remove('active_slide'); // удаляем класс следующий, т.к. Анимация закончилась
        changeCurrentSlide(n + 1);
        slides[currentSlide].classList.add('active_slide'); // объявляем след слайд актив
        slides[currentSlide].classList.remove('next'); // объявляем след слайд актив
        isEnabled = true;
    });

}

function nextSlide(n) { //функция смены слайда право
    changeSlide('slider_right', n);
    if (n % 2 == 0) {
        document.querySelector('.main').classList.remove('red_slide');
        document.querySelector('.main').classList.add('blue_slide');
    } else {
        document.querySelector('.main').classList.remove('blue_slide');
        document.querySelector('.main').classList.add('red_slide');
    }
}

function previousSlide(n) { //функция смены слайда право
    changeSlide('slider_left', n);
    if (n % 2 == 0) {
        document.querySelector('.main').classList.remove('red_slide');
        document.querySelector('.main').classList.add('blue_slide');
    } else {
        document.querySelector('.main').classList.remove('blue_slide');
        document.querySelector('.main').classList.add('red_slide');
    }
}

document.querySelector('.slider__prev').addEventListener('click', function () {
    if (isEnabled) {
        previousSlide(currentSlide);
    }
});

document.querySelector('.slider__next').addEventListener('click', function () {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
});