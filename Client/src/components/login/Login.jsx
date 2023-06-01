import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function Form(props){
    const [userData,setUserData]=useState({
        username:"",
        password:"",
    });

    const [errors,setErrors] = useState({
        username:"",
        password:"",

    })

    const handleImputChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }





}


