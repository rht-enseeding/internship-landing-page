import * as types from "../constants/generalConstantTypes";

export function setUserInfo(data) {
  return {
    type: types.SET_USER_INFO,
    payload: data,
  };
}
export function setUserStatus(data) {
  return {
    type: types.SET_USER_STATUS,
    payload: data,
  };
}


