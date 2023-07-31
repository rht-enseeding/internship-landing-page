import { SAVE_FORM_DATA, UPDATE_EDUCATION } from "../constants/generalConstantTypes";

export const initializeFormData = (formData) => {
  return {
    type: 'INITIALIZE_FORM_DATA',
    payload: formData,
  };
}

export const saveFormData = (formData) => {
  console.log('saveFormData called:', formData);
  return {
    type: SAVE_FORM_DATA,
    payload: formData,
  };
};

export const updateEducation = (educationData) => {
  return {
    type: UPDATE_EDUCATION,
    payload: educationData
  };
};

export const saveUserProfile = (basicInfo) => {
  return (dispatch) => {
    dispatch({
      type: "SAVE_USER_PROFILE",
      payload: basicInfo
    });
  };
};