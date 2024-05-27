const obj1 = {
    name: "John",
    age: 30,
    nested:{
      last:"doe"
    }
  };
   //shallow copy methods
  //const obj2 = Object.assign({},obj1);
  //const obj2= {...obj1}
  //const obj2= Object.create(obj1);
  
  //deep copy methods
  const obj2 = JSON.parse(JSON.stringify(obj1))
  
  obj2.name = "Jane";
  
  
  console.log(obj1.name);
  console.log(obj2.name);
  
  obj2.nested.last = "andrei";
  console.log(obj1.nested.last)// "Jane"
  console.log(obj2.nested.last)
  
  
  
  //Array
  const arr1=[1,2,3,4];
  
  //const arr2=arr1;
  
  
  
  
  let arr2= Array.from(arr1);
  
  arr2[0]=3000;
  
  console.log(arr1);
  console.log(arr2);
  
  
  