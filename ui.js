// -9 class UI
class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.description = document.getElementById("w-desc");
    this.temp = document.getElementById("w-temp");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.wind = document.getElementById("w-wind");
    this.cloud = document.getElementById("w-cloud");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temp.textContent = `${weather.main.temp}°C`;
    this.icon.setAttribute("src",`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/sec`;
    this.cloud.textContent = `Cloudiness: ${weather.clouds.all}%`;
  }
}