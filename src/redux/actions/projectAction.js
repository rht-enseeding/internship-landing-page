import * as types from "../constants/generalConstantTypes";

export function getAllProjectAction(data) {
  return {
    type: types.GET_PROJECTS_REQUESTED,
    payload: data,
  };
}
export function getSingleProjectAction(data) {
  return {
    type: types.GET_SINGLE_PROJECT_REQUESTED,
    payload: data,
  };
}
export function createProjectAction(data) {
  // console.log("in action", data);
  return {
    type: types.CREATE_PROJECT_REQUESTED,
    payload: data,
  };
}
