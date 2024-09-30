let ville = "paris";

changerville = document.querySelector("#button");
recevoir(ville);
changerville.addEventListener("click", () => {
  ville = prompt("quelle ville souhaitez-vous voir ?");
  recevoir(ville);
});

function recevoir(ville) {
  const Url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=3f6f2d8b5dbb32d19556e7f66e151384&units=metric";

  let requete = new XMLHttpRequest();

  requete.open("GET", Url);

  requete.responseType = "json";

  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        let ville = reponse.name;

        document.querySelector("#ville").textContent = ville;
        document.querySelector("#temp").textContent = temperature;
        // console.log(temperature);
        // console.log(ville);
      } else {
        alert("Un probleme est intervenu,merci de revenir plus tard");
      }
    }
  };
}
