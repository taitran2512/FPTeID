import { Sizes } from '@dungdang/react-native-basic';
import { arrayIsEmpty, stringIsEmpty } from '@dungdang/react-native-basic/src/Functions';
import React, { Component } from 'react';
import {
   Alert,
   FlatList,
   Modal,
   StyleSheet,
   Text,
   TouchableOpacity,
   TouchableWithoutFeedback,
   View,
   Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Picker extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isShowModal: false,
         selectedItem: null,
      };
   }

   render() {
      const { isShowModal, selectedItem } = this.state;
      const { data, title, style, placeholder, onChangeItem, noDataMessage, value } = this.props;
      //render item for flatList///////////////////////////////////////////////////////
      const renderItem = ({ item, index }) => {
         return (
            <TouchableOpacity
               key={index}
               style={styles.item}
               onPress={() => {
                  this.setState({ selectedItem: item, isShowModal: false });
                  onChangeItem(item);
               }}>
               <Text
                  style={[
                     { fontSize: Sizes.s30 },
                     selectedItem === item ? { fontWeight: 'bold', color: '#0294e1' } : null,
                  ]}>
                  {item.label}
               </Text>
               {selectedItem === item ? (
                  <Icon solid color={'#0294e1'} size={Sizes.s30} name={'check-circle'} />
               ) : null}
            </TouchableOpacity>
         );
      };
      ///////////////////////////////////////////////////////////////
      return (
         <View>
            <TouchableOpacity
               style={style}
               onPress={() => {
                  arrayIsEmpty(data)
                     ? Alert.alert('Thông báo', noDataMessage)
                     : this.setState({ isShowModal: !isShowModal });
               }}>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     paddingHorizontal: Sizes.s15,
                  }}>
                  {selectedItem === null || stringIsEmpty(value) ? (
                     <Text style={{ color: '#9f9f9f' }}>{placeholder}</Text>
                  ) : (
                     <Text style={{ color: '#335272' }}>{selectedItem.label}</Text>
                  )}
                  <Icon name="angle-down" size={Sizes.s25} />
               </View>
            </TouchableOpacity>
            <Modal visible={isShowModal} transparent={true} animationType="fade">
               <View
                  style={{
                     flex: 1,
                     backgroundColor: '#00000036',
                  }}
               />
            </Modal>
            <Modal visible={isShowModal} transparent={true} animationType="slide">
               <TouchableWithoutFeedback onPress={() => this.setState({ isShowModal: !isShowModal })}>
                  <View
                     style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        // backgroundColor: '#00000036',
                     }}>
                     <TouchableWithoutFeedback>
                        <View
                           style={{
                              height: '40%',
                              borderTopRightRadius: Sizes.s40,
                              borderTopLeftRadius: Sizes.s40,
                              justifyContent: 'center',
                              backgroundColor: 'white',
                           }}>
                           <Text style={styles.title}>{title}</Text>
                           <FlatList
                              style={{ flex: 1 }}
                              data={data}
                              showsVerticalScrollIndicator={false}
                              keyExtractor={(index) => index}
                              renderItem={(item, index) => renderItem(item, index)}
                           />
                        </View>
                     </TouchableWithoutFeedback>
                  </View>
               </TouchableWithoutFeedback>
            </Modal>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   title: {
      fontSize: Sizes.s40,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: Sizes.s15,
      borderColor: '#EFEFEF',
      borderBottomWidth: Sizes.s2,
   },
   item: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: Sizes.s30,
      marginHorizontal: Sizes.s30,
      borderColor: '#EFEFEF',
      borderBottomWidth: Sizes.s2 * 0.7,
   },
});
