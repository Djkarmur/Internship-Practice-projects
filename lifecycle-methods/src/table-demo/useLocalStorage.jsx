import { useEffect, useState } from "react"

function getValue(key,value){
    const data = JSON.parse(localStorage.getItem(key));
      if(data) return data;
    if(value instanceof Function) return value();
    return value;
}

export default function useLocalStorage(key,initialvalue) {;
 const [value,setvalue] = useState(() => 
 {
    return getValue(key,initialvalue)
 } )

    useEffect(()=>{
     localStorage.setItem(key,JSON.stringify(value))
    },[value])


 return [value,setvalue]
}