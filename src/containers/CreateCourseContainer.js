import { connect } from 'react-redux';
import React, { Component } from 'react';

import { getRoomAction, createCourseAction } from '../redux/actions/index';
import NewCourse from '../components/course/NewCourse';

const mapStateToProps = (state) => {
   return {
      roomBuildingReducer: state.roomBuildingReducers,
      createCourseReducer: state.createCourseReducers,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getRoomAction: () => {
         dispatch(getRoomAction());
      },
      createCourseAction: (courseName, trainer, startedDate, endedDate, buildingId, roomId) => {
         dispatch(createCourseAction(courseName, trainer, startedDate, endedDate, buildingId, roomId));
      },
   };
};

class CreateCourseContainer extends Component {
   render() {
      return <NewCourse {...this.props}></NewCourse>;
   }
}

export default CreateCourseContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCourseContainer);
