import React, { Component } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

export default class SplashScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
         animating: new Animated.Value(0),
      };
   }

   componentDidMount(props) {
      Animated.sequence([
         Animated.timing(this.state.animating, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
         }),
         Animated.timing(this.state.animating, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
         }),
      ]).start();
   }

   render() {
      return (
         <Animated.View
            style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: '#eee',
               opacity: this.state.animating,
            }}>
            <Image source={require('../res/images/logo_fpt.png')} style={{ height: 150, width: 300 }} />
         </Animated.View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
   },
   image: {
      height: 100,
      width: 200,
   },
});
