import { GET_COURSE_DAY_SUCCESS, GET_COURSE_DAY_ERROR } from '../actions/actionTypes';

var initialState = 'get course day';

const getCourseDayReducers = (courseDay = initialState, action) => {
   // switch (action.type) {
   //    case GET_COURSE_DAY_SUCCESS:
   //       console.log('reduce course day success', action.response);
   //       return action.response;
   //    case GET_COURSE_DAY_ERROR:
   //       console.log('reduce course day error', action.response);
   //       return action.response ? action.response.isSuccess : -1;
   //    default:
   //       return courseDay;
   // }
   try {
      switch (action.type) {
         case GET_COURSE_DAY_SUCCESS:
            // console.log('reduce course day success', action.response);
            return {
               ...action.response,
               isfetching: true,
            };
         case GET_COURSE_DAY_ERROR:
            // console.log('reduce course day error', action.response);
            return action.response ? action.response.isSuccess : -1;
         default:
            return courseDay;
      }
   } catch (error) {
      console.log('catch reducers: ', error);
      return courseDay;
   }
};
export default getCourseDayReducers;
