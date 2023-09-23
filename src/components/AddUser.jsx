import "../pages/HomePage.css";
import { useState } from "react";
import postNewUser from "../api/new-user";

function AddUser() {

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials ((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (credentials.username && credentials.email && credentials.password) {
            postNewUser(
                credentials.username,
                credentials.email,
                credentials.password,
            ).then((response) => {
                console.log(response);
            });
        }
    };

    return (
        <div>
            <h1>Register</h1>
                <section>
                    <h2>Sign up for HoldMyLandlord</h2>
                </section>
                <form>
                    <label htmlFor="your-username">Your username</label>
                    <input name="Your username" type="text" id="username" onChange={handleChange}/>
                    <label htmlFor="your-email">Your email</label>
                    <input name="Your email" type="text" id="email" onChange={handleChange}/>
                    <label htmlFor="your-password">Your password</label>
                    <input name="password" id="password" type="password" onChange={handleChange}></input>
                    <label htmlFor="repeat-password">Repeat password</label>
                    <input name="password1" id="password1" type="password" onChange={handleChange}></input>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
        </div>
    );
}

export default AddUser;