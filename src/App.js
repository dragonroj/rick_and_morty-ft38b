//import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div style={{background: 'url(https://images3.alphacoders.com/812/812062.png)',backgroundSize: 'contain'}} >
         <div className="container pt-5 pt-xl-8" style={{marginTop: '10px'}}>
          <SearchBar onSearch={(charactersID) => window.alert(charactersID)}/>
          </div>

         <div className="container pt-5 pt-xl-5" >
               <Cards characters={characters}/>
         </div>
        
        
         
        
      </div>
   );
}

export default App;
