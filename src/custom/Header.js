import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
   return (
      <View
         style={{
            backgroundColor: '#ffffff',
            paddingTop: Sizes.s30,
            paddingBottom: Sizes.s30,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: Sizes.s15,
         }}>
         <Text
            numberOfLines={2}
            style={{
               alignSelf: 'center',
               fontWeight: 'bold',
               fontSize: Sizes.s40,
               fontFamily: 'SourceSansPro-SemiBold',
               // backgroundColor:"#3f45ff",
               color: '#1A232C',
               //  paddingHorizontal: Sizes.s100,
            }}>
            {props.title}
         </Text>
         <TouchableOpacity
            style={{
               position: 'absolute',
               left: Sizes.s30,
               width: Sizes.s60,
               // backgroundColor:"#33dfff",
               height: Sizes.s60,
               justifyContent: 'center',
            }}
            onPress={() => {
               props.onPressBackButton();
            }}>
            {/* <Image
          resizeMode="contain"
          source={require('../res/images/ic_back.png')}
          style={{
            width: '100%',
            height: '100%',
          }}
        /> */}
            <Icon name="chevron-left" size={Sizes.s40} color="grey" />
         </TouchableOpacity>
      </View>
   );
};

export default Header;
