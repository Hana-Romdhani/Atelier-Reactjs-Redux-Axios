import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { deleteEvent } from "../service/api";

export default function Event(props) {

  const [e, SetEvents] = useState(props.e)
  const bookEvent = () => {
    props.functionalert(),


      SetEvents((previousstate) => ({
        ...previousstate,
        nbParticipants: previousstate.nbParticipants + 1,
        nbTickets: previousstate.nbTickets - 1
      }))
  }

  const functionlike = () => {
    SetEvents((previousstate) => ({
      ...previousstate,
      like: !previousstate.like,
    }))
  }




  return <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.nbTickets === 0 ? "images/sold_out.png" : `images/${e.img}`} />
      <Card.Body>
        {/* <Card.Title><Link to={`/details/${e.name}`}> {e.name}</Link></Card.Title> */}
        <Card.Title><Link to={`/events/details/${e.id}`}> {e.name}</Link></Card.Title>

        <Card.Text>
          {e.description}
        </Card.Text>
        <p> Price: {e.price}</p>
        <p> nbTickets : {e.nbTickets} </p>
        <p>nbParticipants : {e.nbParticipants}  </p>

        <Button variant="primary" onClick={bookEvent} disabled={e.nbTickets === 0 ? true : false} >book an events  </Button>
        <Button variant="success" onClick={functionlike} >{e.like ? "dislike" : "like"} </Button>

        <Link   className="text-decarotion-none btn btn-sm btn-danger mx-1" to={`/events/update/${e.id}`}> update</Link>
        <Button variant="danger" onClick={() => { props.deleteevent(e.id) }} >delete</Button>

      </Card.Body>
    </Card>


  </>
}