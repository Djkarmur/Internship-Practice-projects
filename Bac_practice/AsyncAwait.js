
//async function always returns a promise if value is already a promise then simply return it.
const promise = new Promise((resolve,reject)=>{
   
        resolve("hello @all")
    
    
})

async function getData(){
    //return "hii";
    //return promise;
}

// const data = getData();
// console.log(data);
// data.then((d)=>console.log(d))


// async function showData(){
//     const a= await promise;
//     console.log(a);
// }
// showData();


// function data(){
//     promise.then((res)=> console.log(res));
//     console.log("namaste");
// }
// data();

// const p1 =  new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("1st promise resolved")
//     }, 5000);
// })

// const p2 =  new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("2nd promise resolved")
//     }, 5000);
// })

// const func1 = async function(){
//     const pr1 = await p1;
//     console.log("1");
//     console.log(pr1);

//     const pr2 = await p2;
//     console.log("2");
//     console.log(pr2);
// }

// func1();



const API = 'https://api.github.com/users/Djkarmur';

const func2 = async function (){

    try {
        const responseObject = await fetch(API);                           /// It returns a promise   (response object)
        const jsonData = await responseObject.json();                  // .json() also returns a promise
        console.log(jsonData);

    } catch (error) {
        console.log(error);
    }
        
    



           // fetch(API).then((data)=> data.json()).then((d)=> console.log(d)); 
}

func2();