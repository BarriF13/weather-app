// init storage
const storage = new Storage();
// get stored location Data
const weatherLocation = storage.getLocationData();

//-4 Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//init UI
const ui = new UI();

//-6 for changing location

// weather.changeLocation('Dubai', 'UAE');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);
//-10 changing the weather location
document.getElementById('w-change-btn').addEventListener('click', (e)=> {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  storage.setLocationData(city, country);
  //Get and show weather 
  getWeather();
  // close modal
  $('#locModal').modal('hide');
});

//7----we wrap the weather in a function for DOM loading 
function getWeather(){
//-5 pass the get function on the object
weather.getWeather() //-6it' so give us promise so we need to use.then for result and .catch for errors
.then(results =>{
  // -8 now functions for UI class
  ui.paint(results);
})
.catch(err => console.log(err));
}