import React, { Component } from 'react';
import { Button, Image, View, Text, TextInput, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Sizes } from '@dungdang/react-native-basic';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
         checked: false,
         iconName: 'eye-slash',
         hidePassword: true,
         check: 'circle',
         pressLogin: false,
      };
   }
   componentDidMount() {
      this._retrieveData();
   }

   componentDidUpdate(prevProps) {
      if (prevProps.loginReduces !== this.props.loginReduces) {
         if (this.props.loginReduces.resultCode == 1) {
            this.state.check == 'circle'
               ? (this._removeKey(), this.setState({ username: '', password: '' }))
               : null;
            this.props.navigation.navigate('ManageCourse');
         } else if (this.props.loginReduces.resultCode == -1) {
            alert(this.props.loginReduces.message);
         }
      }
   }

   handleChangeUsername = (username) => {
      this.setState({ username: username });
   };
   handleChangePassword = (password) => {
      this.setState({ password: password });
   };

   _onPressLogin() {
      this.state.check == 'circle' ? this._removeKey() : this._storeData();
      this.props.loginAction(this.state.username, this.state.password);
   }
   _storeData = async () => {
      try {
         await AsyncStorage.setItem('username', this.state.username);
         await AsyncStorage.setItem('password', this.state.password);
      } catch (error) {
         // Error saving data
      }
   };

   _removeKey = async () => {
      try {
         await AsyncStorage.removeItem('username');
         await AsyncStorage.removeItem('password');
      } catch (error) {
         this.setState({ username: '', password: '' });
      }
   };
   _retrieveData = async () => {
      try {
         const value1 = await AsyncStorage.getItem('username');
         const value2 = await AsyncStorage.getItem('password');

         if (value1 !== null) {
            // alert(value1)
            this.setState({
               username: value1,
               password: value2,
               check: 'check-circle',
            });
         }
      } catch (error) {
         this.setState({ username: '', password: '' });
      }
   };
   render() {
      const { username, password } = this.state;
      return (
         <View style={{ flex: 1, backgroundColor: '#f4f8fb' }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}>
               <View style={styles.container}>
                  <View style={styles.image}>
                     <Image source={require('../../res/images/ic_fpt_is.png')} />
                  </View>
                  <Text style={styles.textstyle1}>FIS INSIGHT PORTAL</Text>
                  <Image
                     style={{
                        alignSelf: 'center',
                        height: Sizes.s7,
                        resizeMode: 'contain',
                        marginBottom: Sizes.s35,
                        marginTop: Sizes.s7,
                     }}
                     source={require('../../res/images/stripe.png')}
                  />
                  <Text style={styles.textstyle2}>ĐĂNG NHẬP HỆ THỐNG</Text>
                  {/* /////////////username //////////////////////*/}
                  <View style={styles.textInput}>
                     <Icon
                        name="user-alt"
                        size={Sizes.s35}
                        color="#b2b2b2"
                        style={{ marginLeft: Sizes.s20, alignSelf: 'center' }}
                     />
                     <TextInput
                        style={{
                           // backgroundColor: 'blue',
                           width: '80%',
                           height: Sizes.s100,
                           fontSize: Sizes.s35,
                           textAlign: 'center',
                           alignSelf: 'center',
                        }}
                        placeholder="Username"
                        onChangeText={this.handleChangeUsername}
                        value={username}
                     />
                     <Icon style={{ marginRight: 10, width: Sizes.s50, alignSelf: 'center' }} />
                  </View>

                  {/* /////////////PASSWORD //////////////////////*/}
                  <View style={[styles.textInput, { justifyContent: 'space-between' }]}>
                     <Icon
                        name="lock"
                        size={Sizes.s35}
                        color="#b2b2b2"
                        style={{ marginLeft: Sizes.s20, alignSelf: 'center' }}
                     />
                     <TextInput
                        style={{
                           fontSize: Sizes.s35,
                           width: '80%',
                           height: Sizes.s100,
                           textAlign: 'center',
                           alignSelf: 'center',
                        }}
                        secureTextEntry={this.state.hidePassword}
                        placeholder="Password"
                        onChangeText={this.handleChangePassword}
                        value={password}
                     />
                     <Icon
                        name={this.state.iconName}
                        size={Sizes.s35}
                        color="#b2b2b2"
                        style={{ marginRight: 10, width: Sizes.s50, alignSelf: 'center' }}
                        onPress={() => {
                           if (this.state.iconName === 'eye') {
                              this.setState({ hidePassword: true });
                              this.setState({ iconName: 'eye-slash' });
                           } else {
                              this.setState({ iconName: 'eye' });
                              this.setState({ hidePassword: false });
                           }
                        }}
                     />
                  </View>
                  {/* ////////checkbox/////////////////////////// */}
                  <TouchableOpacity
                     style={styles.checkContainer}
                     activeOpacity={0.5}
                     onPress={() => {
                        if (this.state.check === 'circle') {
                           this.setState({ check: 'check-circle' });
                        } else {
                           this.setState({ check: 'circle' });
                        }
                     }}>
                     <Icon name={this.state.check} size={20} color="#fb9334" style={{ marginTop: 2 }} />
                     <Text style={styles.textstyle3}>Ghi nhớ đăng nhập</Text>
                  </TouchableOpacity>

                  {/* ////////button login/////////////////////// */}
                  <TouchableOpacity
                     activeOpacity={0.5}
                     style={styles.button}
                     onPress={() => {
                        this._onPressLogin();
                     }}>
                     <Text style={styles.textlogin}>ĐĂNG NHẬP</Text>
                  </TouchableOpacity>
                  <View style={styles.image2}>
                     <Image
                        style={{
                           height: Sizes.s160 * 1.8,
                           resizeMode: 'contain',
                        }}
                        source={require('../../res/images/swipe.png')}
                     />
                  </View>
               </View>
               <Text style={styles.footer}>Coppyright {'\u00A9'} 2019, FPT Information System</Text>
            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: Sizes.s15,
      // backgroundColor: '#f4f8fb',
      // backgroundColor: 'red',
      justifyContent: 'center',
   },
   viewFooter: {
      position: 'absolute',
      bottom: 0,
   },
   image: {
      marginBottom: Sizes.s50,
      alignItems: 'center',
   },
   image2: {
      alignItems: 'center',
      marginTop: Sizes.s60,
   },
   textstyle1: {
      fontSize: Sizes.s50,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#335272',
   },
   textstyle2: {
      fontSize: Sizes.s45,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fb9334',
   },
   textstyle3: {
      fontSize: Sizes.s35,
      marginLeft: Sizes.s20,
      fontStyle: 'italic',
      color: '#fb9334',
   },
   textInput: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#d7dde3',
      height: Sizes.s80,
      width: '80%',
      alignSelf: 'center',
      borderRadius: Sizes.s7,
      marginTop: Sizes.s35,
   },
   button: {
      height: Sizes.s80,
      width: '80%',
      alignSelf: 'center',
      backgroundColor: '#fb9334',
      justifyContent: 'center',
      borderRadius: Sizes.s7,
   },
   checkContainer: {
      flexDirection: 'row',
      width: '80%',
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: Sizes.s25,
      marginTop: Sizes.s25,
   },
   textlogin: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: Sizes.s30,
   },
   footer: {
      color: '#797979',
      alignSelf: 'center',
      marginBottom: Sizes.s15,
   },
});
