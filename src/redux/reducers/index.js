import { combineReducers } from 'redux';

import courseReducers from './courseReducers';
import loginReducers from './loginReducers';
import roomBuildingReducers from './roomBuildingReducers';
import createCourseReducers from './createCourseReducers';
import getCourseDayReducers from './courseDayReducers'

const allReducers = combineReducers({
   loginReducers,
	courseReducers,
	getCourseDayReducers,
   roomBuildingReducers,
   createCourseReducers,
});

export default allReducers;
