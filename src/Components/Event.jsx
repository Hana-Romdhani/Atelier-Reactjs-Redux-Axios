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
  const navigate = useNavigate();
  const updateEvent = () => {
   // Appel de la fonction de mise à jour passée en tant que prop
    // Ajoutez ici votre logique de mise à jour de l'événement
    // Par exemple, vous pouvez envoyer une requête au serveur pour mettre à jour l'événement

    // Une fois que la mise à jour est terminée, vous pouvez naviguer vers une autre page
    navigate('/events'); // Par exemple, naviguer vers la page des événements
  };



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