import ACTION from './actiontsTypes';

export const login = (user) => ({
  type: ACTION.LOGIN_ACTION,
  payload: user
});

export const register = (user) => ({
  type: ACTION.REG_ACTION,
  payload: user
});

