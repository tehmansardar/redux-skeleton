import ACTIONS from "../actions";

const initialState = {
  user: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_NAME:
      const { user } = action;
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
};

export default userReducer;
