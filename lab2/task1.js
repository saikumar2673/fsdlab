function mergeArrays(...arrays) {
    return [...arrays.flat()];
  }
 const arr=mergeArrays([1,2],[3,4]);
 console.log([[1,2],[3,4]].flat());
console.log(mergeArrays([1,2],[3,4],[56,7]));
let a=[1,2,3];
let b=[4,5,6];
let c=[...a,...b];
console.log(c);
console.log(...a);