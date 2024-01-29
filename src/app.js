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

  //CARD OBJECT SOLUTION

  let card = {
    numbers: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    suits: ["spade", "heart", "diamond", "club"]
  };

  //RANDOM ARRAY

  function generateRandomCard(array) {
    let indexRandom = Math.floor(Math.random() * array.length);
    return array[indexRandom];
  }
  //RANDOM CARD

  function printCard() {
    const selectedNumber = generateRandomCard(card.numbers);
    const selectedSuit = generateRandomCard(card.suits);

    const cardElement = document.querySelector("#card");
    const numberElement = document.querySelector("#number");

    // NUMBER INPUT VALIDATE
    let widthInput = document.getElementById("widthInput").value;
    let heightInput = document.getElementById("heightInput").value;

    if (isNaN(widthInput) || isNaN(heightInput)) {
      alert("Please, enter NUMERIC values for width and height.");
      return;
    }

    // Update card content
    numberElement.innerHTML = selectedNumber;
    cardElement.className = "card " + selectedSuit;

    // Update card dimensions
    cardElement.style.width = widthInput + "px";
    cardElement.style.height = heightInput + "px";
  }

  // New card button
  const myButton = document.getElementById("myButton");

  if (myButton) {
    myButton.addEventListener("click", function() {
      printCard();
    });
  }

  printCard();

  // Enter key for width
  widthInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      printCard();
    }
  });

  // Enter key for height
  heightInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      printCard();
    }
  });

  // Seconds countdown
  let restSeconds = 10;

  function refreshCount() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = restSeconds;

    if (restSeconds === 0) {
      // Refresh page in 10 seconds
      location.reload();
    } else {
      restSeconds--;
    }
  }

  setInterval(refreshCount, 1000);
};

//   ////////////////////////////////////////////////////////

//  OTRAS SOLUCIONES

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

// function generateRandomCard(array) {
//   let indexRandom = Math.floor(Math.random() * array.length);
//   console.log("Resultado del random card");
//   console.log(array[indexRandom]);
//   return array[indexRandom];
// }

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
