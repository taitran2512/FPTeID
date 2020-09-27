import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Sizes } from '@dungdang/react-native-basic';

export default class ItemCourse extends React.Component {
   render() {
      return (
         <View style={styles.flatList}>
            <View
               style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
               }}>
               <Text style={styles.title} numberOfLines={2}>
                  {this.props.courseName}
               </Text>
               <Icon style={{ alignSelf: 'center' }} name="ellipsis-v" size={Sizes.s30} />
            </View>

            <View style={styles.cardrow}>
               <Icon name="user-tie" color="gold" size={Sizes.s40} style={styles.icon} />
               <Text style={styles.textSize}>
                  Giảng viên: <Text style={styles.textGV}>{this.props.trainer}</Text>
               </Text>
            </View>

            <View style={styles.cardrow}>
               <Icon name="address-card" size={Sizes.s40} style={styles.icon} />

               <Text style={styles.textSize}>
                  Cán bộ quản lí: <Text style={styles.textCB}>{this.props.created_by}</Text>
               </Text>
            </View>

            <View style={styles.cardrow}>
               <Icon name="calendar-check" color="deepskyblue" size={Sizes.s40} style={styles.icon} />

               <Text style={styles.textSize}>
                  Thời gian: <Text style={styles.textBold}>{this.props.startedDate} - </Text>
                  <Text style={styles.textBold}>{this.props.endedDate}</Text>
               </Text>
            </View>

            <View style={styles.cardrow}>
               <Icon solid={true} name="building" color="#6495ed" size={Sizes.s40} style={styles.icon} />
               <Text style={styles.textSize}>
                  Tòa nhà: <Text style={styles.textBold}>{this.props.buildingName}</Text>
               </Text>
            </View>

            <View style={styles.cardrow}>
               <Icon name="chalkboard-teacher" color="orange" size={Sizes.s40} style={styles.icon} />
               <Text style={styles.textSize}>
                  Phòng: <Text style={styles.textBold}>{this.props.roomName}</Text>
               </Text>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   title: {
      color: '#335272',
      fontSize: Sizes.s40,
      paddingBottom: Sizes.s10,
      fontWeight: 'bold',
      width: '90%',
   },
   textSize: {
      fontSize: Sizes.s30,
   },
   textGV: {
      fontWeight: 'bold',
      color: '#6495ed',
   },
   textCB: {
      fontWeight: 'bold',
      color: 'orange',
   },
   textBold: {
      color: '#335272',
      fontWeight: 'bold',
   },
   flatList: {
      flex: 1,
      margin: Sizes.s25,
      borderRadius: Sizes.s25,
      elevation: Sizes.s15,
      backgroundColor: '#fff',
      paddingRight: Sizes.s40,
      paddingLeft: Sizes.s40,
      paddingTop: Sizes.s20,
      paddingBottom: Sizes.s20,
   },
   icon: {
      marginRight: Sizes.s20,
      width: '10%',
   },
   cardrow: {
      flexDirection: 'row',
      marginBottom: Sizes.s20,
   },
});
