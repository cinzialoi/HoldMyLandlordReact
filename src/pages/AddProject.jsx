import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function AddProject() {
    return (
        <div>
            <h1>Add Project</h1>
                <section>
                    <h2>New request for Money please</h2>
                </section>
                <form action="https://formspree.io/f/xrgvdozy" method="POST">
                    <label htmlFor="project-name">My money please name</label>
                    <input name="My money please name" type="text" id="project-name" />
                    <label htmlFor="project-description">Tell us what this Money Please is for</label>
                    <textarea name="Project Description" id="project-description"></textarea>
                    <label htmlFor="goal-amount">Goal amount</label>
                    <input name="Goal" type="number"></input>
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
}

export default AddProject;
