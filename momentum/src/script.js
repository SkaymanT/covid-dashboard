import {
  showTime,
  setBackground,
  setGreeting,
  getName,
  getFocus,
  qouteClickHandler,
  getLocation,
  getWeather,
  getQuote,
} from './app';

window.onload = () => {
  showTime();
  setBackground();
  setGreeting();
  getName();
  getFocus();
  qouteClickHandler();
  getQuote();
  getLocation();
  getWeather();
};
