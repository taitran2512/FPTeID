import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header2Icon from '../../custom/Header2Icon';
import { ScrollView } from 'react-native-gesture-handler';
import ItemCourseDay from './flatlist/itemCourseDay';
import { objectIsNull, arrayIsEmpty } from '@dungdang/react-native-basic/src/Functions';
import { Sizes } from '@dungdang/react-native-basic';

const Item = ({
   courseName,
   className,
   trainer,
   created_by,
   date,
   startedTime,
   endedTime,
   buildingName,
   roomName,
   wifi,
   code,
}) => (
   <ItemCourseDay
      courseName={courseName}
      className={className}
      trainer={trainer}
      created_by={created_by}
      date={date}
      startedTime={startedTime}
      endedTime={endedTime}
      buildingName={buildingName}
      roomName={roomName}
      wifi={wifi}
      code={code}
   />
);
export default class CourseDay extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         course_id: '',
         courseName: '',
         dataCourseDay: [],
      };
   }
   UNSAFE_componentWillMount() {
      const course_id = this.props.navigation.getParam('course_id');
      this.setState({ course_id: course_id });
   }
   async componentDidMount() {
      this.props.getCourseDayAction(this.state.course_id);
   }
   componentDidUpdate(prevProps) {
      if (prevProps.getCourseDayReducer !== this.props.getCourseDayReducer) {
         if (!objectIsNull(this.props.getCourseDayReducer)) {
            if (!arrayIsEmpty(this.props.getCourseDayReducer.data)) {
               this.setState({
                  dataCourseDay: this.props.getCourseDayReducer.data,
                  courseName: this.props.getCourseDayReducer.data[0].courseName,
               });
            }
         }
      }
   }

   render() {
      const renderItem = ({ item }) => (
         <Item
            courseName={item.courseName}
            className={item.className}
            trainer={item.trainer}
            created_by={item.created_by}
            date={item.date.slice(0, 10).split('-').reverse().join('/')}
            startedTime={item.startedTime}
            endedTime={item.endedTime}
            buildingName={item.buildingName}
            roomName={item.roomName}
            wifi={item.wifi}
            code={item.code}
         />
      );
      const title = this.state.courseName == '' ? 'Không có buổi học' : this.state.courseName;
      return (
         <View style={{ flex: 1 }}>
            <Header2Icon
               title="Quản lí buổi học"
               onPressBackButton={() => this.props.navigation.goBack()}
               iconname="plus"
               onPressIcon={() => this.props.navigation.navigate('NewCourse')}
            />
            <ScrollView style={{ flex: 1 }}>
               <Text style={styles.title}>{title}</Text>
               <FlatList
                  data={this.state.dataCourseDay}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.courseId}
               />
            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   title: {
      marginTop: Sizes.s15,
      marginLeft: Sizes.s30,
      fontSize: Sizes.s40,
      fontWeight: 'bold',
      color: '#6495ed',
   },
});
