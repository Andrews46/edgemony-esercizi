import { BASE_URL } from "./api_key.js";

const qS = (type) => document.querySelector(type);

//scrivo le variali

let lat = qS(".lat");
let lon = qS(".lon");
let nameCity = qS(".name");
let temperatura = qS(".temperatura");
let temperMin = qS(".temp-min");
let temperMax = qS(".temp-max");
let tempUmidità = qS(".tempHumidity");
let descWeather = qS(".weather");
let descWind = qS(".wind");
let selectProvince = qS(".sel_city");
let iconTempo = qS(".icon");

// array
const provincePalermo = [
  { id: 1, name: "Alia", value: "Alia" },
  { id: 2, name: "Alimena", value: "Alimena" },
  { id: 3, name: "Aliminusa", value: "Aliminusa" },
  { id: 4, name: "Altavilla Milicia", value: "Altavilla+Milicia" },
  { id: 5, name: "Altofonte", value: "Altofonte" },
  { id: 6, name: "Bagheria", value: "Bagheria" },
  { id: 7, name: "Balestrate", value: "Balestrate" },
  { id: 8, name: "Baucina", value: "Baucina" },
  { id: 9, name: "Belmonte Mezzagno", value: "Belmonte+Mezzagno" },
  { id: 10, name: "Bisacquino", value: "Bisacquino" },
  { id: 11, name: "Blufi", value: "Blufi" },
  { id: 12, name: "Bolognetta", value: "Bolognetta" },
  { id: 13, name: "Bompietro", value: "Bompietro" },
  { id: 14, name: "Borgetto", value: "Borgetto" },
  { id: 15, name: "Caccamo", value: "Caccamo" },
  { id: 16, name: "Caltavuturo", value: "Caltavuturo" },
  { id: 17, name: "Campofelice di Fitalia", value: "Campofelice+di+Fitalia" },
  { id: 18, name: "Campofelice di Roccella", value: "Campofelice+di+Roccella" },
  { id: 19, name: "Campofiorito", value: "Campofiorito" },
  { id: 20, name: "Camporeale", value: "Camporeale" },
  { id: 21, name: "Capaci", value: "Capaci" },
  { id: 22, name: "Carini", value: "Carini" },
  { id: 23, name: "Castelbuono", value: "Castelbuono" },
  { id: 24, name: "Casteldaccia", value: "Casteldaccia" },
  { id: 25, name: "Castellana Sicula", value: "Castellana+Sicula" },
  { id: 26, name: "Castronovo di Sicilia", value: "Castronovo+di+Sicilia" },
  { id: 27, name: "Cefalà Diana", value: "Cefalà+Diana" },
  { id: 28, name: "Cefalù", value: "Cefalù" },
  { id: 29, name: "Cerda", value: "Cerda" },
  { id: 30, name: "Chiusa Sclafani", value: "Chiusa+Sclafani" },
  { id: 31, name: "Ciminna", value: "Ciminna" },
  { id: 32, name: "Cinisi", value: "Cinisi" },
  { id: 33, name: "Collesano", value: "Collesano" },
  { id: 34, name: "Contessa Entellina", value: "Contessa+Entellina" },
  { id: 35, name: "Corleone", value: "Corleone" },
  { id: 36, name: "Ficarazzi", value: "Ficarazzi" },
  { id: 37, name: "Gangi", value: "Gangi" },
  { id: 38, name: "Geraci Siculo", value: "Geraci+Siculo" },
  { id: 39, name: "Giardinello", value: "Giardinello" },
  { id: 40, name: "Giuliana", value: "Giuliana" },
  { id: 41, name: "Godrano", value: "Godrano" },
  { id: 42, name: "Gratteri", value: "Gratteri" },
  { id: 43, name: "Isnello", value: "Isnello" },
  { id: 44, name: "Isola delle Femmine", value: "Isola+delle+Femmine" },
  { id: 45, name: "Lascari", value: "Lascari" },
  { id: 46, name: "Lercara Friddi", value: "Lercara+Friddi" },
  { id: 47, name: "Marineo", value: "Marineo" },
  { id: 48, name: "Mezzojuso", value: "Mezzojuso" },
  { id: 49, name: "Misilmeri", value: "Misilmeri" },
  { id: 50, name: "Monreale", value: "Monreale" },
  { id: 51, name: "Montelepre", value: "Montelepre" },
  { id: 52, name: "Montemaggiore Belsito", value: "Montemaggiore+Belsito" },
  { id: 53, name: "Palazzo Adriano", value: "Palazzo+Adriano" },
  { id: 54, name: "Palermo", value: "Palermo" },
  { id: 55, name: "Partinico", value: "Partinico" },
  { id: 56, name: "Petralia Soprana", value: "Petralia+Soprana" },
  { id: 57, name: "Petralia Sottana", value: "Petralia+Sottana" },
  { id: 58, name: "Piana degli Albanesi", value: "Piana+degli+Albanesi" },
  { id: 59, name: "Polizzi Generosa", value: "Polizzi+Generosa" },
  { id: 60, name: "Pollina", value: "Pollina" },
  { id: 61, name: "Prizzi", value: "Prizzi" },
  { id: 62, name: "Roccamena", value: "Roccamena" },
  { id: 63, name: "Roccapalumba", value: "Roccapalumba" },
  { id: 64, name: "San Cipirello", value: "San+Cipirello" },
  { id: 65, name: "San Giuseppe Jato", value: "San+Giuseppe+Jato" },
  { id: 66, name: "San Mauro Castelverde", value: "San+Mauro+Castelverde" },
  { id: 67, name: "Santa Cristina Gela", value: "Santa+Cristina+Gela" },
  { id: 68, name: "Santa Flavia", value: "Santa+Flavia" },
  { id: 69, name: "Sciara", value: "Sciara" },
  { id: 70, name: "Scillato", value: "Scillato" },
  { id: 71, name: "Schifani Bagni", value: "Schifani+Bagni" },
  { id: 72, name: "Termini Imerese", value: "Termini+Imerese" },
  { id: 73, name: "Terrasini", value: "Terrasini" },
  { id: 74, name: "Torretta", value: "Torretta" },
  { id: 75, name: "Trabia", value: "Trabia" },
  { id: 11, name: "Trappeto", value: "Trappeto" },
  { id: 77, name: "Ustica", value: "Ustica" },
  { id: 78, name: "Valledolmo", value: "Valledolmo" },
  { id: 79, name: "Ventimiglia di Sicilia", value: "Ventimiglia+di+Sicilia" },
  { id: 80, name: "Vicari", value: "Vicari" },
  { id: 81, name: "Villabate", value: "Villabate" },
  { id: 82, name: "Villafrati", value: "Villafrati" },
];

