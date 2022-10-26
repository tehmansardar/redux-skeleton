import ACTIONS from "./index";

export const setUser = (user) => ({
  type: ACTIONS.CHANGE_NAME,
  user,
});

export const getUser = () => ({
  type: ACTIONS.GET_USER,
});
