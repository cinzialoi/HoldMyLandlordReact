async function postNewProject(projectName, projectDescription, goal, image) {
    const token = window.localStorage.getItem("token");

    const url =`${import.meta.env.VITE_API_URL}/projects/`;
    const response =await fetch(url,{
        method:"POST",// We need to tell the server that we are sending JSON dataso we set the Content-Type header to application/json
        headers:{"Content-Type":"application/json",
        "Authorization":`Token ${token}`
    },
        body:JSON.stringify({
            "title": projectName,
            "description": projectDescription,
            "goal": goal,
            "image": image,
            "is_open": true,
            "date_created": new Date()
        }),
    });
    
    if (!response.ok) {
        const fallbackError =`You cannot post`;

        const data =await response.json().catch(() =>{
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail?? fallbackError;
        throw new Error(errorMessage);  
    }
    
    return await response.json();
}

export default postNewProject;

