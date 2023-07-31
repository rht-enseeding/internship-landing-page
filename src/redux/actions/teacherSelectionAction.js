import * as types from "../constants/generalConstantTypes";

export function getAllTeacherSelectionAction(data) {
  return {
    type: types.GET_TEACHER_SELECTION_REQUESTED,
    payload: data,
  };
}
export function getSingleTeacherSelectionAction(data) {
  return {
    type: types.GET_SINGLE_TEACHER_SELECTION_REQUESTED,
    payload: data,
  };
}
