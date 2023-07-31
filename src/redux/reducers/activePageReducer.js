import * as type from "../constants/generalConstantTypes";
const initalState = {
  activePageNew: localStorage.getItem("activePage") ?? "dashboard",
};

export default function activePageReducer(state = initalState, action) {
    switch (action.type) {
      
      case type.SET_ACTIVE_PAGE:
        localStorage.setItem("activePage", action.payload)
        let path = action.payload.split("-");
        for(let i=0;i<path.length;i++){
          path[i] = path[i].split("")[0].toUpperCase()+path[i].slice(1)
        }
        document.querySelector('title').textContent
                = `${path.join(" ")} :- Interncove`;
        return {
          ...state,
          activePageNew: action.payload,
        };
      default:
        return state;
    }
  }
