import {Text, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import Header2Icon from '../../custom/Header2Icon';
import ItemCourse from './flatlist/itemCourse';

import {
  objectIsNull,
  arrayIsEmpty,
} from '@dungdang/react-native-basic/src/Functions';

const Item = ({
  courseName,
  trainer,
  created_by,
  startedDate,
  endedDate,
  buildingName,
  roomName,
}) => (
  <ItemCourse
    courseName={courseName}
    trainer={trainer}
    created_by={created_by}
    startedDate={startedDate}
    endedDate={endedDate}
    buildingName={buildingName}
    roomName={roomName}
  />
);
export default class ManageCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      datafromServer: [],
    };
  }
  componentDidMount() {
	 this.props.getCourseAction();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.courseReducer !== this.props.courseReducer) {
      if (!objectIsNull(this.props.courseReducer)) {
        if (!arrayIsEmpty(this.props.courseReducer.data)) {
          // console.log(this.props.courseReducer.data)
          this.setState({datafromServer: this.props.courseReducer.data});
        }
      }
    }
  }

  handleRefresh() {
    this.setState({refreshing: true});
    this.props.getCourseAction();
    this.setState({
      datafromServer: this.props.courseReducer.data,
      refreshing: false,
    });
  }

  render() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          this.props.navigation.navigate('CourseDay', {
            course_id: item.course_id,
          });
        }}>
        <Item
          courseName={item.courseName}
          trainer={item.trainer}
          created_by={item.created_by}
          startedDate={item.startedDate
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('/')}
          endedDate={item.endedDate.slice(0, 10).split('-').reverse().join('/')}
          buildingName={item.buildingName}
          roomName={item.roomName}
        />
      </TouchableOpacity>
    );
    return (
      <View style={{flex: 1}}>
        {/* //////////////////Header//////////////////////////////// */}
        <Header2Icon
          title="Quản lí Khóa học"
          onPressBackButton={() => this.props.navigation.goBack()}
          iconname="plus"
          onPressIcon={() => this.props.navigation.navigate('NewCourse')}
        />

        {/* ////////////////////////////////////////////////// */}
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.datafromServer}
            renderItem={renderItem}
            keyExtractor={(item) => item.course_id}
            onRefresh={() => this.handleRefresh()}
            refreshing={this.state.refreshing}
          />
        </View>
      </View>
    );
  }
}
