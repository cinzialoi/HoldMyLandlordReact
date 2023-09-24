async function deleteProject(projectId) {

    const token = window.localStorage.getItem("token");

    const url =`${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const response = await fetch(url,{method:"DELETE",
        headers:{"Content-Type":"application/json",
        "Authorization":`Token ${token}`
    },});


    if (!response.ok) {
        const fallbackError =`You cannot delete project with ID ${projectId}`;

        const data =await response.json().catch(() =>{
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail?? fallbackError;
        throw new Error(errorMessage);
    }

    console.log("you have deleted correctly");
}

export default deleteProject;