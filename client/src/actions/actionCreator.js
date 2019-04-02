import ACTION from './actiontsTypes';

export const login = (user) => ({
    type: ACTION.LOGIN_ACTION,
    payload: user
});

export const register = (user) => ({
    type: ACTION.REG_ACTION,
    payload: user
});

export const getUser = () => ({
    type: ACTION.GET_USER
});

export const getUserContests = () => ({
    type: ACTION.GET_USER_CONTESTS
});

export const getUserActiveContests = () => ({
    type: ACTION.GET_USER_ACTIVE_CONTESTS
});

export const getUserCompletedContests = () => ({
    type: ACTION.GET_USER_COMPLETED_CONTESTS
});

export const getContestTypes = () => ({
    type: ACTION.GET_CONTEST_TYPES
});

export const setContestTypes = (id) => ({
    type: ACTION.SET_CONTEST_TYPES,
    payload: id
});

export const getStyles = (id) => ({
    type: ACTION.GET_STYLES,
    payload: id
});

export const getIndustries = () => ({
    type: ACTION.GET_INDUSTRIES
});

export const getNameTypes = () => ({
    type: ACTION.GET_NAME_TYPES
});