import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
   myFavorites:[],
   allCharactersFav:[],
}

export default function reducer(
    state = initialState,
    {type,payload} 
     ){
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites,payload],
                allCharactersFav:[...state.myFavorites,payload],
            }
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(
                fav => fav.id !== Number(payload)
            )
            return {
                ...state,
                myFavorites:  filteredFavs
            }
        case "FILTER":
            const allCharactersFiltered = state.allCharactersFav.filter
            ((char)=>char.gender === payload);
            return{
                ...state,
                myFavorites: allCharactersFiltered 
            }

            case "ORDER":
                const allCharactersFavCopy = [...state.allCharactersFav];
                return{
                    ...state,
                   myFavorites: 
                   payload === "A"
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id)
                }
        default:
            return { ...state }
    }
}

