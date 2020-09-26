import {
   GET_ROOMBUILDING,
   GET_ROOMBUILDING_SUCCESS,
   GET_ROOMBUILDING_ERROR,
} from '../../actions/actionTypes';

import { call, takeEvery, put } from 'redux-saga/effects';
import { get_RoomBuilding } from '../api/roomBuilding';

function* getRoomBuilding(action) {
   var response = yield get_RoomBuilding();
   const error = response.message;
   if (response !== undefined) {
      if (response.resultCode === 1) {
         yield put({ type: GET_ROOMBUILDING_SUCCESS, response: response });
      } else {
         yield put({ type: GET_ROOMBUILDING_ERROR, error });
      }
   } else {
      yield put({ type: GET_ROOMBUILDING_ERROR, error });
   }
}

export function* watchRoom() {
   yield takeEvery(GET_ROOMBUILDING, getRoomBuilding);
}
