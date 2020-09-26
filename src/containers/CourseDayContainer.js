import { connect } from 'react-redux';
import React from 'react';

import { getCourseDayAction } from '../redux/actions/index';
import CourseDay from '../components/course/CourseDay';

const mapStateToProps = (state) => {
   return {
      getCourseDayReducer: state.getCourseDayReducers,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getCourseDayAction: (course_id) => {
         dispatch(getCourseDayAction(course_id));
      },
   };
};

class CourseDayContainer extends React.Component {
   render() {
      return <CourseDay {...this.props}></CourseDay>;
   }
}
export default CourseDayContainer = connect(
	mapStateToProps, mapDispatchToProps
	)(CourseDayContainer);
