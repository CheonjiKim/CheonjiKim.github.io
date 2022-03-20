/*
const images = ["black.png", "grey.png", "blue.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // img태그를 만든다.

bgImage.src = `img/${chosenImage}`; // bgImage, 즉 img 태그에 src를 할당한다.

document.body.appendChild(bgImage); // bgImage 태그를 html의 body 태그에 집어넣는다.
*/

// 파스텔톤 컬러를 채워보기.
const colorClasses = [
  "antiquewhite",
  "powderblue",
  "mistyrose",
  "palegoldenrod",
];

const chosenClass =
  colorClasses[Math.floor(Math.random() * colorClasses.length)];

const body = document.querySelector("body");

body.classList.add(chosenClass);
