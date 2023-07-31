import * as type from "../constants/generalConstantTypes";
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

  return color;
}
const initalState = {
  userinfo : sessionStorage.getItem("userinfo") ? JSON.parse(sessionStorage.getItem("userinfo")) : {},
  userstatus : sessionStorage.getItem("userstatus") ?? false,
  usercolor : getRandomColor()
};

export default function userinfoReducer(state = initalState, action) {
    switch (action.type) {
      
      case type.SET_USER_INFO:
        sessionStorage.setItem("userinfo", JSON.stringify(action.payload))
        return {
          ...state,
          userinfo: action.payload,
        };
      case type.SET_USER_STATUS:
        sessionStorage.setItem("userstatus", action.payload)
        return {
          ...state,
          userstatus: action.payload,
        };
      default:
        return state;
    }
  }