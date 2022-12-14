const pizzaBase1 = document.querySelector(".pizza-base-1");
const pizzaBase2 = document.querySelector(".pizza-base-2");
const pizzaTopping1 = document.querySelector(".pizza-topping-1");
const pizzaTopping2 = document.querySelector(".pizza-topping-2");
const pizzaTopping3 = document.querySelector(".pizza-topping-3");
const progressPizza = document.querySelector(".progress-pizza");
const finalPizza = document.querySelector(".progress-pizza");
const finalText = document.querySelector(".final-text");
const contBases = document.querySelector(".container-bases");
const contToppings = document.querySelector(".container-topping");

let base;
let baseSize;
let topping;
let toppingType;
pizzaBase1.addEventListener("dragstart", (e) => {
  base = pizzaBase1;
  baseSize = "regular";
});
pizzaBase2.addEventListener("dragstart", (e) => {
  base = pizzaBase2;
  baseSize = "large";
});
pizzaTopping1.addEventListener("dragstart", (e) => {
  topping = pizzaTopping1;
  toppingType = "onion";
});
pizzaTopping2.addEventListener("dragstart", (e) => {
  topping = pizzaTopping2;
  toppingType = "corn";
});
pizzaTopping3.addEventListener("dragstart", (e) => {
  topping = pizzaTopping3;
  toppingType = "capsicum";
});
progressPizza.addEventListener("dragover", (e) => {
  e.preventDefault();
});
progressPizza.addEventListener("drop", (e) => {
  if (toppingType) {
    base.remove();
    progressPizza.append(topping);
    setTimeout(() => {
      contToppings.style.display = "none";
      topping.style.backgroundImage = `url(images/${toppingType}.jpg)`;
      finalText.innerHTML = `Hurray! Your ${baseSize} pizza with ${toppingType} is ready. 🤩`;
      finalText.style.display = "block";
    }, 1000);
  } else {
    contBases.style.display = "none";
    contToppings.style.display = "flex";

    e.target.append(base);
  }
});
