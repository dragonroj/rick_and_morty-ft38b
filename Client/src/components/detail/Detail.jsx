import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail(props){
const {detailId} =useParams();
const [character,setCharacter] = useState({});

useEffect(() => {
    //axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
      axios(`http://localhost:3001/rickandmorty/detail/${detailId}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [detailId]);

return (
<div className="col-12 col-lg-10 mx-auto" style={{width: '200px','--bs-body-color': 'var(--bs-red)',background:' rgba(0,0,0,0.6)',borderRadius: '10',height: '400px'}}>
   <Link to="/">
      <button>Go back</button>
   </Link>
    <h2 className="text-center" style={{width: '200px',fontSize: '12px'}}>Detail</h2>
    <h4 className="fw-bold text-success mb-2" data-bss-hover-animate='pulse' style={{width: '200px',fontSize: '16px'}}>{character.name}</h4>
    <img src={character.img} alt={character.name}></img>
    {character.origin &&<h3 className="text-center" style={{width: '200px',fontSize: '12px'}}>{character.origin.name}</h3>}
     <h4 className="text-center" style={{width: '200px',fontSize: '12px'}}>kol</h4> 

</div>
    )
}