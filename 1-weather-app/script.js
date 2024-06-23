const goBackButton = document.getElementById("goBackButton");

goBackButton.addEventListener("click", () => {
  document.location.replace("/");
});

async function checkWeather(input) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=20bd3fa0cc2bbf9777e96ffc494d6450&units=metric`
  );
  var data = await res.json();

  document.getElementById("temperature").innerHTML = data.main.temp + "ºC";
  document.getElementById("cityName").innerHTML = data.name;
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
  const weatherIcon = document.getElementById("weather-icon");

  switch (data.weather[0].main) {
    case "Clear":
      weatherIcon.innerHTML = `<img src="assets/clear.png" alt="Ícone sol" />`;
      weatherIcon.classList.add("clear");
      break;
    case "Clouds":
      weatherIcon.innerHTML = `<img src="assets/clouds.png" alt="Ícone nuvens" />`;
      weatherIcon.classList.add("clouds");
      break;
    case "Drizzle":
      weatherIcon.innerHTML = `<img src="assets/drizzle.png" alt="Ícone chuvisco" />`;
      weatherIcon.classList.add("drizzle");
      break;
    case "Mist":
      weatherIcon.innerHTML = `<img src="assets/mist.png" alt="Ícone névoa" />`;
      weatherIcon.classList.add("mist");
      break;
    case "Rain":
      weatherIcon.innerHTML = `<img src="assets/rain.png" alt="Ícone chuva" />`;
      weatherIcon.classList.add("rain");
      break;
    case "Snow":
      weatherIcon.innerHTML = `<img src="assets/snow.png" alt="Ícone neve" />`;
      weatherIcon.classList.add("snow");
      break;
    default:
      return;
  }
}

const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  checkWeather(input.value);
});
