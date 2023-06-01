import { ADD_FAV } from "./types";
import { REMOVE_FAV } from "./types";

export function addFav (character){
    return{
        type:ADD_FAV,
        payload:character
    }
}
export function removeFav (id){
    return{
        type:REMOVE_FAV,
        payload:id
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

