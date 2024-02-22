import Event from "./Event";
import listEvent from "../data/events.json";
import { Row,Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Events(){
    const [showAlert,setShowalert ]=useState(false)
    const [showmessage,setmessage ]=useState(false)

     const  modificationalert=()=>{
        setShowalert(true),
        setTimeout(() => setShowalert(),1000);
     }

   useEffect(()=>{
    setmessage(true),
 setTimeout(() => setmessage(false),1000);
    return ()=>{console.log('unmontage ')
  //  clearTimeout(() => "hello",1000);

}
   },[])// pour afficher le message une seul fois 




return <>
 <Row> 
 {
    showmessage &&   <Alert  variant="success">
Welcome to our events  </Alert>
}
{listEvent?.map((element,index)=>{
    return<Event key={index} e={element} functionalert={modificationalert}/>

})}
{
    showAlert &&   <Alert  variant="success">
    You have booked an event
  </Alert>
}
</Row>
</>
}
