export default function sliderClickHandler() {
    document.querySelector('.pets__slider').addEventListener('click', (event) => {
        if (isClickOnNext(event)) {
            doLeft();
        }
        if (isClickOnPrev(event)) {
            console.log('prev Slide');
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

const doLeft = () => {
    if (window.innerWidth >= 1280) {
        drawSlides(3);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        drawSlides(2);

    } else if (window.innerWidth >= 300 && window.innerWidth < 768) {
        drawSlides(1);
    }

};

const drawSlides = (count) => {
    for (let index = 0; index < count; index++) {
        const buf = createCard('testURL', 'testName');
        buf.style.left = 280 + 'px';
        document.querySelector('.slider').appendChild(buf);
    }
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

}