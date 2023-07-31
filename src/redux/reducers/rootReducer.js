import { combineReducers } from "redux";
import assignmentReducer from "./assignmentReducer";
import projectReducer from "./projectReducer";
import teacherSelectionReducer from "./teacherSelectionReducer";
import activePageReducer from "./activePageReducer";
import userinfoReducer from "./userinfoReducer";
import formReducer from "./formReducers";

export default combineReducers({
  assignment: assignmentReducer,
  project: projectReducer,
  teacherSelection: teacherSelectionReducer,
  activePageNew: activePageReducer,
  userInfo: userinfoReducer,
  form: formReducer,
});