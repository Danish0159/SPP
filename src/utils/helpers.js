export const checkStatus = (resp) => {
    if (resp.data.status !== "SUCCESS") {
        return true;
    }
    return false;
};

export const checkError = (error) => {
    return (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
};