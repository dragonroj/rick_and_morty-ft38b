import Card from '../card/Card.jsx';
import { connect,useDispatch } from 'react-redux';
import { filtersCards,ordersCards } from '../../redux/actions.js';
import {useState} from "react";


const Favorites= ({myFavorites})=>{

const [aux,setAux]=useState(false);
const dispatch = useDispatch();
const handleOrder = (event) => {
        dispatch(ordersCards(event.target.value));
        setAux(!aux)
};

const handleFilter =(event)=>{
        dispatch(filtersCards(event.target.value))
};
    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Decendente</option>
            </select>
            <select  onChange={handleFilter} >
                <option value="Male"></option>
                <option value="Female"></option>
                <option value="Genderless"></option>
                <option value="unknown"></option>
            </select>
                {myFavorites?.map(
                    ({id,name,status,species,gender,origin,image
                        ,onClose })=>{
                            return(
                                        <Card
                                        key={id}
                                        id={id}
                                        name={name}
                                        status={status}
                                        species={species}
                                        gender={gender}
                                        origin={origin}
                                        image={image}
                                        onClose={onClose}
                                        />
                                    );
                                        }
                                )}
        </div>
    );
};

export default Favorites;