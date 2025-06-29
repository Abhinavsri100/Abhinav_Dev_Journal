/** @format */

let chaiTypes = ["masala chai", "ginger chai", "lemon chai", "milk chai"];
console.log(chaiTypes.length); // 4
chaiTypes.push("mint chai"); // Adds "mint chai" to the end of the array
chaiTypes.pop(); // Removes the last element from the array
let index = chaiTypes.indexOf("ginger chai"); // Finds the index of "ginger chai"
if (index !== -1) {
  chaiTypes.splice(index, 1); // Removes "ginger chai" from the array
}
// where in splice method first parameter is the index of the element to be removed and second parameter is the number of elements to be removed
chaiTypes.forEach((chai, index) => {
  console.log(chai); // Prints each type of chai
});
// Output:
// masala chai
// lemon chai
// milk chai
chaiTypes = chaiTypes.map((chai) => chai.toUpperCase()); // Converts each type of chai to uppercase
console.log(chaiTypes); // ["MASALA CHAI", "LEMON CHAI", "MILK CHAI"]
chaiTypes = chaiTypes.filter((chai) => chai.includes("CHAI")); // Filters types of chai that include "CHAI"
console.log(chaiTypes); // ["MASALA CHAI", "LEMON CHAI", "MILK CHAI"]
chaiTypes = chaiTypes.sort(); // Sorts the types of chai in alphabetical order
console.log(chaiTypes); // ["LEMON CHAI", "MASALA CHAI", "MILK CHAI"]
chaiTypes = chaiTypes.reverse(); // Reverses the order of the types of chai

let moreChaiTypes = ["green chai", "black chai", "white chai"];
let allChaiTypes = chaiTypes.concat(moreChaiTypes); // Combines two arrays into one
console.log(allChaiTypes); // ["MILK CHAI", "MASALA CHAI", "LEMON CHAI", "green chai", "black chai", "white
// chai"]
//OR
let newChaiTypes = [...chaiTypes, ...moreChaiTypes]; // Using spread operator to combine arrays

//OBJECTS

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "full Cream Milk",
    spices: ["cardamom", "ginger", "cinnamon"],
    sugar: "Brown Sugar",
  },
};

let updatedChaiRecipe = {
  ...chaiRecipe,
  ingredients: {
    ...chaiRecipe.ingredients,
    spices: [...chaiRecipe.ingredients.spices, "black pepper"],
  },
};
console.log(updatedChaiRecipe);
// {
//   name: "Masala Chai",
//   ingredients: {
//     teaLeaves: "Assam Tea",
//     milk: "full Cream Milk",
//     spices: ["cardamom", "ginger", "cinnamon", "black    pepper"],
//     sugar: "Brown Sugar"
//   }
// }

let { name, ingredients } = chaiRecipe; // Destructuring assignment to extract properties from the object
console.log(name); // "Masala Chai"
console.log(ingredients); // { teaLeaves: "Assam Tea", milk: "full Cream Milk", spices: ["cardamom", "ginger", "cinnamon"], sugar:
let [firstCh, secondCh] = allChaiTypes; // Destructuring assignment to extract first two elements and rest of the array
console.log(firstCh); // "MILK CHAI"
console.log(secondCh); // "MASALA CHAI"
let [firstChai, ...restCh] = allChaiTypes; // Destructuring assignment to extract first element and rest of the array
console.log(firstChai); // "MILK CHAI"
console.log(restCh); // ["MASALA CHAI", "LEMON CHAI", "green chai", "black chai", "white chai"
console.log(restCh); // ["LEMON CHAI", "green chai", "black chai", "white chai"]\
