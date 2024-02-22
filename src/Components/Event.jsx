import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Event(props){

 const [e, SetEvents]=useState(props.e)
 const  bookEvent=()=>{
       props.functionalert(),


       SetEvents((previousstate)=>({
        ...previousstate,
        nbParticipants: previousstate.nbParticipants+1,
        nbTickets: previousstate.nbTickets-1
    }))
 }




const functionlike =()=>{
    SetEvents((previousstate)=>({
        ...previousstate,
        like: !previousstate.like,
    }))
}


    
    return  <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.nbTickets===0?"images/sold_out.png":`images/${e.img}`} />
      <Card.Body>
        <Card.Title><Link to={`/details/${e.name}`}> {e.name}</Link></Card.Title>
        <Card.Text>
        {e.description}
        </Card.Text>
        <p> Price: {e.price}</p>
        <p> nbTickets : {e.nbTickets} </p>
        <p>nbParticipants : {e.nbParticipants}  </p>

        <Button variant="primary"  onClick={bookEvent} disabled={e.nbTickets===0?true:false} >book an events  </Button>
        <Button variant="danger"  onClick={functionlike} >{e.like?"dislike":"like"} </Button>

      </Card.Body>
    </Card>

    
    </>
    }