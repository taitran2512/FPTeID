import { all } from 'redux-saga/effects';

import { watchCourse } from './getCourseSagas';
import { watchLogin } from './loginSagas';
import { watchRoom } from './getRoomBuildingSagas';
import { watchCreateCourse } from './createCourseSagas';
import { watchGetCoursesDay } from './getCourseDaySagas';

export default function* rootSaga() {
   yield all([watchLogin(), watchCourse(), watchRoom(), watchCreateCourse(), watchGetCoursesDay()]);
}
