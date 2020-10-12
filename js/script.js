
// Fonction appelée lors du click du bouton
function start() {

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .GetThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('demain-forecast-main').innerHTML = main1;
      document.getElementById('demain-forecast-more-info').innerHTML = description1;
      document.getElementById('icon-weather-container-d').innerHTML = icon1;
      document.getElementById('demain-forecast-temp').innerHTML = `${temp1}°C`;

      document.getElementById('ademain-forecast-main').innerHTML = main2;
      document.getElementById('ademain-forecast-more-info').innerHTML = description2;
      document.getElementById('icon-weather-container-d-a').innerHTML = icon2;
      document.getElementById('ademain-forecast-temp').innerHTML = `${temp2}°C`;

      document.getElementById('aademain-forecast-main').innerHTML = main3;
      document.getElementById('aademain-forecast-more-info').innerHTML = description3;
      document.getElementById('icon-weather-container-d-a-a').innerHTML = icon3;
      document.getElementById('aademain-forecast-temp').innerHTML = `${temp3}°C`;
      
    })
/*
    .GetThreeDayForecast()
    .then(function(response) 
    {
      const data2 = response.data;


      const icon1 = apiWeather.getHTMLElementFromIcon(data2.list[0].weather[0].icon);
      const icon2 = apiWeather.getHTMLElementFromIcon(data2.list[1].weather[0].icon);
      const icon3 = apiWeather.getHTMLElementFromIcon(data2.list[2].weather[0].icon);


      document.getElementById('demain-forecast-main').innerHTML = data2.list[0].weather[0].main;
      document.getElementById('demain-forecast-more-info').innerHTML = data2.list[0].weather[0].description;
      document.getElementById('icon-weather-container-d').innerHTML = icon1;
      document.getElementById('demain-forecast-temp').innerHTML = `${data2.list[0].temp.day;}°C`;
      
      document.getElementById('ademain-forecast-main').innerHTML = data2.list[1].weather[0].main;;
      document.getElementById('ademain-forecast-more-info').innerHTML = data2.list[1].weather[0].description;
      document.getElementById('icon-weather-container-d-a').innerHTML = icon2;
      document.getElementById('ademain-forecast-temp').innerHTML = `${data2.list[1].temp.day;}°C`;
      
      document.getElementById('aademain-forecast-main').innerHTML = data2.list[2].weather[0].main;;
      document.getElementById('aademain-forecast-more-info').innerHTML = data2.list[2].weather[0].description;
      document.getElementById('icon-weather-container-d-a-a').innerHTML = icon3;
      document.getElementById('aademain-forecast-temp').innerHTML = `${data2.list[2].temp.day;}°C`;
      })*/
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
