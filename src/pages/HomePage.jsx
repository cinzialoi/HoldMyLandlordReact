import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
    const { projects } = useProjects();
    console.log(projects)
    return (
    <>
        <header>
            <div class="image-container">
                <img src = '../images/Logo.jpg' alt="Hold My Landlord Logo" id="Logo"></img>
            </div>
            <h1 class="name">Hold My Landlord</h1>
        </header> 
        <section class="hero">
            <div class="description"> 
                <h2>Where pheasants can finally contribute</h2>
                <p>From "Pool Party Renovation" to "Lavish Landscaping," let's face it - you have a knack for making every expenditure seem like an absolute necessity. Will your tenants ever stop eye-rolling? Probably not, but at least now you can do it with a grin!</p>
                <p>So, landlords, unite! Let's show your tenants that you're not just about collecting rent checks. Join Hold my Landlord today and remember: the more you ask for, the more likely your tenants will form a renter's union. But hey, at least you'll be making strides towards realizing your dream of a rental property with its very own moat!</p>
            </div>
        </section>
        <div id="project-list">
            <section>
                <h2>Browse MoneyPlease</h2>
                {projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </section>
        </div>
        </>
    );
}

export default HomePage;
