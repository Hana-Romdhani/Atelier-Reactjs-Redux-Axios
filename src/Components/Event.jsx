import { Button, Card } from "react-bootstrap";

export default function Event(props){

 const [e, usestate]=usestate(props.e)




    
    return  <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`images\${e.img}`} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
        {e.description}
        </Card.Text>
        <p> Price: {e.price}</p>
        <p> nbTickets : {e.nbTickets} </p>
        <p>nbParticipants : {e.nbParticipants}  </p>
        <Button variant="primary"   >book an events  </Button>
      </Card.Body>
    </Card>

    
    </>
    }