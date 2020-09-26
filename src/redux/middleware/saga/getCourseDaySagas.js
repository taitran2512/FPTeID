import { GET_COURSE_DAY, GET_COURSE_DAY_SUCCESS, GET_COURSE_DAY_ERROR } from '../../actions/actionTypes';
import { call, takeEvery, put } from 'redux-saga/effects';
import { getCourseDay } from '../api/courseDay';

function* getCourseDaySaga(action) {
	const { course_id } = action.data;
	var response = yield getCourseDay(course_id);
   try {
		yield put({ type: GET_COURSE_DAY_SUCCESS, response });
   } catch (error) {
		yield put({ type: GET_COURSE_DAY_ERROR, error });

   }
}

export function* watchGetCoursesDay() {
   yield takeEvery(GET_COURSE_DAY, getCourseDaySaga);
}
