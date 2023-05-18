import {useState} from 'react';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import Barra from './components/barra/Barra.jsx';
function App() {
   const [characters, setCharacters]= useState([]);
   
   const onSearch = id => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          //console.log(data.name);
          if (data.name) {
            // Verificar si el personaje ya existe en la lista
            const isCharacterExists = characters.some(character => character.id === data.id);
            if (isCharacterExists) {
              window.alert('¡Este personaje ya fue agregado!');
            } else {
              setCharacters(oldChars => [...oldChars, data]);
            }
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            window.alert('¡No se encontró el personaje!');
          } else {
            console.error(error);
          }
        });
    };

   const onClose = id => {
      setCharacters(characters.filter(caracter => 
         caracter.id !== Number(id)))
   }
   return (
      <div style={{background: 'url(https://images3.alphacoders.com/812/812062.png)',backgroundSize: 'cover', minHeight: '700px'}} >
      <Barra/>
      <div className="container pt-5 pt-xl-8" style={{marginTop: '10px'}}>
          <Nav
               onSearch={onSearch}
         />
         
         {/* <Cards characters={characters} onClose={onClose}/> */}
        
      </div>

         <div className="container-fluid pt-10 pt-xl-15" style={{margin:'auto', paddingTop:'10px' }} >
         <div className="row pt-5">
               <Cards characters={characters}  onClose={onClose}/>
         </div>
         </div>
        
        
         
        
      </div>
   );
}

export default App;
