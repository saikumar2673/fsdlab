// Given the following array:
// const colors = [‘red’, ‘green’, ‘blue’, ‘yellow’]
// Use array destructuring to extract the first and second elements of the array into
// individual variables.
// Use array destructuring to extract the second and fourth elements of the array into
// individual variables.

const arr=['red','blue','green','yellow'];
const [a, b] = arr;
console.log('first color '+a);  
console.log('second color '+b); 

const [,c, ,d] = arr;
console.log('second color '+c); 
console.log('fourth color '+d);

