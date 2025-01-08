// Create a function calculateTotal that takes an arbitrary number of numeric values
// (using the rest operator) and returns their sum.

function calculateTotal(...numbers) {
    console.log(numbers);
    return numbers.reduce((total, current) => total + current, 0);
  }

  console.log(calculateTotal(10, 20, 30));
  console.log(calculateTotal(5, 15, 25, 35)); 
  console.log(calculateTotal());