export const handleError = (error: any) => {
    const generalMessage = "An unexpected error occurred";
    let statusCode = 500;
    let statusMessage = "Unexpected error";
    let message = generalMessage;
    let data = undefined;

    console.log(error.response);

    if (error.response) {
        statusCode = error.response.status
        statusMessage = error.response.statusText
        data = error.response._data && error.response._data.errors ? error.response._data.errors : undefined
        message = error.response._data && error.response._data.message ? error.response._data.message : generalMessage
        if (error.statusCode === 401 && error.statusMessage === 'Unauthorized') {
            navigateTo('/auth/login');
        }
    }

    return {
        statusCode,
        statusMessage,
        message,
        data
    }

}