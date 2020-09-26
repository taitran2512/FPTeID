//Linhtn23

import {
   POST_LOGIN,
   DID_LOGIN_ACTION,
   RESET_LOGIN,
   GET_COURSE,
   GET_ROOMBUILDING,
   POST_COURSE,
   GET_COURSE_DAY,
} from './actionTypes';

export const onDidLogin = () => {
   return {
      type: DID_LOGIN_ACTION,
   };
};

export const loginAction = (user, password) => {
   return {
      type: POST_LOGIN,
      data: { user, password },
   };
};

export const resetLoginAction = () => {
   return {
      type: RESET_LOGIN,
      data: null,
   };
};

//get all course
export const getCourseAction = () => {
   return {
      type: GET_COURSE,
   };
};

//get course days
export const getCourseDayAction = (course_id) => {
   return {
      type: GET_COURSE_DAY,
      data: {course_id},
   };
};

//get room building
export const getRoomAction = () => {
   return {
      type: GET_ROOMBUILDING,
   };
};

//create course
export const createCourseAction = (courseName, trainer, startedDate, endedDate, buildingId, roomId) => {
   return {
      type: POST_COURSE,
      data: { courseName, trainer, startedDate, endedDate, buildingId, roomId },
   };
};
