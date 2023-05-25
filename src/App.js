import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cards from './components/card/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import Barra from './components/barra/Barra.jsx';
import Contact from './components/contact/Contact.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import { Navigate,useLocation,Route, Routes } from 'react-router-dom';


function App() {
   const navigate = useNavigate();
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

   const Home = () => {
      return (
        <>
         <Barra/>
          <Nav onSearch={onSearch} /> 
          <Cards characters={characters}  onClose={onClose}/>
        </>
      );
    };

    const Contacte = () => {
      return (
        <>
         <Barra/>
         <Contact/>
        </>
      );
    };

    const Detall = () => {
      return (
        <>
         <Barra/>
         <Detail/>
        </>
      );
    };

    const location = useLocation();
   return (
      <div style={{background: 'url(https://images3.alphacoders.com/812/812062.png)',backgroundSize: 'cover', minHeight: '700px'}} >
      <Routes> 
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contacte />} />
      <Route exact path="/detail/:detailId" element={<Detall />} />
      <Route exact path="/form" element={<Form />} />
      </Routes>
      </div>
   );
}

export default App;
