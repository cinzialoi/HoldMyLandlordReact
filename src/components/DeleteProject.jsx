function getCurrentProjectIdFromUrl() {
    const pathname = window.location.pathname;
    const match = pathname.match(/\/project\/(\d+)/);
    
    if (match) {
        return match[1]; // The project ID is captured in the first capture group.
    } else {
        return null; // No project ID found in the URL.
    }
}

export default getCurrentProjectIdFromUrl