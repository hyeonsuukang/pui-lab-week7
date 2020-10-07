// Example 1: Click the button will change
//            the inner HTML content of a paragraph element
let btnEx1 = document.getElementById("btn-ex1");
btnEx1.onclick = function (e) {
  e.preventDefault();
  let pDemo = document.getElementById("p-ex1");
  pDemo.innerHTML = "Hello JavaScript!";
};

// Example 2: Click the button and the bulb will be turned on
let btnTurnOn = document.getElementById("btn-turn-on");
btnTurnOn.onclick = function (e) {
  e.preventDefault();
  let imgBulb = document.getElementById("img-bulb");
  imgBulb.setAttribute("src", "images/pic_bulbon.gif");
};

let btnTurnOff = document.getElementById("btn-turn-off");
btnTurnOff.onclick = function (e) {
  e.preventDefault();
  let imgBulb = document.getElementById("img-bulb");
  imgBulb.setAttribute("src", "images/pic_bulboff.gif");
};

// Example 3: Click the button and the styling of the paragraph will change
let btnEx3 = document.getElementById("btn-ex3");
btnEx3.onclick = function (e) {
  e.preventDefault();
  let pEx3 = document.getElementById("p-ex3");
  pEx3.style.fontSize = "35px";
};

// Example 4: Clicking the button will hide the corresponding paragraph element
let btnHide = document.getElementById("btn-hide");
let btnShow = document.getElementById("btn-show");
btnHide.onclick = function (e) {
  e.preventDefault();
  let pEx4 = document.getElementById("p-ex4");
  pEx4.style.display = "none";
};

btnShow.onclick = function (e) {
  e.preventDefault();
  let pEx4 = document.getElementById("p-ex4");
  pEx4.style.display = "block";
};

// Return to the following example after explaining for-loops in the lecture slides
let btnQueryDom = document.getElementById("btn-query-dom");
btnQueryDom.onclick = function (e) {
  e.preventDefault();
  const divItems = document.querySelectorAll("div.item");
  divItems.forEach((div, i) => {
    div.style.fontSize = (i + 10) ** 2 + "px";
    div.style.background = "blue";
  });
};
