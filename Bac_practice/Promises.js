const api = "https://jsonplaceholder.typicode.com/todos/1";

const apiData = fetch(api);
console.log(apiData);
const userData = apiData
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

/// promise creation

const cart = ["shirt", "shoes", "pent"];

const promise = createOrder(cart);
console.log(promise);

promise
  .then((data) => {
    console.log("the order is  created with id: " + data);
    return data;
  })
  .then((orderid) => {
    return paymentMode(orderid);
  })
  .then((payInfo) => {
    console.log(payInfo)
    return payInfo;
})
    .then((payInfo)=>{
        return updateOrderSummary(payInfo);
    }).then((payInfo)=>{
        return updatewalletbalance(payInfo);
    }).then((data)=>console.log(data));
//   .catch((err) => console.log(err + " hii"));

///producer
function createOrder(cart) {
  const newPromise = new Promise((resolve, reject) => {
    if (validateCart()) {
      const err = new Error("Cart is not validated");
      reject(err);
    }
    const orderid = 123;
    if (orderid) {
      setTimeout(() => {
        resolve(orderid);
      }, 5000);
    }
  });
  return newPromise;
}

function validateCart() {
  return false;
}

function paymentMode(orderid) {
  return new Promise((resolve, reject) => {
    console.log("payment successfull")
    const payinfo = "500";
    resolve(payinfo);
  });
}

function updateOrderSummary(payinfo){
    return new Promise((resolve,reject)=>{
        console.log(`the order summary is : xyz,\n order completed --> jeans\n --> payment is: ${payinfo} `)
        resolve(payinfo);
    })
}

function updatewalletbalance(payinfo){
    return new Promise((resolve, reject) => {
        resolve(1000-payinfo);
    })
}