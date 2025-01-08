const person={
    name:'saikumar',
    address:
    {
        street:'jp',
        city:'mncl'
    }
}
const { address: { street, city } } = person;

console.log(street);  
console.log(city);  
