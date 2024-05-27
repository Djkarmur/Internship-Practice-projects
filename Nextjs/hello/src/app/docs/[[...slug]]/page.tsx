/// catch all segments
export default function concepts({params}: {params:{slug:string[]}}){
    
    if(params.slug?.length === 2){
       return <h1>docs of concept: {params.slug[0]} and feature : {params.slug[1]}</h1>

     }else if(params.slug?.length === 1){
        return <h1>docs of concept: {params.slug[0]}</h1>
     }
     return <h1>docs home page</h1>
      
    
}