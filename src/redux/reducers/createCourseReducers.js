import { POST_COURSE_SUCCESS, POST_COURSE_ERROR } from '../actions/actionTypes';

const initialState = 'creating course';

const createCourseReducers = (create = initialState, action) => {
   switch (action.type) {
      case POST_COURSE_SUCCESS:
         // console.log('reduce post course success', action.response);
         return action.response;
      case POST_COURSE_ERROR:
         // console.log('reduce post course error', action.response);
         return action.response;
      default:
         return create;
   }
};

export default createCourseReducers;
