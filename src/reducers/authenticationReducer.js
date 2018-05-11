
import store from '../store'

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from "../actions/types";

const intialState = {
  userInfo: {},
  signedIn: false,
  error: false
};

const authentication = (state = intialState, action) => {
  switch (action.type) {
    case `${SIGN_IN}_FULFILLED`:
      return {
        ...state,
        signedIn: true,
        userInfo: action.payload.userInfo
      };
    case `${SIGN_IN}_REJECTED`:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };

    case `${SIGN_OUT}_FULFILLED`:
      return {
        ...state,
        userInfo: {},
        signedIn: false
      };

    case `${SIGN_OUT}_REJECTED`:
      return {
        ...state,
        signedIn: true,
        error: action.payload.error
      };

    case `${SIGN_UP}_FULFILLED`:
      return {

      };

    case `${SIGN_UP}_REJECTED`:
      return {};

    default:
      return state;
  }
}

export default authentication