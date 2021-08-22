const pizzaOven = (crustType, sauceType, cheeses, toppings) => {
    let pizza = {
        crustType,
        sauceType,
        cheeses,
        toppings
    }
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella, feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("stuffed crust", "traditional", ["limburger"], ["pineapple", "anchovies"]);
var pizza4 = pizzaOven("sicillan", "marinara", ["gouda", "pepperjack", "gruyere"], ["mushrooms", "peppers", "onions","spinach"]);

const crustTypes = ["deep dish", "hand tossed", "stuffed crust", "sicillian"];
const sauceTypes = ["traditional", "marinara", "spicy", "alfredo"];
const cheeseList = ["mozzarella", "ricotta", "cheddar", "havarti", "provolone", "gouda", "pecorino-romano", "gruyere", "pepperjack", "limburger"];
const toppingList = ["pepperoni", "sausage", "mushrooms", "peppers", "onions","spinach", "pineapple", "anchovies", "olives"];

const randomPizza = () => {
    var crustType = crustTypes[Math.floor(Math.random()*crustTypes.length)];
    var sauceType = sauceTypes[Math.floor(Math.random()*sauceTypes.length)];
    var cheeses = cheeseList.filter(cheese => Math.random()<0.5);
    var toppings = toppingList.filter(topping => Math.random()<0.5);
    return pizzaOven(crustType, sauceType, cheeses, toppings);
}

const pizza = randomPizza();
console.log(pizza.crustType);
console.log(pizza.sauceType);
console.log(pizza.cheeses);
console.log(pizza.toppings);