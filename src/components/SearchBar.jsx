import {useState} from "react";
export default function SearchBar(props) {
   const [id,setId] = useState("");

   const handleChange= event => {
      const {value} = event.target;
      setId(value);
      
   }

   return (
      
          <div className="row">
          <div className="col text-end">
            <button className="btn btn-primary" style={{background: 'var(--bs-btn-active-bg)',paddingRight: '21px',paddingTop: '2.6px',paddingBottom: '4.6px'}} onClick={() => props.onSearch(id)}>Agregar</button></div><div className="col text-start">
               <input 
               type='search'
               name='search'
               style={{ width: '200px', margiLeft: '10px' }}
               id='search'
               onChange={handleChange}
               /></div>
            </div>
      
   );
}
