

import React, {Component} from 'react';
import {KeyboardAvoidingView, Alert, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, Linking, TextInput, ScrollView } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, Button, ProgressBar, TextFieldOTP} from '../../../components' 
import { Global, Colors, UserDefaults, URLs } from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { NavigationActions, DrawerActions } from 'react-navigation'


type Props = {};

export default class ForgotPassword extends Component<Props> {

  constructor(props){
    super(props);

    this.state={
       username:'',
       password:'',
       otp:''
       
    }
  }

  componentDidMount(){
  }


  render(){
    const { navigation } = this.props;
    const message = navigation.getParam('message', '');
    return(
      <View style= {{flex:1, backgroundColor: '#1a1e27',
    }}
     >

      <View style = {{ justifyContent:"center", backgroundColor:'#282d39', marginLeft:12, marginRight:12, borderRadius:16, marginTop:140, height:400, borderColor:'#8D1B3D', borderWidth:0.5}}>

        <View style = {{paddingTop:0}}>

        <MaterialIcons.Button
                    name={'arrow-back'}
                    backgroundColor={'transparent'}
                    color={ Colors._A2GrayCountryCode}
                    onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                    underlayColor='transparent'
                    size={30}
                    style={{
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 10,
                      marginLeft: 10,
                      marginRight:0,
                    }}
                  />
          <Text style = {styles.welcome}>Forgot Password,</Text>
          <Text style = {styles.subText}>An OTP will be sent to your registered mobile number</Text>
        </View>


            <TextFieldOTP
                  focusOnComponentMount
                  setOTP={(otp) => {
                    this.setState({otp: otp})
                    console.log(this.state.otp)
                  }}
                  size = {48}
                  widthOtp = {Global.screenWidth * 0.8}
                  length={4}
                  style={[{ paddingBottom: 0, alignSelf:'center'}]}
                  onChangeText={text =>
                    this.setState({ invalidMessageVisible: false, errorMsg: '' })
                  }
                />
             
      
        <View style = {{flexDirection:'row', height:40, marginTop:16}}>
         <TextInput
         autoCapitalize = {'none'}
         underlineColorAndroid='rgba(0,0,0,0)'
         secureTextEntry = {!this.state.isPasswordNotVisible}
         onChangeText = {(text)=>{
          this.setState({errorMessage:'', password:text})
        }}
        value = {this.state.password}

         style = {[styles.textInputStyle, {marginLeft:32, flex:1, color:'white'}]}
        
        underlineColorAndroid='transparent'
        placeholder = {'New Password'}
        placeholderTextColor="#ccc"
      
        />

                  <MaterialIcons.Button
                    name={this.state.isPasswordNotVisible ? 'visibility-off' : 'visibility'}
                    backgroundColor={'transparent'}
                    color={ Colors._A2GrayCountryCode}
                    onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                    underlayColor='transparent'
                    size={22}
                    style={{
                      marginTop: 0,
                      marginBottom: 0,
                      padding: 10,
                      marginLeft: 0,
                      marginRight:20,
                    }}
                  />
     </View>             
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
     
      
        <Text style = {{color:'red', justifyContent:'center', alignSelf:'center', paddingTop:16}}>{this.state.errorMessage}</Text>

        <Ripple style = {{backgroundColor:'#8D1B3D', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center'}}>
            <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>RESET</Text>
        </Ripple>


      

     </View>
      </View>
    )
  }
}


