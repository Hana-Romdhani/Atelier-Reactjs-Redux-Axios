import Event from "./Event";
//import listEvent from "..";
import { Row,Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteEvent, getallEvents } from "../service/api";

export default function Events(){
    const [showAlert,setShowalert ]=useState(false)
    const [showmessage,setmessage ]=useState(false)
    const [listEvent,setListEvents ]=useState([])

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

   useEffect(()=>{
      const  fetchlist=async()=>{
         const events=await getallEvents();
         setListEvents(events.data);
      }
      fetchlist();
   },[])
   const deleteEvents=async(id)=>{
      // console.log(e.id)
     await deleteEvent(id)

     setListEvents(listEvent.filter((e)=> e.id != id ))
     console.log(listEvent)
    }

return <>
 <Row> 
 {
    showmessage &&   <Alert  variant="success">
Welcome to our events  </Alert>
}
{listEvent?.map((element,index)=>{
    return<Event key={index} e={element} functionalert={modificationalert} deleteevent={deleteEvents}/>

})}
{
    showAlert &&   <Alert  variant="success">
    You have booked an event
  </Alert>
}
</Row>
</>
}
