// const { error } = require("jquery");
let ville;

if ("geolocation" in navigator) {
  let options = {
    enableHighAccuracy: true,
  };
  navigator.geolocation.watchPosition(
    (position) => {
      const Url =
        "https://api.openweathermap.org/data/2.5/weather?lon=" +
        position.coords.longitude +
        "&lat=" +
        position.coords.latitude +
        "&appid=3f6f2d8b5dbb32d19556e7f66e151384&units=metric";
      console.log(Url);
      $.ajax({
        url: Url,
        type: "GET",
        dataType: "json",
        success: (data) => {
          $("#temp").text(data.main.temp);
          $("#ville").text(data.name);
        },
        error: () => {
          alert("Merci de revenir plus tard ");
        },
      });
    },
    error,
    options
  );
} else {
  ville = "DJIBOUTI";
  recevoir(ville);
}
$("#button").click(() => {
  ville = prompt("veuillez entre une ville");
  recevoir(ville);
});
function error() {
  ville = "djibouti";
  recevoir(ville);
}
function recevoir(ville) {
  const Url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=3f6f2d8b5dbb32d19556e7f66e151384&units=metric";

  $.ajax({
    url: Url,
    type: "GET",
    dataType: "json",
    success: (data) => {
      $("#temp").text(data.main.temp);
      $("#ville").text(data.name);
    },
    error: () => {
      alert("Merci de revenir plus tard ");
    },
  });
}
