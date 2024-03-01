
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addEvent, editEvent, getallEvents } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEvent() {
  const { id } = useParams();
 
    const [EventItem,setEventItem ]=useState({name:"",
    description:"",
    img:"",
    price:0,
    nbTickets:0,
    nbParticipants:0,
    like:false
})

useEffect(() => {
  if (id!=null) {
    const fetchEvent = async () => {
      try {
        const response = await getallEvents(id);
        setEventItem(response.data); 
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchEvent();
  }
  
}, [id]);


const navigate= useNavigate()
 const OnInputChange=(e)=>{
    setEventItem({
        ...EventItem,[e.target.name]:e.target.value
    })

 }
 const OnFileChange=(e)=>{
    setEventItem({
        ...EventItem,[e.target.name]:e.target.files[0].name
    })

 }
 
 

//    const AddEvents=async()=>{
 
//  const resultat=await addEvent(EventItem);
 
//    if(resultat.status==201)
//       navigate('/events')
//    } 
const AddEvents = async () => {
  if (id!=null) {
    await editEvent(id,EventItem);
  } else {
    await addEvent(EventItem);
  }
  navigate('/events');
};


  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter a Name"
            value={EventItem.name}
            onChange={(e)=>{OnInputChange(e)}}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
            value={EventItem.description}
            onChange={(e)=>{OnInputChange(e)}}

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={EventItem.price}
            onChange={(e)=>{OnInputChange(e)}}

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
          value=  {EventItem.nbTickets}
          onChange={(e)=>{OnInputChange(e)}}

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={(e)=>{OnFileChange(e)}}

          />
        </Form.Group>
        <Button variant="primary" onClick={AddEvents} >
        {id!=null ? 'Update Event' : 'Add  Event'}
        </Button>
        <Button  variant="secondary"  onClick={()=> {navigate('/events')}}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}
