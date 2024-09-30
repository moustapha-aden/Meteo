let ville = "paris";

let button = document.querySelector("#button");
recevoir(ville);

button.addEventListener("click", () => {
  ville = prompt("quelle ville souhaitez-vous voir ?");
  recevoir(ville);
});

async function recevoir(ville) {
  const Url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=3f6f2d8b5dbb32d19556e7f66e151384&units=metric";
  const requete = await fetch(Url, {
    method: "Get",
  });

  if (!requete.ok) {
    alert("Un probleme est intervenu,merci de revenir plus tard");
  } else {
    let donnees = await requete.json();
    document.querySelector("#ville").textContent = donnees.name;
    document.querySelector("#temp").textContent = donnees.main.temp;
  }
}

// requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         let temperature = reponse.main.temp;
//         let ville = reponse.name;

//         document.querySelector("#ville").textContent = ville;
//         document.querySelector("#temp").textContent = temperature;
//         // console.log(temperature);
//         // console.log(ville);
//       } else {
//         alert("Un probleme est intervenu,merci de revenir plus tard");
//       }
//     }
//   };
