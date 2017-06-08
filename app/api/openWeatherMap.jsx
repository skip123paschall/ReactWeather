var axios = require('axios');

// const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=8c91980cbca0a6f096913caf0ffcedbf&units=imperial';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8c91980cbca0a6f096913caf0ffcedbf&units=imperial';
                            //  'http://api.openweathermap.org/data/2.5/weather?appid=8c91980cbca0a6f096913caf0ffcedbf&units=imperial&q=Austin

//8c91980cbca0a6f096913caf0ffcedbf
//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
//4:56

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
