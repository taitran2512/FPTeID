import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            height: '60%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text>WelcomeScreen!</Text>
          <Button
            title="Go to Login"
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}
          />
          <Button
            title="Go to Home page"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          />
          <Button
            title="Go to New Course"
            onPress={() => {
              this.props.navigation.navigate('NewCourse');
            }}
          />
          <Button
            title="Go to Manage Course"
            onPress={() => {
              this.props.navigation.navigate('ManageCourse');
            }}
          />
          <Button
            title="Go to Course Day"
            onPress={() => {
              this.props.navigation.navigate('CourseDay');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
