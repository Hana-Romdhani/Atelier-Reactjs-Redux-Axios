import { useState } from "react"

 export default function FunctionalComponent(props){
    //hook
 const [state1,setState1]=useState(0);



return <h1>FunctionalComponent   {props.test}, the value of the stataes {state1}</h1>
}