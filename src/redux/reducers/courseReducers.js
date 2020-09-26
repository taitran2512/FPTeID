import {GET_COURSE_SUCCESS, GET_COURSE_ERROR} from '../actions/actionTypes';

var initialState = 'get all Courses';
const courseReducers = (login = initialState, action) => {
  try {
    switch (action.type) {
      case GET_COURSE_SUCCESS:
      //   console.log('hello this is data cousrse', action.response.data);
        return {
          ...action.response,
          isfetching: true,
        };
      case GET_COURSE_ERROR:
        return action.response ? action.response.isSuccess : -1;
      default:
        return login;
    }
  } catch (error) {
    console.log('catch reducers: ', error);
    return login;
  }
};
export default courseReducers;
