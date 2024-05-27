// var num = [1,2,3,4,5];
// console.log(Math.max(3,5,6,8,98,23,4,5,6,7));
// let obj1={}

// Object.assign(obj1,{z:4,d:5,s:3},{q:5,a:1,K:9});
// console.log(obj1);



function spread(a,b){
    let sum=0;
    return sum=a+b;
}

const arr=[2,67];

console.log(spread(...arr));  //spread operator  :- taking an array and passing an indivisual value

function rest(...args){    //rest operator :- convert indivisual value into an array.
    let sum=0;
    args=args.flat();
    
    for(a in args){
        

       sum=sum+args[a];

    }
    return sum;
}

console.log(rest([23,4,5,6]));


const addAndMultiple = (a,b,...args) =>{
    let mul=a*b;
    let sum=0;

    for(i of args){
        sum +=i;

    }
    return {sum,mul};
}
const arr1 = addAndMultiple(2,4,8,4,3,2,4);
console.log(arr1);


//special array like object ***arguments***
function args(){                        //arguments are both array like iterable.
    console.log(arguments[0]);          // arrow functions doesn't support arguments.
    console.log(arguments[1]);
}

args('dipak','karmur'); 


//destructuring 
//array
const desArr=[ "dipak",21,52];

const [name,age]=desArr;

console.log(age);

//object

const obj1={
    firstName:"dipak",
    lastName:"karmur",
    id:21
}

const {firstName,lastName,id} = obj1;    //Name should be exact same with upper object.

console.log(firstName);

