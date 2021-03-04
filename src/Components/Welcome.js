import {Link} from "react-router-dom"

const Welcome = ()=>{
    return (
        <div className="Welcome-container">
            <div className="welcome-main">
                <h1>😅✈️</h1>
                <h1>Welcome to Courier App</h1>
                <p>this app was made it using react, mongodb and nodejs</p>
                <Link to="/signup"><button className="Register">Sign Up</button></Link>
                <Link to="/login"><button className="login">Log In</button></Link>
            </div>
        </div>
    )
}

export default Welcome