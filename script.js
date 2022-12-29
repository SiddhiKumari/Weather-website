const options = {   //options is an object which mentions which request is it- "GET"(fetch)or"POST"(upload)
  method: "GET",
};
//API return results in form of object containing all weather reports
const getWeather = (city) => {    //get weather is an arrow function with parameter  city
  cityname.innerHTML = city;  //cityname = id, in which name of city is stored

  fetch("http://api.weatherapi.com/v1/current.json?key=ac85b9b5cda34b92a7c75801222512&q=" +city,options)  //fetch function generatibg response from api url
    .then((response) => response.json())  // response is an arrow function converting to json format
    .then((response) => {  // anotherarrow function
      console.log(response);  //prints response in console section
      
      //temp_c2=id in html where we store the response
      //response is in form of object which contains another object=current inside which we have the data.
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
    .catch((err) => console.error(err));  //if any error then catch
};

submit.addEventListener("click", (e) => {  //submit =id of button
  e.preventDefault();  //prevents default reload
  getWeather(city.value); //when submit clicked check weather for a particular city
});

getWeather("Delhi");  //by default called for delhi
