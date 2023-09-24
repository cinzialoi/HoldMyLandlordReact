import getCurrentProjectIdFromUrl from "../components/DeleteProject";

async function postNewPledge(amount, comment) {
    const token = window.localStorage.getItem("token");

    const projectId = getCurrentProjectIdFromUrl()

    const url =`${import.meta.env.VITE_API_URL}/pledges/`;
    const response =await fetch(url,{
        method:"POST",// We need to tell the server that we are sending JSON dataso we set the Content-Type header to application/json
        headers:{"Content-Type":"application/json",
        "Authorization":`Token ${token}`
    },
        body:JSON.stringify({
            "amount": amount,
            "comment": comment,
            "project": projectId,
            "anonimous": true,
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

export default postNewPledge;

