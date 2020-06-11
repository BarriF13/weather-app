// -1 
class Weather{
  constructor(city, country){
    this.apiKey = '22b6349f3ad51a1c5f25604ba74dc1bd';
    this.city = city;
    this.country = country;
  }
// -2 fetch weather from API

async getWeather(){
 const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
      this.country}&units=metric&APPID=${this.apiKey}`);

      const responseData = await response.json();
  //Original return responseData.current_observation;
      return responseData;
    }
    // -3 Change weather location
    changeLocation(city, country){
      this.city = city;
      this.country = country;
    }
}