import "./../pages/HomePage.css";
import useAuth from "../hooks/use-auth.js";
import { useState } from "react";
import postNewPledge from "../api/post-pledge.js";

function AddPledge() {
    const {auth, setAuth} = useAuth();

    const [fields, setFields] = useState({
        amount : '',
        comment : '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFields ((prevFields) => ({
            ...prevFields,
            [id]: value,
        }));
    };

    const handlePledge = (event) => {
        event.preventDefault();
        if (fields.amount && fields.comment) {
            postNewPledge(
                fields.amount,
                fields.comment,
            ).then((response) => {
                console.log(response);
            });
        }
    };

    return (
        <>
        {auth.token ? (
            <div>
                <h2>Pledge to this project</h2>
                <form>
                    <label htmlFor="amount">Amount</label>
                    <input name="Amount" type="number" id="amount" onChange={handleChange}/>
                    <label htmlFor="comment">Add a comment</label>
                    <textarea name="comment" type="text" id="comment" onChange={handleChange} ></textarea>
                    <button type="submit" onClick={handlePledge}>Submit</button>
                </form>
            </div>
        ) : (
            <h2>Login to pledge to this project</h2>
        )
        }
        </>
    )
}

export default AddPledge