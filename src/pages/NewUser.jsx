import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function AddUser() {
    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    return (
        <div>
            <h1>Add Project</h1>
                <section>
                    <h2>New request for Money please</h2>
                </section>
                <form>
                    {/* Labels and inputs for form data */}
                    <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                        value={name} type="text" />
                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" />
                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" />
                    <button onClick={handleSubmit} className="btn"
                        type="submit"></button>
                </form>
        </div>
    );
}

export default AddUser;
