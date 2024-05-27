import { useState,useEffect } from "react";

export default function useDebounce(value,delay=500){
    const [debounce,setDebounce]= useState(value);

    useEffect(() => {
     const timeout =  setTimeout(() => {
        setDebounce(value);
      }, delay);
    
      return () => {
        clearTimeout(timeout);
      }
    }, [value,delay])
    
    return debounce;

}