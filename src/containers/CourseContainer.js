import { connect } from 'react-redux';
import React from 'react';

import { getCourseAction } from '../redux/actions/index';
import ManageCourse from '../components/course/ManageCourse';

const mapStateToProps = (state) => {
   return {
      courseReducer: state.courseReducers,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getCourseAction: () => {
         dispatch(getCourseAction());
      },
   };
};

class CourseContainer extends React.Component {
   render() {
      return <ManageCourse {...this.props}></ManageCourse>;
   }
}

export default CourseContainer = connect(
   mapStateToProps,
   mapDispatchToProps,
)(CourseContainer);
