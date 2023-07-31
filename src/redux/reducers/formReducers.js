const initialState = {
  formData: {},
};

const formReducer = (state = initialState, action) => {
  console.log('formReducer called:', action);
  switch (action.type) {
    case 'INITIALIZE_FORM_DATA':
      return {
        ...state,
        formData: action.payload,
      };
    case "SAVE_FORM_DATA":
      console.log("Form data saved in Redux:", action.payload);
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        },
      };
    case "UPDATE_EDUCATION":
      // Handle updating education data in the state
      return {
        ...state,
        formData: {
          ...state.formData,
          education: action.payload
        },
      };
    // Add other cases for different form categories if needed
    default:
      return state;
  }
};

export default formReducer;