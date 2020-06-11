//-4 Init weather object
const weather = new Weather('London', 'UK');
//-6 for changing location
// weather.changeLocation('Dubai', 'UAE');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


//7----we wrap the weather in a function for DOM loading 
function getWeather(){
//-5 pass the get function on the object
weather.getWeather() //-6it' so give us promise so we need to use.then for result and .catch for errors
.then(results =>{
  console.log(results);
})
.catch(err => console.log(err));
}