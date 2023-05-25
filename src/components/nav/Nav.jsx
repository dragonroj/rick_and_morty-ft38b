import SearchBar from "./SearchBar.jsx";
import {NavLink} from "react-router-dom"

const Nav =function(props){

    
    return (
        <div>
        <SearchBar
        onSearch={props.onSearch}
        />
        </div>
    )
}
export default Nav;