import { useState } from "react";

const Form = function({ login }) {
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    });

    const [errors,setErrors] = useState({
        email:"",
        password:"",

    })
 

  const handlerChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    if (event.target.name === "email" && !/\S+@\S+\.\S+/.test(event.target.value)) {
      setErrors({
        ...errors,
        email: "No es un email correcto"
      });
    } else {
      setErrors({
        ...errors,
        email: ""
      });
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
   
    const { email, password } = userData;
    //console.log("email:", email);
   // console.log("password:", password);
    setUserData({
        ...userData,
        "email": email,"password": password
    })
    login(userData);
  };

  return (
    <div className="m-auto w-lg-75 w-xl-50">
      <h2 className="text-info fw-light mb-5" style={{ textAlign: 'center' }}><i className="fa fa-diamond"></i>Welcome</h2>
      <div className="col-12 col-lg-10 mx-auto" style={{ width: '400px', '--bs-body-color': 'var(--bs-red)', background: ' rgba(0,0,0,0.6)', borderRadius: '30', height: '400px' }}>
        <div className="container py-1" style={{ background: 'url(&quot;https://cdn.bootstrapstudio.io/placeholders/1400x800.png&quot;), rgba(255,255,255,0)' }}>
          <div className="container-fluid" style={{}}>
            <div className="row mh-100vh">
              <form className="fw-bold text-success mb-4" data-bss-hover-animate='pulse' style={{ width: '400px', fontSize: '16px' }} onSubmit={handlerSubmit} >
               {/* <h1>{props.name}</h1>
                <label style={{ textAlign: 'center' }}>Nombre: </label>
                 <input
                  className="form-control"
                  name="name"
                  value={input.name}
                  type="text"
                  onChange={handlerChange}
                /> */}
                <hr />
                <label>Email: </label>
                <input
                  className="form-control"
                  name="email"
                  value={userData.email}
                  onChange={handlerChange}
                  type="text"
                />
                <p style={{ color: "red" }}>
                  {errors.email ? errors.email : null}
                </p>
                <hr />
                <label>Password: </label>
                <input
                  className="form-control"
                  name="password"
                  value={userData.password}
                  type="password"
                  onChange={handlerChange}
                />
                <hr />
                <button
                  className="btn btn-info mt-2"
                  type="submit"
                  disabled={errors.email ||  errors.password}
                >Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
