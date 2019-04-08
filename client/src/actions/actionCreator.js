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

export const getStyles = () => ({
    type: ACTION.GET_STYLES
});

export const getIndustries = () => ({
    type: ACTION.GET_INDUSTRIES
});

export const getNameTypes = () => ({
    type: ACTION.GET_NAME_TYPES
});

export const createContest = (contest) => ({
    type: ACTION.CREATE_CONTEST,
    payload: contest
});

export const setSavedContest = (contest) => ({
    type: ACTION.SET_SAVED_CONTEST,
    payload: contest
});

export const proceedPay = (contest) => ({
    type: ACTION.PROCEED_PAY,
    payload: contest
});

export const setContest = (contest) => ({
    type: ACTION.SET_CONTEST,
    payload: contest
});

export const logout = () => ({
    type: ACTION.USER_LOGOUT
});

export const setAllEntries = (contest) => ({
    type: ACTION.SET_ALL_ENTRIES,
    payload: contest
});

export const setRejectedEntries = (contest) => ({
   type: ACTION.SET_REJECTED_ENTRIES,
   payload: contest
});

export const updateEntryStatus = (entry) => ({
    type: ACTION.UPDATE_ENTRY_STATUS,
    payload: entry
});