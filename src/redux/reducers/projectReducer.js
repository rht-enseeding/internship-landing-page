import * as type from "../constants/generalConstantTypes";
const initalState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};
export default function projectReducer(state = initalState, action) {
  switch (action.type) {
    case type.GET_PROJECTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_PROJECTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    //
    case type.GET_SINGLE_PROJECT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.users,
      };
    case type.GET_SINGLE_PROJECT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.CREATE_PROJECT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case type.CREATE_PROJECT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
