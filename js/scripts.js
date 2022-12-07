window.onload = function () {
  
  function random1(min, max) {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let body = document.querySelector(`body`);

  body.onmouseover = function () {
    body.style.backgroundColor = `rgb(${random1()}, ${random1()}, ${random1()})`;
  }
};

//Example for setting background color on reload.

  // let bgColor1 = random1();
  // let bgColor2 = random1();
  // let bgColor3 = random1();
  // let rgbRand = `rgb(${bgColor1}, ${bgColor2}, ${bgColor3})`;

  // body.style.backgroundColor = rgbRand;