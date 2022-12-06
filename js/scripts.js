window.onload = function () {
  
  function random1(min, max) {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function random2(min, max) {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function random3(min, max) {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let body = document.querySelector(`body`);

  body.onmouseover = function () {
    body.style.backgroundColor = `rgb(${random1()}, ${random2()}, ${random3()})`;
  }
};
// let p = document.querySelector("p");
//   p.onmouseover = function() {
//   document.querySelector("p>em").innerText = "Don't be surprised";
// };