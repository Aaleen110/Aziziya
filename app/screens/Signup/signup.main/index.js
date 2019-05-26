

import React, {Component} from 'react';
import {KeyboardAvoidingView, Alert, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, Linking, TextInput, ScrollView } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, ProgressBar} from '../../../components' 
import { Global, Colors, UserDefaults, URLs } from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { AsyncStorage } from "react-native"
import { NavigationActions, DrawerActions } from 'react-navigation'
import { Dropdown } from 'react-native-material-dropdown';



type Props = {};
let eduData = [{
  value: 'SSC',
}, {
  value: 'HSC',
}, {
  value: 'Graduation',
},
{
  value:'Post graduation'
}

];

let martialData = [{
  value: 'Single',
}, {
  value: 'Married',
},
, {
  value: 'Divorced',
},
, {
  value: 'Widow',
},

];

export default class SignupScreen extends Component<Props> {

  constructor(props){
    super(props);

    this.state={
        fullname:'',
        mobile:'',
        email:'',
        password:'',
        age:'',
        nationality:'',
        religion:'',
        education:'',
        marital_status:'',
        passport_number:'',

        disableFlag:false,
        showLoginModal:true,
        showSignupModal:false
    }

    this.signup = this.signup.bind(this)
    this.saveSignupData = this.saveSignupData.bind(this)
    this.gotoNextScreen = this.gotoNextScreen.bind(this)

  }

  saveSignupData = async (fullname, mobile, email, password) => {
    try {
      await AsyncStorage.setItem('fullname', fullname);
      await AsyncStorage.setItem('mobile', mobile);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);

      this.setState({isLoading:false})
    } catch (error) {
      // Error saving data
      console.log('Error', error)
    }
  }

  gotoNextScreen(){

    if (
      this.state.fullname != "" &&
      this.state.mobile != "" &&
      this.state.email != "" &&
      this.state.password != "" &&
      this.state.age != "" &&
      this.state.nationality != "" &&
      this.state.religion != "" &&
      this.state.education != "" &&
      this.state.marital_status != "" &&
      this.state.passport_number !=""
     
    ){
      this.props.navigation.navigate(Routes.signupScreenJob,
        {
          'fullname': this.state.fullname,
          'mobile':this.state.mobile,
          'email': this.state.email,
          'password': this.state.password,
          'age': this.state.age,
          'nationality': this.state.nationality,
          'religion': this.state.religion,
          'education': this.state.education,
          'marital_status': this.state.marital_status,
          'passport_nu,ber': this.state.passport_number
        }
        )
    }
    else{
      Alert.alert('Something went wrong', 'Please fill all the required fields')
    }
   
  }

  signup(){

    this.setState({isLoading:true})
    if(    
         this.state.fullname !=''
        && this.state.mobile !=''
        && this.state.email !=''
        && this.state.password !=''){
            
     this.saveSignupData(this.state.fullname, this.state.mobile, this.state.email, this.state.password).then(()=>{
       Alert.alert('Sucess', 'Signup sucessfull')
     })
    }else{
      this.setState({isLoading:false})
      Alert.alert('Credentials', 'Please fill all required fields first')
    }
  }

  render(){
    return(
      <ScrollView
      style={{ backgroundColor: '#1a1e27' }}
      
    >
        <View style = {{paddingTop:32, paddingLeft:30, }}>

       
        
        <View style = {{flex:1, flexDirection:'row', justifyContent:'space-evenly', marginTop:20, marginBottom:16,marginLeft:-30}}>
        
        
            <View   
            style = {{borderColor:'#fff', borderWidth:0.3, marginLeft:10, backgroundColor:'#8D1B3D', borderWidth:0.5, height:15, width:15, alignSelf:'center', borderRadius:20, justifyContent:'center'}}>
            </View>
          

            <View   
              style = {{borderColor:'#fff', borderWidth:0.3, marginLeft:10, backgroundColor:'#1a1e27', height:15, width:15, alignSelf:'center', borderRadius:20, justifyContent:'center'}}>
            </View>
        

            <View   
              style = {{borderColor:'#fff', borderWidth:0.3, marginLeft:10, backgroundColor:'#1a1e27', height:15, width:15, alignSelf:'center', borderRadius:20, justifyContent:'center'}}>
            </View>
        </View>    
        {/* <MaterialIcons.Button
                    name={'arrow-back'}
                    backgroundColor={'transparent'}
                    color={ Colors._A2GrayCountryCode}
                    onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
                    underlayColor='transparent'
                    size={30}
                    style={{
                      marginTop: 0,
                      marginBottom: 5,
                      padding: 0,
                      marginLeft: 0,
                      marginRight:0,
                    }}
                  /> */}
    
          <Text style = {styles.welcome}>Basic,</Text>
          <Text style = {styles.subText}>Enter your basic details</Text>
        </View>

      

         <TextInput 
        placeholder = "Fullname"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', fullname:text})
       }}
       value = {this.state.fullname}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       
        <TextInput 
        placeholder = "Mobile"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       keyboardType={'numeric'}
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', mobile:text})
       }}
       value = {this.state.mobile}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       

       

         <TextInput 
          autoCapitalize = {'none'}
        placeholder = "Email"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       autoCapitalize={false}
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', email:text})
       }}
       value = {this.state.email}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       

        <View style = {{flexDirection:'row', height:40}}>
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
        placeholder = {'Password'}
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
     
       
       <View style = {{marginLeft:32, marginRight:32, marginTop:-12}}> 
        <Dropdown
          label='Education'
          baseColor = "white"
          itemColor = "black"
          selectedItemColor ="black"
          textColor = "white"
          fontSize={14}
          data={eduData}
          onChangeText = {(value) => {this.setState({education:value})}}
        />
      </View>

      <View style = {{marginLeft:32, marginRight:32, marginTop:-12}}> 
        <Dropdown
           label='Marital Status'
           baseColor = "white"
           itemColor = "black"
           selectedItemColor ="black"
           textColor = "white"
           fontSize={14}
           data={martialData}
           onChangeText = {(value) => {this.setState({marital_status:value})}}
        />
      </View>


      <TextInput 
        placeholder = "Age"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       keyboardType={'numeric'}
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', age:text})
       }}
       value = {this.state.age}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       


        <TextInput 
        placeholder = "Nationality"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', nationality:text})
       }}
       value = {this.state.nationality}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       


        <TextInput 
        placeholder = "Religion"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', religion:text})
       }}
       value = {this.state.religion}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />

        <TextInput 
        placeholder = "Passport Number"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', passport_number:text})
       }}
       value = {this.state.passport_number}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       

     

        <Text style = {{color:'red', justifyContent:'center', alignSelf:'center', paddingTop:16}}>{this.state.errorMessage}</Text>

        <Ripple 
          onPress = {this.gotoNextScreen}
          style = {{backgroundColor:'#8D1B3D', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center'}}>
            <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>Next</Text>
          </Ripple>

        


      

    
    </ScrollView>
    )
  }
}


