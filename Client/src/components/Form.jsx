const Forms = () =>{
    return(
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"></input>
                <hr/>
                <label htmlFor="password" name="password">Password: </label>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
export default Forms;