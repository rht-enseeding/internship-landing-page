import axios from "axios";
import { base_url } from "../../../API";
import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_TEACHER_SELECTION_REQUESTED,
  GET_TEACHER_SELECTION_SUCCESS,
  GET_TEACHER_SELECTION_FAILED,
  GET_SINGLE_TEACHER_SELECTION_REQUESTED,
  GET_SINGLE_TEACHER_SELECTION_SUCCESS,
  GET_SINGLE_TEACHER_SELECTION_FAILED,
} from "../../constants/generalConstantTypes";
import Cookies from "js-cookie";

function* teacherSelectionGetApiData() {
  const response = yield axios.get(`${base_url}/teacher/getTeachers`, {
    headers: {
      token: `${Cookies.get('token')}`,
    },
  });

  return response.data;
}

function* fetchTeacherSelectionGetApiData(action) {
  try {
    const { data } = yield call(teacherSelectionGetApiData);
    yield put({ type: GET_TEACHER_SELECTION_SUCCESS, users: data });
  } catch (error) {
    yield put({ type: GET_TEACHER_SELECTION_FAILED, message: error.message });
  }
}

export function* TeacherSelectionGetSaga() {
  yield takeEvery(
    GET_TEACHER_SELECTION_REQUESTED,
    fetchTeacherSelectionGetApiData
  );
}

function* singleTeacherSeletionGetApiData(id) {
  const response = yield axios.get(
    `${base_url}/teacher/getTeachers/?teacherId=${id}`,
    {
      headers: {
        token: `${Cookies.get('token')}`,
      },
    }
  );

  return response.data;
}

function* fetchSingleTeacherSelectionGetApiData(action) {
  try {
    const { data } = yield call(
      singleTeacherSeletionGetApiData,
      action.payload
    );
    yield put({ type: GET_SINGLE_TEACHER_SELECTION_SUCCESS, users: data });
  } catch (error) {
    yield put({
      type: GET_SINGLE_TEACHER_SELECTION_FAILED,
      message: error.message,
    });
  }
}

export function* SingleTeacherSelectionGetSaga() {
  yield takeEvery(
    GET_SINGLE_TEACHER_SELECTION_REQUESTED,
    fetchSingleTeacherSelectionGetApiData
  );
}
