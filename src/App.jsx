import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { findLongestWord,countOccurrences,calculateTotalScore } from './Ecmascript/fichier.js';
import { search } from './Ecmascript/search.js';

//APP : nom de composant     <App />
function App() {
  const [count, setCount] = useState(0)
   var person={
    "a": "test1",
    "b" : "test2"
   }
   console.log(person)
   function test(){
    console.log ("hello word");
   }
   test()
  //  const testfleche=(a) =>{
  //   console.log ("hello word");
  //  }
  //  testfleche(a );
  // const a=["2","3"]
  // const newA=a.map(p=>p*2)
  // console.log(newA)
  console.log(person)
    person = {
      ...person,
    "email": "test@gmail.com", 
   };
   console.log(person)

   const listdesmot=["Bonjour",'je','suis','hana']
   let fn=findLongestWord(listdesmot)
   console.log(fn)

const input=[
  ["a","b","c"],
  ["c","d","f"],
  ["d","f","g"],
];

let ocuus = countOccurrences(input);
console.log(ocuus);
let students=[
  {
    name: 'baba',id:101,note:1
  }, {
    name: 'b',id:103,note:50
  }, {
    name: 'bab',id:104,note:2
  }, {
    name: 'baa',id:105,note:5
  }
];


const totalScore = calculateTotalScore(students);
 console.log(totalScore)

// Variable globale pour stocker la dernière valeur ID utilisée
let lastId = 1;

// Créer un tableau d'objets vide
const Tab = [];

// Ajouter des entrées de votre choix en utilisant la méthode "push" ou "unshift"
Tab.push({
  nom: "John Doe",
  âge: 30,
});
Tab.unshift({
  nom: "Jane Doe",
  âge: 25,
});

// Ajouter une propriété ID à chaque objet dans le tableau
Tab.forEach((object) => {
  object.id = lastId++;
});
let val=search(Tab,1)
// Afficher le tableau
console.log(val);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
