let location = document.querySelector('.main-block_location');
let temperature = document.querySelector('.main-block_temperature');
let wind = document.querySelector('.secondary-block_wind');
let humidity = document.querySelector('.secondary-block_humidity');
let condition = document.querySelector('.secondary-block_condition');
let weatherIcon = document.querySelector('.main-block_icon');

function getLocation() {
  let loc = localStorage.getItem('main-block_location');
  if (loc == null || loc.toString().trim() === '')
    location.innerText = '[Please enter your location]';
  else location.innerText = localStorage.getItem('main-block_location');
}

async function getWeather() {
  let locationForApi = location.innerText;
  if (locationForApi.includes('[Please enter your location]')) return;

  const url = `https://api.weatherapi.com/v1/current.json?key=38bd7b2ba4ae4f0db3f203410202510&q=${locationForApi}`;
  const response = await fetch(url);

  if (
    response.status === 400 ||
    response.status === 403 ||
    response.status === 501
  ) {
    if (response.status === 400) {
      alert('Invalid location');
    } else {
      alert(
        `Bad connection with weather server. Error code: ${response.status}`
      );
    }
    temperature.innerText = '';
    wind.innerText = '';
    humidity.innerText = '';
    condition.innerText = '';
    weatherIcon.innerHTML = '';
    return;
  }

  const data = await response.json();

  temperature.innerText = `${data.current.temp_c} °C`;

  let weatherIconPath = data.current.condition.icon;
  weatherIcon.innerHTML = `<img src="https:${weatherIconPath}" alt="weatherIconPath" width="50" height="50">`;

  let speedofWind = +(data.current.gust_kph / 3.6).toFixed(1);
  wind.innerText = `Wind: ${speedofWind} m/s`;
  humidity.innerText = `Humidity: ${data.current.humidity}%`;
  condition.innerText = data.current.condition.text;
}

export { getLocation, getWeather };
