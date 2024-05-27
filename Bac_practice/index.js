// var x=1;

// a();
// b();

// function a(){
//   var x=30;
//   console.log(x);
// }


// function b(){
//   var x=60;
//   console.log(x);
// }

// console.log(x);

const num = [1,2,3,4,5,6,78,9];

// let square = num.map((n) => Math.pow(n,2));

// let bigsquare = square.filter((val) => val>25);
// console.log(bigsquare); 
const initialVal = 0;
let acc = num.reduce((acc,val) => acc+val,initialVal);

console.log(acc);



