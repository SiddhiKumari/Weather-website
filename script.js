const options = {
  method: "GET",
};
const getWeather = (city) => {
  cityname.innerHTML = city;

  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=ac85b9b5cda34b92a7c75801222512&q=" +
      city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      
      temp_c2.innerHTML = response.current.temp_c;
      temp_c.innerHTML = response.current.temp_c;
      temp_f.innerHTML = response.current.temp_f;
      feelslike_c.innerHTML = response.current.feelslike_c;
      feelslike_f.innerHTML = response.current.feelslike_f;
      gust_kph.innerHTML = response.current.gust_kph;
      humidity2.innerHTML = response.current.humidity;
      humidity.innerHTML = response.current.humidity;
      pressure_mb.innerHTML = response.current.pressure_mb;
      precip_mm.innerHTML = response.current.precip_mm;
      uv.innerHTML = response.current.uv;
      wind_kph2.innerHTML = response.current.wind_kph;
      wind_kph.innerHTML = response.current.wind_kph;
      wind_degree.innerHTML = response.current.wind_degree;
      wind_dir.innerHTML = response.current.wind_dir;
      
      
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");
