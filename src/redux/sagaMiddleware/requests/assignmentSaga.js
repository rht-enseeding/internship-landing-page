import axios from "axios";
import { base_url } from "../../../API";
import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_PROJECTS_REQUESTED,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILED,
  GET_SINGLE_PROJECT_REQUESTED,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_FAILED,
  CREATE_PROJECT_REQUESTED,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILED,
} from "../../constants/generalConstantTypes";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";

function* projectsGetApiData() {
  const response = yield axios.get(`${base_url}/project/project`, {
    headers: {
      token: `${Cookies.get('token')}`,
    },
  });

  return response.data;
}

function* fetchprojectsGetApiData(action) {
  try {
    const { data } = yield call(projectsGetApiData);
    yield put({ type: GET_PROJECTS_SUCCESS, users: data });
  } catch (error) {
    yield put({ type: GET_PROJECTS_FAILED, message: error.message });
  }
}

export function* projectsGetSaga() {
  yield takeEvery(GET_PROJECTS_REQUESTED, fetchprojectsGetApiData);
}

function* singleProjectGetApiData(id) {
  const response = yield axios.get(
    `${base_url}/project/project?projectId=${id}`,
    {
      headers: {
        token: `${Cookies.get('token')}`,
      },
    }
  );

  return response.data;
}

function* fetchSingleProjectGetApiData(action) {
  try {
    const { data } = yield call(singleProjectGetApiData, action.payload);
    yield put({ type: GET_SINGLE_PROJECT_SUCCESS, users: data });
  } catch (error) {
    yield put({ type: GET_SINGLE_PROJECT_FAILED, message: error.message });
  }
}

export function* SingleAssignmentGetSaga() {
  yield takeEvery(GET_SINGLE_PROJECT_REQUESTED, fetchSingleProjectGetApiData);
}

function* createProjectGetApiData(data) {
  const response = yield axios.post(`${base_url}/project/add`, data, {
    headers: {
      token: `${Cookies.get('token')}`,
    },
  });
  // console.log("in createProjectGetApiData", response.data);
  return response.data;
}

function* fetchCreateProjectGetApiData(action) {
  try {
    const { data } = yield call(createProjectGetApiData, action.payload);
    yield put({ type: CREATE_PROJECT_SUCCESS, users: data });
  } catch (error) {
    yield put({ type: CREATE_PROJECT_FAILED, message: error.message });
  }
}

export function* CreateProjectGetSaga() {
  yield takeEvery(CREATE_PROJECT_REQUESTED, fetchCreateProjectGetApiData);
}
