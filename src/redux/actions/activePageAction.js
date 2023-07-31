import * as types from "../constants/generalConstantTypes";

export function setActivePage(data) {
  return {
    type: types.SET_ACTIVE_PAGE,
    payload: data,
  };
}
