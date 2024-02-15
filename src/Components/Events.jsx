import Event from "./Event";
import listEvent from "../data/events.json";
import { Row } from "react-bootstrap";

export default function Events(){







return <>
 <Row> 
{listEvent?.map((element,index)=>{
    return<Event key={index} e={element}/>

})}
</Row>
</>
}
