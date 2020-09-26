import { createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Home from '../components/home/Home';
import Home2 from '../components/home/Home2';
import Login from './LoginContainer';
import ManageCourse from './CourseContainer';
import NewCourse from './CreateCourseContainer';
import CourseDay from './CourseDayContainer';

const TabNavigator = createBottomTabNavigator({
   Home: Home,
   Home2: Home2,
});
import React, { Component } from 'react';


export default App;
const TAB = createAppContainer(TabNavigator);

const RootStack = createStackNavigator(
   {
      Login: {
         screen: Login,
      },
      ManageCourse: {
         screen: ManageCourse,
      },
      NewCourse: {
         screen: NewCourse,
      },
      CourseDay: {
         screen: CourseDay,
      },
      MyModal: {
         screen: TAB,
      },
   },
   {
      mode: 'modal',
      headerMode: 'none',
   },
);

export default createAppContainer(RootStack);
