import "./../pages/HomePage.css";
import { useState } from "react";
import postNewProject from "../api/post-project";

function AddProject() {

    const [fields, setFields] = useState({
        projectName : '',
        projectDescription : '',
        goal: '',
        image: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFields ((prevFields) => ({
            ...prevFields,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (fields.projectName && fields.projectDescription && fields.goal && fields.image) {
            postNewProject(
                fields.projectName,
                fields.projectDescription,
                fields.goal,
                fields.image
            ).then((response) => {
                console.log(response);
            });
        }
    };

    return (
        <div>
            <h1>Add Project</h1>
                <section>
                    <h2>New request for Money please</h2>
                </section>
                <form action="https://formspree.io/f/xrgvdozy" method="POST">
                    <label htmlFor="project-name">My money please name</label>
                    <input name="My money please name" type="text" id="projectName" onChange={handleChange}/>
                    <label htmlFor="project-description">Tell us what this Money Please is for</label>
                    <textarea name="Project Description" id="projectDescription" onChange={handleChange}></textarea>
                    <label htmlFor="goal-amount">Goal amount</label>
                    <input name="goal" id="goal" type="number" onChange={handleChange}></input>
                    <label htmlFor="image">Image</label>
                    <input url="" type="url" id="image" onChange={handleChange}></input>
                    <button type="submit" onClick={handleSubmit} >Submit</button>
                </form>
        </div>
    );
}

export default AddProject;