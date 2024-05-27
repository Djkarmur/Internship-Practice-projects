import { Metadata } from "next"
type Props={
    params:{productId:string};
}

export function generateMetadata ({params}:Props):Metadata{
    return {
        title:`Product ${params.productId}`
    }
}

export default function product({params}:Props){
   
    return <h1>product detail of product : {params.productId}  </h1>
}