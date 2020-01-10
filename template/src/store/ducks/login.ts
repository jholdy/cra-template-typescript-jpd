import { createReducer } from "reduxsauce";
import creator from "../util";

export const Types = {
  GET_REQUEST: "GET_REQUEST_LOGIN",
  GET_SUCCESS: "GET_SUCCESS_LOGIN",
  GET_FAILURE: "GET_FAILURE_LOGIN",
  GET_LOGOUT_REQUEST: "GET_LOGOUT_REQUEST"
};

export const Creators = {
  getRequest: creator(Types.GET_REQUEST),
  getSuccess: creator(Types.GET_SUCCESS),
  getFailure: creator(Types.GET_FAILURE),
  getLogout: creator(Types.GET_LOGOUT_REQUEST)
};

export const initialState = {
  user: null,
  loading: false,
  error: null
};

const request = (state = initialState) => ({
  ...state,
  loading: true,
  error: null
});

const success = (state = initialState, action) => ({
  ...state,
  ...action.payload,
  loading: false,
  error: null
});

const failure = (state = initialState, action) => ({
  ...state,
  ...action.payload,
  loading: false
});

const logoutRequest = () => initialState;

export default createReducer(initialState, {
  [Types.GET_REQUEST]: request,
  [Types.GET_SUCCESS]: success,
  [Types.GET_FAILURE]: failure,
  [Types.GET_LOGOUT_REQUEST]: logoutRequest
});
