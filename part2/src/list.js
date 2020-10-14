let div = document.getElementById("div-doggos-shown");
let arr = JSON.parse(window.localStorage.getItem("dogNames"));
div.innerHTML = arr;
console.log(arr)