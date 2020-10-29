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
  getLocation();
  getWeather();
  showTime();
  setBackground();
  setGreeting();
  getName();
  getFocus();
  qouteClickHandler();
  getQuote();
};
