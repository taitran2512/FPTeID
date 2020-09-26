import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Sizes } from '@dungdang/react-native-basic';

export default class ItemCourseDay extends React.Component {
   render() {
      return (
         <View>
            <View style={styles.flatList}>
               <Text style={styles.title}>{this.props.className}</Text>
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
                     Ngày: <Text style={styles.textBold}>{this.props.date}</Text>
                  </Text>
               </View>

               <View style={styles.cardrow}>
                  <Icon name="clock" color="red" size={Sizes.s40} style={styles.icon} />
                  <Text style={styles.textSize}>
                     Thời gian:{' '}
                     <Text style={styles.textBold}>
                        {this.props.startedTime} - {this.props.endedTime}
                     </Text>
                  </Text>
               </View>

               <View style={styles.cardrow}>
                  <Icon name="building" color="#6495ed" size={Sizes.s40} style={styles.icon} />
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

               <View style={styles.cardrow}>
                  <Icon name="wifi" color="limegreen" size={Sizes.s40} style={styles.icon} />
                  <View
                     style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                     }}>
                     <Text style={[styles.textBold,styles.textSize]}>{this.props.wifi}</Text>
                     <Text
                        style={{
                           backgroundColor: '#e3e3e3',
                           fontWeight: 'bold',
                           fontSize: Sizes.s30,
                           color: 'orange',
                           textAlign: 'center',
                           textAlignVertical: 'center',
                           width: Sizes.s120,
                           height: Sizes.s70,
                           borderRadius: Sizes.s20,
                        }}>
                        {this.props.code}
                     </Text>
                  </View>
               </View>
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
	},
	textSize:{
		fontSize: Sizes.s30
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
