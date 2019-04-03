

export const getToken = () => {
    return window.localStorage.getItem('token');
};

export const setToken = (token) => {
    window.localStorage.setItem('token', token);
};

export const clearToken = () => {
    window.localStorage.removeItem('token');
};

export const setTypeId = (id) => {
    return window.localStorage.setItem('chosenContestType', id);
};

export const getTypeId = () => {
    return window.localStorage.getItem('chosenContestType');
};

export const clearTypeId = () => {
    return window.localStorage.removeItem('chosenContestType');
};