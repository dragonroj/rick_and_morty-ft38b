import { useState } from "react";

const Form = function(props) {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handlerChange = event => {
        // console.log(event.target.value);
        //setInput(event.target.value);
        // const [name, value] = event.target;
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        if(event.target.name === "email" && !/\S+@\S+\.\S+/.test(event.target.value)) { // ar
            setErrors({
                ...errors,
                email: "No es un email correcto" // ""
            })
        } else {
            setErrors({
                ...errors,
                email: ""
            })
        }
    }
    // console.log(errors.password);
    // console.log(input.password);
    
    const handlerSubmit = event => {
        //event.preventDefault();
        alert("Enviado!!!")
    }

    return(
        <div className="col-12 col-lg-10 mx-auto" style={{width: '400px','--bs-body-color': 'var(--bs-red)',background:' rgba(0,0,0,0.6)',borderRadius: '10',height: '400px'}}>
            <div className="container py-1" style={{background: 'url(&quot;https://cdn.bootstrapstudio.io/placeholders/1400x800.png&quot;), rgba(255,255,255,0)'}}>
            <form className="fw-bold text-success mb-2" data-bss-hover-animate='pulse' style={{width: '200px',fontSize: '16px'}} onSubmit={handlerSubmit} >
                <h1>{props.name}</h1>
                <label>Nombre: </label>
                <input // ariel
                    name="name"
                    value={input.name}
                    type="text"
                    onChange={handlerChange}
                />
                <hr />
                <label>Email: </label>
                <input
                    name="email"
                    value={input.email}
                    type="email"
                    onChange={handlerChange}
                />
                <p style={{color: "red"}}>
                    { errors.email ? errors.email : null }
                </p>
                <hr />
                <label>Password: </label>
                <input
                    name="password"
                    value={input.password}
                    type="password"
                    onChange={handlerChange}
                />
                <hr />
                <button
                    type="submit"
                    disabled={errors.email || errors.name || errors.password}// ""
                >Enviar</button>
            </form>
            </div>
        </div>
    )
}
export default Form;