import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";

const INTIALIZED_SUCCESS = "INTIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INTIALIZED_SUCCESS: {
      return { ...state, initialized: true };
    }

    default:
      return state;
  }
};

export const initializedSucsses = () => ({
  type: INTIALIZED_SUCCESS,
});
export const initializeApp = () => (dispatch) => {
let promise = dispatch(getAuthUserData())

Promise.all([promise]).then(() => {
  dispatch(initializedSucsses())
})

};

export default appReducer;
