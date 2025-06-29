/** @format */

let salesData = [
  { product: "Laptop", price: 2000 },
  { product: "Mobile", price: 1000 },
  { product: "Tablet", price: 500 },
  { product: "Smartwatch", price: 300 },
  { product: "Headphones", price: 150 },
];

let totalSale = salesData.reduce(
  (accumulator, sale) => accumulator + sale.price,
  0 //initial Value for accumulator
);

//filter always return an array be it an empty one.
let userActivity = [
  { user: "Alcice", activityCount: 45 },
  { user: "bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];
//find most active user
let res = userActivity.reduce((acc, val) =>
  val.activityCount >= acc.activityCount ? val : acc
);
console.log(res);
