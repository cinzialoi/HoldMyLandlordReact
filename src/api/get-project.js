async function getProject(projectId) {
    const url =`${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const response = await fetch(url,{method:"GET"});
    if (!response.ok) {
        const fallbackError =`Error fetching project with id ${projectId}`;

        const data =awaitresponse.json().catch(() =>{
            thrownewError(fallbackError);
        });

        const errorMessage = data?.detail?? fallbackError;
        thrownewError(errorMessage);
    }

    return await response.json();
}

export default getProject;