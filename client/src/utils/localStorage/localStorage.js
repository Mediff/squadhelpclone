
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};

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
    return window.localStorage.setObj('chosenContestType', id);
};

export const getTypeId = () => {
    return window.localStorage.getObj('chosenContestType');
};

export const clearTypeId = () => {
    return window.localStorage.removeItem('chosenContestType');
};

export const setContest = (contest) => {
    return window.localStorage.setObj('createContests', contest);
};

export const getContest = () => {
    return window.localStorage.getObj('createContests');
};

export const clearContests = () => {
    return window.localStorage.removeItem('createContests');
};
