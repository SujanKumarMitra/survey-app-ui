export const ExtractErrors = (error) => {
    const errorTitle = error.response ? error.response.data.message : 'Oops!!';
    const errorDescription = error.response ? error
        .response.data
        .errors
        .map(error => error.reason)
        .join("<br>") : "Server Not Responding. Please try again later.";
    return { errorTitle, errorDescription };
}

export default ExtractErrors;