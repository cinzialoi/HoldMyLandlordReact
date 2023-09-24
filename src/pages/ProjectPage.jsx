import { Link, useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import useAuth from "../hooks/use-auth.js";
import getCurrentProjectIdFromUrl from "../components/DeleteProject";
import deleteProject from "../api/delete-project";
import AddPledge from "../components/AddPledge";

function ProjectPage() {
    // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);
    const {auth, setAuth} = useAuth();

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }

    const projectId = getCurrentProjectIdFromUrl()

    const handleSubmit = (event) => {
        event.preventDefault();

        if (projectId) {
            deleteProject(projectId).then((response) => {
                console.log(response);
            });
        }
    };

    return (
        <div>
            {auth.token ? (
            <button onClick={handleSubmit}>
                <Link >Delete Project</Link>
            </button>
            ) : null
            }
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
            <div>
                <AddPledge />
            </div>
        </div>
    );
}

export default ProjectPage