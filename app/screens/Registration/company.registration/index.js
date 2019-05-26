

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
let countryData = [{
  value: 'Bahrain',
}, {
  value: 'Egypt',
}, {
  value: 'Kuwait',
},
{
	value: 'Oman'
},
{
	value:'Qatar'
},
{
	value:'Saudi Arabia'
}

];


export default class Registration extends Component<Props> {

  constructor(props){
    super(props);

    this.state={
        id:'',
        companyName:'',
        email:'',
        phone:'',
        whatsapp:'',
        password:'',
        reenterpassword:'',
        country:'',

        disableFlag:false,
        showLoginModal:true,
        showSignupModal:false
    }

    this.register = this.register.bind(this)
    this.update = this.update.bind(this)

  }

  componentDidMount(){

    UserDefaults.get('UserObj').then(
      (userObj)=>{

        this.setState({

		  id:userObj['id'],
        })
      })  
  }

  register(){
	this.setState({isLoading:true})
    if (
      this.state.companyName != "" &&
      this.state.email != "" &&
      this.state.phone != "" &&
      this.state.whatsapp != "" &&
      this.state.password != "" &&
      this.state.reenterpassword != "" &&
      this.state.country != ""
    ){
		if(this.state.password == this.state.reenterpassword){

			params = 'company_name='+this.state.companyName
                 + '&email='+this.state.email
				 + '&password='+this.state.password
				 + '&mobile='+this.state.phone
         + '&whatsapp='+this.state.whatsapp
         + '&country='+this.state.country
		fetch('http://alaziziyamanpower.com/new_webservices/add-company.php?'+params, {
			method: 'GET',
		  })
		  .then((response) => response.json())
		  .then((responseJson) => {
			
			this.setState({isLoading:false})
			if(responseJson.message == 200){
				Alert.alert('Registration', 'Company registered sucessfully')

			}
			else if (responseJson.message == 202){
				Alert.alert('Something went wrong', 'Company already registered')

			}
			else{
				Alert.alert('Something went wrong', 'Please try again later')
			}
		
			
		  })
		  .catch((error) => {
			console.error(error);
		  });

		}else{
      this.setState({isLoading:false})
			Alert.alert('Something went wrong', 'Passwords do not match')
		}
    }
    else{
      this.setState({isLoading:false})
      Alert.alert('Something went wrong', 'Please fill all the required fields')
    }
   
  }


  update(){
    this.setState({isLoading:true})
    if (
      this.state.companyName != "" &&
      this.state.email != "" &&
      this.state.phone != "" &&
      this.state.whatsapp != "" &&
      this.state.password != "" &&
      this.state.reenterpassword != "" &&
      this.state.country != ""
    ){
		if(this.state.password == this.state.reenterpassword){

      params = 'company_name='+this.state.companyName
      + '&email='+this.state.email
+ '&password='+this.state.password
+ '&mobile='+this.state.phone
+ '&whatsapp='+this.state.whatsapp
+ '&country='+this.state.country
+ '&company_id='+this.state.id

		fetch('http://alaziziyamanpower.com/new_webservices/update-company.php?company_id='+params, {
			method: 'GET',
		  })
		  .then((response) => response.json())
		  .then((responseJson) => {
			
			this.setState({isLoading:false})
			if(responseJson.message == 300){
				Alert.alert('Update', 'Company updated sucessfully')

			}
			else if (responseJson.message == 301){
				Alert.alert('Something went wrong', 'Please try again later')

			}
			
		
			
		  })
		  .catch((error) => {
			console.error(error);
		  });

		}else{
			Alert.alert('Something went wrong', 'Passwords do not match')
		}
    }
    else{
      Alert.alert('Something went wrong', 'Please fill all the required fields')
    }
   
  }
  render(){
    const { navigation } = this.props;
    const isUpdate = navigation.getParam('isUpdate', 3);

    return(
     <View style = {{flex:1, backgroundColor: '#1a1e27'}}>
        <View style = {{paddingTop:32, paddingLeft:30, }}>
          <Text style = {styles.welcome}>{isUpdate == 0 ? 'Signup' : 'Update'}</Text>
          <Text style = {styles.subText}>{isUpdate == 0 ? 'New Account' : 'Update your profile'}</Text>
        </View>

      

         <TextInput 
        placeholder = "Company Name"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', companyName:text})
       }}
       value = {this.state.companyName}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       
        <TextInput 
         autoCapitalize = {'none'}
        placeholder = "Email"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', email:text})
       }}
       value = {this.state.email}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       

       

         <TextInput 
        placeholder = "Phone"
        placeholderTextColor = "#ccc"
       underlineColorAndroid='rgba(0,0,0,0)'
	   autoCapitalize={false}
	   keyboardType={'number-pad'}
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', phone:text})
       }}
       value = {this.state.phone}
        style = {{height:40, marginLeft:32, marginTop:0, width:Global.screenWidth-60, color:'white'}}
        />
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
       
		<TextInput 
        placeholder = "Whatsapp"
        placeholderTextColor = "#ccc"
	   underlineColorAndroid='rgba(0,0,0,0)'
	   keyboardType={'number-pad'}
       autoCapitalize={false}
       onChangeText = {(text)=>{
         this.setState({errorMessage:'', whatsapp:text})
       }}
       value = {this.state.whatsapp}
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
     
       
        <View style = {{flexDirection:'row', height:40}}>
         <TextInput
         autoCapitalize = {'none'}
         underlineColorAndroid='rgba(0,0,0,0)'
         secureTextEntry = {true}
         onChangeText = {(text)=>{
          this.setState({errorMessage:'', reenterpassword:text})
        }}
        value = {this.state.reenterpassword}

         style = {[styles.textInputStyle, {marginLeft:32, flex:1, color:'white'}]}
        
        underlineColorAndroid='transparent'
        placeholder = {'Re-Enter Password'}
        placeholderTextColor="#ccc"
      
        />

                 
     </View>             
             
        <Separator style={{ height: 1, width: Global.screenWidth * 0.85, alignSelf: 'center' }} />
     
       <View style = {{marginLeft:32, marginRight:32, marginTop:-12}}> 
        <Dropdown
          label='Country'
          baseColor = "white"
          itemColor = "black"
          selectedItemColor ="black"
          textColor = "white"
          fontSize={14}
          data={countryData}
          onChangeText = {(value) => {this.setState({country:value})}}
        />
      </View>

     

     

        <Text style = {{color:'red', justifyContent:'center', alignSelf:'center', paddingTop:16}}>{this.state.errorMessage}</Text>

		    {isUpdate == 0 ?
        <Text style = {styles.termsText}>By clicking you agreed to the <Text style = {{color:'#8D1B3D', fontSize:12, fontWeight:"400"}}>Terms and Conditions</Text> governing the use of jobportal</Text>
        :(null)
        }

      {isUpdate == 0 ?
        <Ripple 
          onPress = {this.register}
          style = {{backgroundColor:'#8D1B3D', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center', margin:16}}>
            <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>Register</Text>
          </Ripple>
          :
          <Ripple 
          onPress = {this.update}
          style = {{backgroundColor:'#8D1B3D', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center', margin:16}}>
            <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>Update</Text>
          </Ripple>
      }

		  {this.state.isLoading ? <ProgressBar/> : (null)} 
		  </View>
    )
  }
}


