import { Button } from 'react-native-elements';
import { objectIsNull, arrayIsEmpty, stringIsEmpty } from '@dungdang/react-native-basic/src/Functions';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';

import Header from '../../custom/Header';
import { Sizes } from '@dungdang/react-native-basic';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewCourse extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dataRoomBuilding: [],
         dataBuilding: [],
         dataRoom: [],
         courseName: '',
         trainer: '',
         startedDate: '',
         endedDate: '',
         buildingId: '',
         roomId: '',
      };
   }
   //Get tòa nhà vào array và truyền vào dropdown
   dropdownBuiding() {
      var arrayBuilding = [];
      for (let building of this.state.dataRoomBuilding) {
         var data = {
            label: building.buildingName,
            value: building._id,
         };
         arrayBuilding.push(data);
      }
      this.setState({
         dataBuilding: arrayBuilding,
      });
   }

   //Get tên room theo từng building
   dropdownRoom(buildingName) {
      arrayRoom = [];
      this.state.dataRoomBuilding.map(function (building) {
         if (buildingName === building.buildingName) {
            building.room.map(function (room) {
               var dataR = {
                  label: room.roomName + ' - ' + room.location,
                  value: room._id,
               };
               arrayRoom.push(dataR);
            });
         }
      });
      this.setState({ dataRoom: arrayRoom });
   }

   //Component mount
   async componentDidMount() {
      this.props.getRoomAction();
   }
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.roomBuildingReducer !== this.props.roomBuildingReducer) {
         if (!objectIsNull(this.props.roomBuildingReducer)) {
            if (!arrayIsEmpty(this.props.roomBuildingReducer.data)) {
               this.setState({
                  dataRoomBuilding: this.props.roomBuildingReducer.data,
               });
            }
         }
      }
      if (prevState.dataRoomBuilding !== this.state.dataRoomBuilding) {
         this.dropdownBuiding();
      }
      //tạo mới thành công
      if (prevProps.createCourseReducer !== this.props.createCourseReducer) {
         if (this.props.createCourseReducer.resultCode === 1) {
            alert(this.props.createCourseReducer.message);
            this.setState({
               courseName: '',
               trainer: '',
               startedDate: '',
               endedDate: '',
               buildingId: '',
               roomId: '',
            });
         } else if (this.props.createCourseReducer.resultCode === -1) {
            alert(this.props.createCourseReducer.message);
         }
      }
   }
   //get tên tòa nhà
   handleChangebuildingId = (label, value) => {
      this.setState({ buildingId: value });
      this.dropdownRoom(label); //lấy danh sách room khi chọn building
   };
   //get tên phòng
   handleChangeroomId = (value) => {
      this.setState({ roomId: value });
   };
   //get tên khóa học""
   handleChangecourseName = (courseName) => {
      this.setState({ courseName: courseName });
   };
   //get tên giảng viên
   handleChangetrainer = (trainer) => {
      this.setState({ trainer: trainer });
   };
   //get start date
   handleChangestartedDate = (startedDate) => {
      this.setState({ startedDate: startedDate });
   };
   //get end date
   handleChangeendedDate = (endedDate) => {
      this.setState({ endedDate: endedDate });
   };
   //valid date
   betweenDate() {
      return new Date(this.state.endedDate).getDay() - new Date(this.state.startedDate).getDay();
   }

   onPressSaveButton = () => {
      if (
         stringIsEmpty(this.state.courseName) ||
         stringIsEmpty(this.state.trainer) ||
         stringIsEmpty(this.state.startedDate) ||
         stringIsEmpty(this.state.endedDate) ||
         stringIsEmpty(this.state.buildingId) ||
         stringIsEmpty(this.state.roomId)
      ) {
         alert('Vui lòng nhập đầy đủ thông tin');
      } else {
         if (this.betweenDate() < 0) {
            alert('Ngày tháng không hợp lệ');
         } else {
            this.props.createCourseAction(
               this.state.courseName,
               this.state.trainer,
               this.state.startedDate.split('-').reverse().join('-'),
               this.state.endedDate.split('-').reverse().join('-'),
               this.state.buildingId,
               this.state.roomId,
            );
         }
      }
   };
   render() {
      return (
         <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header
               title="Tạo mới khóa học"
               onPressBackButton={() => this.props.navigation.navigate('ManageCourse')}
            />
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
               {/* /////Tên Khóa/////////////////		 */}
               <View style={styles.container}>
                  <Text style={styles.textstyle}>Tên khóa</Text>
                  <TextInput
                     style={styles.textInput}
                     placeholder="Nhập tên khóa học"
                     onChangeText={this.handleChangecourseName}
                     value={this.state.courseName}
                  />
                  {/* /////Giảng viên///////////////		 */}
                  <Text style={styles.textstyle}>Giảng viên</Text>
                  <TextInput
                     style={styles.textInput}
                     placeholder="Nhập tên giảng viên"
                     onChangeText={this.handleChangetrainer}
                     value={this.state.trainer}
                  />
                  {/* //////////////////////		 */}
                  <View style={[styles.column, { justifyContent: 'space-between' }]}>
                     <Text style={[styles.textstyle, { width: '48%' }]}>Từ ngày</Text>
                     <Text style={[styles.textstyle, { width: '48%' }]}>Đến ngày</Text>
                  </View>
                  {/* ////Date picker  //////////////////////////////////////////////////////////////////////////*/}
                  <View style={[styles.column, { justifyContent: 'space-between', marginRight:Sizes.s10 }]}>
                     {/* ////start date////////////////////// */}
                        <DatePicker
                           style={{ width: '48%' }}
                           date={this.state.startedDate}
									mode="date"
                           format="DD-MM-YYYY"
                           placeholder="Select date"
                           minDate={new Date()}
                           confirmBtnText="Confirm"
									cancelBtnText="Cancel"
                           iconComponent={<Icon name="angle-down" size={Sizes.s30} style={{marginLeft:-Sizes.s30}}/>}
                           customStyles={{
                              dateInput: styles.dateInput,
                              dateText: styles.textDate,
                           }}
                           onDateChange={(date) => {
                              this.handleChangestartedDate(date);
                           }}
                        />
                     {/* ////endate////////////////////// */}
                        <DatePicker
                           style={{ width: '48%' }}
                           date={this.state.endedDate}
									mode="date"
									// showIcon={false}
                           format="DD-MM-YYYY"
                           placeholder="Select date"
                           minDate={new Date()}
                           confirmBtnText="Confirm"
									cancelBtnText="Cancel"
                           iconComponent={<Icon name="angle-down" size={Sizes.s30} style={{marginLeft:-Sizes.s30}}/>}
                           customStyles={{               
                              dateInput: styles.dateInput,
                              dateText: styles.textDate,
                           }}
                           onDateChange={(date) => {
                              this.handleChangeendedDate(date);
                           }}
                        />
                  </View>

                  {/* /////Tòa nhà/////////////////		 */}
                  <Text style={styles.textstyle}>Tòa nhà</Text>
                  <DropDownPicker
                     items={this.state.dataBuilding}
                     onChangeItem={(item) => {
                        this.handleChangebuildingId(item.label, item.value);
                     }}
                     labelStyle={styles.textDate}
                     style={{ borderColor: '#D7DDE3', borderRadius: Sizes.s7 }}
                     containerStyle={{
                        height: Sizes.s90,
                        marginTop: Sizes.s15,
                        marginBottom: Sizes.s15,
                     }}
                  />

                  {/* /////Phòng/////////////////		 */}
                  <Text style={styles.textstyle}>Phòng</Text>
                  <DropDownPicker
                     items={this.state.dataRoom}
                     onChangeItem={(item) => {
                        this.handleChangeroomId(item.value);
                     }}
                     labelStyle={styles.textDate}
                     style={{ borderColor: '#D7DDE3', borderRadius: Sizes.s7 }}
                     containerStyle={{
                        height: Sizes.s90,
                        marginTop: Sizes.s15,
                        marginBottom: Sizes.s15,
                     }}
                  />
                  {/* /////button Lưu/////////////////		 */}
                  <View
                     style={{
                        alignSelf: 'flex-end',
                        width: '40%',
                     }}>
                     <Button
                        icon={{
                           name: 'save',
                           size: Sizes.s40,
                           color: 'white',
                        }}
                        title="LƯU"
                        buttonStyle={{
                           marginTop: Sizes.s25,
                           backgroundColor: '#fb9334',
                           width: '100%',
                           borderRadius: Sizes.s10,
                        }}
                        onPress={this.onPressSaveButton}
                     />
                  </View>
               </View>
            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: Sizes.s30,
   },
   textstyle: {
      color: '#335272',
      fontSize: Sizes.s30,
      fontWeight: 'bold',
   },
   textInput: {
      marginTop: Sizes.s10,
      marginBottom: Sizes.s10,
      borderRadius: Sizes.s7,
      fontSize: Sizes.s30,
      color: '#335272',
      borderColor: '#D7DDE3',
      borderWidth: 1,
      height: Sizes.s90,
   },
   viewDateInput: {
		backgroundColor: 'red'
		// width:'50%'
	},
   dateInput: {
      height: Sizes.s80,
      width: '80%',
      backgroundColor: 'white',
      borderColor: '#D7DDE3',
      borderRadius: Sizes.s7,
   },
   textDate: {
      color: '#335272',
      fontSize: Sizes.s30,
   },
   column: {
      marginBottom: Sizes.s15,
      flexDirection: 'row',
      // flexWrap: 'wrap',
      // alignItems: 'flex-start',
   },
});
