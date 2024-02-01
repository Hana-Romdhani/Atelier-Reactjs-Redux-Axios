
import './App.css'
import FunctionalComponent from './composants/FunctionalComponent'
import ClassComponant from './composants/classcomponant'

function App() {
 const hello=()=>{
  return <p>Hello World{10+8}</p>
 }
    let name="Jane Doe"
  const element=<h1>Hello,  {name}</h1>
  const tab=[{
    name:"twin3",module:"react"
  },{
    name:"twin4",module:"spring js "
  }]
  return (
    <>
    <ClassComponant name="hana"/>
    <FunctionalComponent test="test propos"/>

      {hello()}
      {hello("Hello")}

     <p style={{color : "red"}}> {element}</p>

      <ul>{
      tab.map((e,i)=>{
        return <li key={i}>{e.name},{e.module}</li>
      })}</ul>
      <button onClick={()=>{alert("Hello world")}}>Click me </button>
    </>
  )
}

export default App
