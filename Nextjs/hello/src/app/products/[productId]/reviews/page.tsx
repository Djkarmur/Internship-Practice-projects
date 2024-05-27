import Link from 'next/link'
export default function reviews(){
    return <>
    <h1>reviews</h1>
    <ul>
    <Link href='reviews/1' > <li>review 1</li> </Link>
       <Link href='reviews/2' replace> <li>review 2</li> </Link>
       <Link href='reviews/3'> <li>review 3</li> </Link>
    </ul>
    </>
     

}