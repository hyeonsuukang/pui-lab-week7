// Below is the last activity in lab which puts together everything we've
// covered in the lab thus far. It has ond main buttons: "Add Random Doggo".
// "Add Random Doggo" fetches a randmo dog image using the Dog API
// https://dog.ceo/dog-api/documentation
function CardTemplate(parentEl, headerText, bodyText, imgUrl) {
  let divContainer = document.createElement("div");
  divContainer.className = "card";
  parentEl.appendChild(divContainer);

  let img = document.createElement("img");
  img.src = imgUrl;
  img.width = 200;
  divContainer.appendChild(img);

  let divTextContainer = document.createElement("div");
  divTextContainer.className = "text";
  divContainer.appendChild(divTextContainer);

  let header = document.createElement("h2");
  header.innerHTML = headerText;
  divTextContainer.appendChild(header);

  let bodyTextEl = document.createElement("p");
  bodyTextEl.innerHTML = bodyText;
  divTextContainer.appendChild(bodyTextEl);

  return divContainer;
}

function getBreedName(msgUrl) {
  // URL is formatted for example https://images.dog.ceo/breeds/basenji/n02110806_5381.jpg
  let pathComponents = msgUrl.split("/");
  return pathComponents.slice(-2, -1)[0];
}

function createNewRandomDoggoCard(containerEl) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let breed = getBreedName(data.message);
      CardTemplate(containerEl, breed, "🐶 🐕 ❤️", data.message);
      // Store information using session storage
      let localStorage = window.localStorage;
      // Because local storage stores string values, we convert between types using JSON.parse() and JSON.stringify()
      let arr = JSON.parse(localStorage.getItem("dogNames"));
      if (!arr) arr = [];
      arr.push(breed);
      localStorage.setItem("dogNames", JSON.stringify(arr));
      // You can now use the stored value in sessionStroage on other web pages
      // by calling window.localStorage.getItem("dogNames")
    });
}

let aCreateRandom = document.getElementById("a-create-random");
const divDoggoContainer = document.getElementById("div-doggos");
aCreateRandom.onclick = function (e) {
  e.preventDefault();
  createNewRandomDoggoCard(divDoggoContainer);
};
