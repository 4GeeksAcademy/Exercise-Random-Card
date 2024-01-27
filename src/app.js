/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //   //Random number
  //   console.log("Parte divertida");
  //   let number = document.getElementById("number");
  //   number.innerHTML = generateRamdomNumber();

  //   //Random suit
  //   document
  //     .querySelector("#card")
  //     .setAttribute("content", generateRamdomSuits());
  //

  //SOLUCIÓN CON ARRAYS
  // let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  // let suits = ["spade", "heart", "diamond", "club"];

  //SOLUCIÓN CON OBJETO CARTA
  let card = {
    numbers: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    suits: ["spade", "heart", "diamond", "club"]
  };

  function printCard() {
    //Solución con arrays
    // document.querySelector(#card).classList.add(generateRandomCard(numeros));
    // document.querySelector("#number").innerHTML = generateRandomCard(
    //   suits);

    //Solución con objetos
    document
      .querySelector("#card")
      .classList.add(generateRandomCard(card.suits));
    document.querySelector("#number").innerHTML = generateRandomCard(
      card.numbers
    );
  }

  printCard();
};

function generateRandomCard(array) {
  let indexRandom = Math.floor(Math.random() * array.length);
  console.log("Resultado del random card");
  console.log(array[indexRandom]);
  return array[indexRandom];
}

//Aleatorios número - color - carta
// function generateRamdomNumber() {
//   let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//   let indexRandomNum = Math.floor(Math.random() * numeros.length);
//   console.log(indexRandomNum);
//   console.log("Numero de la carta: " + numeros[indexRandomNum]);
//   return numeros[indexRandomNum];
// }
// function generateRamdomSuits() {
//   let suits = ["spade", "heart", "diamond", "club"];
//   let indexRandomSuit = Math.floor(Math.random() * suits.length);
//   console.log("Palo: " + suits[indexRandomSuit]);
//   return suits[indexRandomSuit];
// }
