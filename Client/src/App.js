import {useState, useEffect} from 'react';
import axios from 'axios';
import Cards from './components/card/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import Barra from './components/barra/Barra.jsx';
import Contact from './components/contact/Contact.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Login from './components/login/Login.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import { useLocation,Route, Routes,useNavigate } from 'react-router-dom';


function App() {
   const [characters, setCharacters]= useState([]);
   const navigate = useNavigate();
   const {pathname}=useLocation();
   const [access, setAccess]=useState(false);
   const onSearch = id => {
    console.log(id);
     // axios(`https://rickandmortyapi.com/api/character/${id}`)
            //http://localhost:3001/rickandmorty/character/3
      //axios(`http://localhost:3001/rickandmorty/character/2`)
      axios(`http://localhost:3001/rickandmorty/onsearch/${id}`)
        .then(({ data }) => {
          console.log(data);
          if (data.name) {
            console.log("data.name  "+data.name);
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

    function login(userData) {
      //console.log(userData);
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         console.log(access);
         access  && navigate("/home" );
        
      });
   }

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

    const Favo = () => {
      return (
        <>
         <Barra/>
         <Favorites/>
        </>
      );
    };


    const Log= () => {
      return (
        <>
         <Login />
        </>
      );
    };

    ///const location = useLocation();
   return (
      <div style={{background: 'url(https://images3.alphacoders.com/812/812062.png)',backgroundSize: 'cover', minHeight: '700px'}} >
      <Routes> 
    {/* <Route exact path="/" element={<Home />} /> */}
    <Route exact path="/" element={<Form login={login}/>} />
      <Route exact path="/contact" element={<Contacte />} />
      <Route exact path="/detail/:detailId" element={<Detall />} />
      {/* <Route exact path="/form" element={<Form />} /> */}
      <Route exact path="/login" element={<Log />} />
      <Route exact path="/favs" element={<Favo />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      </div>
   );
}

export default App;
