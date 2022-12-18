let investment = 1000;
for (let i = 1; i < 11; i++) {
  if (i === 7) {
    investment = investment * 0.25;
  } else {
    investment = investment * 1.1;
  }
  console.log("Years: " + i + " Value: " + investment);
}

function latteTotal() {
  const price = 4.5;
  const salesTaxRate = 0.1;
  const totalAmount = price + price * salesTaxRate;
  console.log("The total is $" + totalAmount);
}

function calculateTotal(price, salesTaxRate) {
  const totalAmount = price + price * salesTaxRate;
  console.log("The total is $" + totalAmount);
}
function calculateTotal(price, salesTaxRate) {
  return price + price * salesTaxRate;
}
const total = calculateTotal(4.5, 0.1);

// Older way:
  function calculateTotal(price, salesTaxRate) {
  return price + price * salesTaxRate;
}
calculateTotal(4.5, 0.1);
//Arrow Functions
// Newer way:
const calculateTotal1 = (price, salesTaxRate) => {
  return price + price * salesTaxRate;
};
calculateTotal1(4.5, 0.1);

array1 = [1, 2, 3, 4, 5];
//printing array with old way 
function printArray(a) {
  for (const key of a) {
    console.log(key);
  }
}

printArray(array1);
// printing array with new way
const printingArray = (a) =>a.forEach(element => {
  console.log(element);
});

printingArray(array1);

 const h1 = document.querySelector('h1').innerHTML += " <a href='http://www.coolsite.net'>site</a>";
