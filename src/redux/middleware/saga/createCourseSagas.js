import { call, takeEvery, put } from 'redux-saga/effects';

import { POST_COURSE, POST_COURSE_SUCCESS, POST_COURSE_ERROR } from '../../actions/actionTypes';
import { postCourse } from '../api/createCourse';

function* createNewCourse(action) {
   const { courseName, trainer, startedDate, endedDate, buildingId, roomId } = action.data;
   try {
		const response = yield postCourse(courseName, trainer, startedDate, endedDate, buildingId, roomId);
      yield put({ type: POST_COURSE_SUCCESS, response });
      // console.log('saga success post couse',response);
   } catch (error) {
      // console.log('saga error post couse', error);
      yield put({ type: POST_COURSE_ERROR, error });
   }
}

export function* watchCreateCourse() {
   yield takeEvery(POST_COURSE, createNewCourse);
}
