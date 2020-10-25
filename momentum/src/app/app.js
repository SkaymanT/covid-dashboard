import { getWeather } from './weather';

let wrapper = document.querySelector('#root');
let date = document.querySelector('.date');
let time = document.querySelector('.time');
let greeting = document.querySelector('.greeting');
let name = document.querySelector('.name');
let focusEnter = document.querySelector('.focusEnter');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let hours = null;
let counter = null;

function showTime() {
  let defineTime = new Date();

  let dayofWeek = defineTime.getDay();
  let month = defineTime.getMonth();
  let day = defineTime.getDate();
  date.innerHTML = `${day} ${months[month]}, ${daysOfTheWeek[dayofWeek]}`;

  hours = defineTime.getHours();
  if (!counter) counter = hours;
  let minutes = defineTime.getMinutes();
  let seconds = defineTime.getSeconds();
  time.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

  if (minutes === 0 && seconds === 0) {
    setBackground();
    getWeather();
    if (hours % 6 === 0) setGreeting();
  }

  setTimeout(showTime, 1000);
}

function addZero(int) {
  if (int < 10) int = '0' + int.toString();
  else int = int.toString();
  return int;
}

function randomArray(lengthRequired = 6, quantityOfImages = 20) {
  let arr = [];
  for (let i = 1; i <= quantityOfImages; i++) {
    arr.push(i);
  }
  for (let j = arr.length - 1; j > 0; j--) {
    let k = Math.floor(Math.random() * (j + 1));
    [arr[j], arr[k]] = [arr[k], arr[j]];
  }
  arr = arr.slice(0, lengthRequired);
  arr = arr.map((item) => addZero(item));
  return arr;
}

const timesOfTheDayArray = ['night', 'morning', 'afternoon', 'evening'];

const timesOfTheDayObject = {
  night: randomArray(),
  morning: randomArray(),
  afternoon: randomArray(),
  evening: randomArray(),
};

function setBackground(value) {
  if (value == undefined) counter = hours;
  let mod = timesOfTheDayArray[Math.floor((counter % 24) / 6)];
  let div = counter % 6;

  let img = document.createElement('img');
  let src = `assets/images/${mod}/${timesOfTheDayObject[mod][div]}.jpg`;
  img.src = src;
  img.onload = () => (wrapper.style.backgroundImage = `url(${src})`);
}

function setGreeting() {
  let greet = timesOfTheDayArray[Math.floor(hours / 6) % 4];
  greeting.innerHTML = `Good ${greet}, `;
}

function refreshValue(event) {
  event.target.innerText = '';
}

function setValue(event) {
  let target = event.target;
  if (event.type === 'keypress') {
    if (event.which == 13 || event.keyCode === 13) {
      if (
        !target.innerText.toString().trim() == '' &&
        !target.innerText.includes('[Enter ')
      ) {
        localStorage.setItem(target.className, target.innerText);
      }
      target.blur();
    }
  } else if (event.type === 'blur') {
    if (
      target.innerText.toString().trim() == '' ||
      target.innerText.includes('[Enter ')
    ) {
      if (target.className === 'name') getName();
      else if (target.className === 'focusEnter') getFocus();
      else if (target.className === 'main-block_location') getLocation();
    } else {
      localStorage.setItem(target.className, target.innerText);
      if (
        target.className === 'main-block_location' ||
        location.contains(target)
      )
        getWeather();
    }
  }
}

function getName() {
  let loc = localStorage.getItem('name');
  if (loc == null || loc.toString().trim() === '')
    name.innerText = '[Enter name]';
  else name.innerText = loc;
}

function getFocus() {
  let loc = localStorage.getItem('focusEnter');
  if (loc == null || loc.toString().trim() === '')
    focusEnter.innerText = '[Enter focus]';
  else focusEnter.innerText = localStorage.getItem('focusEnter');
}

let iconBackground = document.querySelector('.icon__change_background');
let iconBackgroundImg = document.querySelector('.icon__change_background_img');

iconBackground.addEventListener('click', (event) => {
  if (
    event.target === iconBackground ||
    iconBackground.contains(event.target)
  ) {
    if (iconBackgroundImg.classList.contains('icon__rotate-in-process')) return;

    counter++;
    setBackground(counter);

    iconBackgroundImg.classList.add('icon__rotate-in-process');
    setTimeout(() => {
      iconBackgroundImg.classList.remove('icon__rotate-in-process');
    }, 800);
  }
});

name.addEventListener('click', refreshValue);
name.addEventListener('keypress', setValue);
name.addEventListener('blur', setValue);

focusEnter.addEventListener('click', refreshValue);
focusEnter.addEventListener('keypress', setValue);
focusEnter.addEventListener('blur', setValue);

let location = document.querySelector('.main-block_location');
location.addEventListener('click', refreshValue);
location.addEventListener('keypress', setValue);
location.addEventListener('blur', setValue);

export { showTime, setBackground, setGreeting, getName, getFocus };
