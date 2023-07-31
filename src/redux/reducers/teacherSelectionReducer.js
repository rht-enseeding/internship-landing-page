import * as type from "../constants/generalConstantTypes";
const initalState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};
export default function teacherSelectionReducer(state = initalState, action) {
  switch (action.type) {
    case type.GET_TEACHER_SELECTION_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_TEACHER_SELECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_TEACHER_SELECTION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    //
    case type.GET_SINGLE_TEACHER_SELECTION_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_SINGLE_TEACHER_SELECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.users,
      };
    case type.GET_SINGLE_TEACHER_SELECTION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
