import {useState} from 'react';
import axios from 'axios';
//import './App.css';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
import Nav from './components/nav/Nav.jsx';
//import characters from './data.js';

function App() {
   const [characters, setCharacters]= useState([]);
   
   const onSearch = id => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
      // setCharacters([...characters,example])
   }

   const onClose = id => {
      setCharacters(characters.filter(caracter => 
         caracter.id !== Number(id)))
   }
   return (
      <div style={{background: 'url(https://images3.alphacoders.com/812/812062.png)',backgroundSize: 'cover', minHeight: '700px'}} >
         <div className="container pt-5 pt-xl-8" style={{marginTop: '10px'}}>
          <Nav
               onSearch={onSearch}
         />
         
         {/* <Cards characters={characters} onClose={onClose}/> */}
        
      </div>

         <div className="container-fluid pt-10 pt-xl-15" style={{margin:'auto', paddingTop:'20px' }} >
         <div className="row pt-5">
               <Cards characters={characters}  onClose={onClose}/>
         </div>
         </div>
        
        
         
        
      </div>
   );
}

export default App;
