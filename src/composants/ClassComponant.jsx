import React  from "react";
class  ClassComponant extends React.Component{
 //constructeur ou non 
// constructor(props){
//     super(props);
//     this.state={
//         value1: "hello state1",
//           obj:{
//             valobj:10
//           }
//     }
// }
       state={
            value1: "hello state1",
              obj:{
                valobj:10
              }
        }
render(){
   
    return (<>
     <h1>ClassComponant { this.props.name}</h1>
     <p> { this.state.value1}   & { this.state.obj.valobj}</p>

    </>)
   
}
}

export default ClassComponant;