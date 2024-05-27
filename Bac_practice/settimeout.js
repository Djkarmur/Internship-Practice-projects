// function seq() {
//     for (var i = 0; i < 4; i++) {
//       function close(i) {
//         setTimeout(function () {
//           console.log(i);
//           i+58;
//         }, i * 1000);
//       }
//       close(i);
//     }
//   }
//   seq();

//   console.log("hii");
//   console.log("hello");

setTimeout(() => {
    console.log("timer");
}, 5000);

async function fetchData(){
    fetch('https://api.github.com/users/Djkarmur').then((res)=> res.json()).then((d)=>console.log(d));
}
fetchData();


console.log(1);
 function fun1(a){
    console.log("data is :"+ a);
 }
 fun1(25);