fetch(BASE_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const { name, weather, main, wind, coord } = data;
    temperatura.textContent = `${parseFloat(main.temp - 274.15).toFixed(2)} °C`;
    temperMin.textContent = `min: ${parseFloat(main.temp_min - 274.15).toFixed(
      2
    )} °C`;
    temperMax.textContent = `max: ${parseFloat(main.temp_max - 274.15).toFixed(
      2
    )} °C`;
    nameCity.textContent = name;
    iconTempo.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    tempUmidità.textContent = `Umidità: ${main.humidity}%`;
    descWeather.textContent = weather[0].description;
    descWind.textContent = `Vento:${wind.speed} m/s`;
    lat.textContent = `lat : ${coord.lat}`;
    lon.textContent = `long : ${coord.lon}`;
  });

const optionGenerator = (name, value) => {
  const selectProvince = qS(".sel_city");
  const option = document.createElement("option");

  option.className = "";
  option.setAttribute("value", value);
  option.textContent = name;
  selectProvince.appendChild(option);

  return optionGenerator;
};

alert("seleziona il tuo comune");
provincePalermo.map((province) => {
  optionGenerator(province.name, province.value);
  console.log(province);
});

selectProvince.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=6bbfef46504b0bae66ef02f747a01517`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const { name, weather, main, wind, coord } = data;
      temperatura.textContent = `${parseFloat(main.temp - 274.15).toFixed(
        2
      )} °C`;
      temperMin.textContent = `min: ${parseFloat(
        main.temp_min - 274.15
      ).toFixed(2)} °C`;
      temperMax.textContent = `max: ${parseFloat(
        main.temp_max - 274.15
      ).toFixed(2)} °C`;
      nameCity.textContent = name;
      iconTempo.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
      tempUmidità.textContent = `Umidità: ${main.humidity} %`;
      descWeather.textContent = weather[0].description;
      descWind.textContent = `Vento:${wind.speed} m/s`;
      lat.textContent = `lat : ${coord.lat}`;
      lon.textContent = `long : ${coord.lon}`;
    });
});
