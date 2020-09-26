import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Images from '../../res/Images';

const Header2Icon = (props) => {
   return (
      <View
         style={{
            backgroundColor: '#ffffff',
            paddingTop: Sizes.s30,
            paddingBottom: Sizes.s30,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            elevation: Sizes.s15,
         }}>
         <TouchableOpacity
            style={{
               left: Sizes.s30,
               width: Sizes.s60,
               height: Sizes.s60,
            }}
            onPress={() => {
               props.onPressBackButton();
            }}>
            <Icon name="chevron-left" size={Sizes.s40} color="grey" />
         </TouchableOpacity>
         <Text
            numberOfLines={2}
            style={{
               fontWeight: 'bold',
               fontSize: Sizes.s40,
               fontFamily: 'SourceSansPro-SemiBold',
               color: '#1A232C',
            }}>
            {props.title}
         </Text>
         <TouchableOpacity
            style={{
               right: Sizes.s10,
               width: Sizes.s60,
               height: Sizes.s60,
            }}
            onPress={() => {
               props.onPressIcon();
            }}>
            <Icon name={props.iconname} size={Sizes.s40} color="gray" />
         </TouchableOpacity>
      </View>
   );
};

export default Header2Icon;
