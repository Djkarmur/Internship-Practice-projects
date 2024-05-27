import { notFound } from "next/navigation";



export default function product({params}:{params:{reviewId:string}}){
    console.log(params)
   
    if(parseInt(params.reviewId) > 1000){
         notFound();
    }

    return <h1>product review of product : {params.reviewId}  </h1> 
}