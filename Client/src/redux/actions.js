import { ADD_FAV } from "./types";
import { REMOVE_FAV } from "./types";
import axios from "axios";


export function addFav (char){
    return function(dispatch){
        axios
        .post("http://localhost:3001/rickandmorty/favs",char)
        .then(response => {
            return dispatch({
                type: ADD_FAV,
                payload: response.data,
            });
        });
    };
}

export function removeFav (id){
    return function(dispatch){
        axios
            .delete("http://localhost:3001/rickandmorty/favs")
            .then(response => {
                return dispatch({
                    type:REMOVE_FAV,
                    payload:response.data,
                })
            })
    }
}

export const filtersCards = (gender) => {
    return {
        type: "FILTER",
        payload: gender
     }
}

export const ordersCards = (order) => {
    return {
        type: "ORDER",
        payload: order,
     }
}

