

import React, {Component} from 'react';
import {KeyboardAvoidingView, Alert, Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity, Linking, TextInput, ScrollView, Image } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, ProgressBar} from '../../../components' 
import { Global, Colors, UserDefaults, Routes, URLs } from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import {NavigationActions, StackActions } from 'react-navigation'
import { AsyncStorage } from "react-native"

export default class LoginScreen extends Component<Props> {

  constructor(props){
    super(props);

    this.state={
        email:'',
        password:'',
        disableFlag:false,
        showLoginModal:true,
        showSignupModal:false,
        isLoading:false,


        resumeId:'', 
        age:'',
        email:'',
        enter_date:'',
        expected_salary:'',
        experience:'',
        image1:'',
        image2:'',
        job_category:'',
        job_description:'',
        job_location:'',
        job_type:'',
        marital_status:'',
        name:'', 
        nationality:'',
        notice_period:'',
        password:'',
        previos_salary:'',
        religion:'',
        resume_file:'',
        resume_status:'',
        skills:'',
        status:'',

        isAdmin:0


        
    }
    this.gotoSignup = this.gotoSignup.bind(this)
    this.gotoForgotPassword=this.gotoForgotPassword.bind(this)
    this.login = this.login.bind(this)
    this.saveLoginData = this.saveLoginData.bind(this)
    this.switchLogin = this.switchLogin.bind(this)
    this.gotoCompanyRegister = this.gotoCompanyRegister.bind(this)
    this.gotoDefault = this.gotoDefault.bind(this)
  }

  gotoDefault(){

    const resetAction = StackActions.reset({
      index: 0,
      key:null,
      actions: [
        NavigationActions.navigate({
          routeName: Routes.tabbarNavDefault 
        })
      ]
    })
    this.props.navigation.dispatch(resetAction)

  }

  login(){


    this.setState({isLoading:true})

    if (this.state.email != "" && this.state.password != ""){
    let params = ''

    //raufshaikh795@gmail.com
    //password=12345

    // let params = 'email=raufshaikh795@gmail.com'
    //              + '&password=12345'
    //              + '&usertype=2'

    if(this.state.isAdmin){             
     params = 'email='+this.state.email
                 + '&password='+this.state.password
                 + '&usertype=2'
    }else{
       params = 'email='+this.state.email
                 + '&password='+this.state.password
                 + '&usertype=1'
    }

    fetch('http://alaziziyamanpower.com/new_webservices/login.php?'+params, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {

      console.log('RESPONSE', JSON.stringify(responseJson))

      if (responseJson.message == 10000){
        this.saveLoginData(responseJson).then(()=>{

          if( this.state.isAdmin){

            UserDefaults.set('isAdmin', 1);
            UserDefaults.set('isLoggedin', 1);
 
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: Routes.tabbarNavAdmin, params:{isAdmin:1}
              })
            ]
          })
          this.props.navigation.dispatch(resetAction)
        }else{
          UserDefaults.set('isAdmin', 0);
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: Routes.tabbarNav, params:{isAdmin:0}
              })
            ]
          })
          this.props.navigation.dispatch(resetAction)
        }

        
        })
        this.setState({isLoading:false})
      }else{
        Alert.alert("Something went wrong", "Username or password is incorrect")
        this.setState({isLoading:false})
      }
      
    })
    .catch((error) => {
      console.error(error);
    });
  }
  else{
    this.setState({isLoading:false})
    Alert.alert("Something went wrong", "Please enter username and password")

  }
  }

  async saveLoginData(response){
    data = response.data[0]

    console.log('LOGIN DATA',data)

    var userObj = {
           
        id:data.id,
        email:data.email,
        enter_date:data.enter_date,
        password:data.password,
        country:data.country,
        whatsapp:data.whatsapp,
        company_name:data.company_name,
        mobile:data.mobile
        // resumeId:data.resume_id, 
        // age:data.age,
        // email:data.email,
        // enter_date:data.enter_date,
        // expected_salary:data.expected_salary,
        // experience:data.experience,
        // image1:data.image1,
        // image2:data.image2,
        // job_category:data.job_category,
        // job_description:data.job_description,
        // job_location:data.job_location,
        // job_type:data.job_type,
        // marital_status:data.marital_status,
        // name:data.name, 
        // nationality:data.nationality,
        // notice_period:data.notice_period,
        // password:data.password,
        // previos_salary:data.previos_salary,
        // religion:data.religion,
        // resume_file:data.resume_file,
        // resume_status:data.resume_status,
        // skills:data.skills,
        // status:data.status,
    }

    UserDefaults.set('UserObj', userObj)
    UserDefaults.set('id', data.id)

  }

  // login = async () => {
  //   try {

  //   if(this.state.email !="" && this.state.password !=""){  
  //     const email = await AsyncStorage.getItem('email');
  //     const password = await AsyncStorage.getItem('password');

  //     if (email !== null && password!=null) {
  //       if(this.state.email == email  && this.state.password == password){
  //         this.props.navigation.navigate(Routes.profile, {})
  //       }else{
  //         Alert.alert('Invalid Credentials', 'email or Password is incorrect')
  //       }
       
        
  //     }

  //   }
  //   else{

  //     Alert.alert('Credentials Missing', 'Please fill in required credentials to login')
  //   }
  //    } catch (error) {
  //      // Error retrieving data
  //    }
  // }

  gotoCompanyRegister(){
    this.props.navigation.navigate(Routes.registration, {isUpdate:0})
  }
 

  gotoSignup(){
      this.props.navigation.navigate(Routes.signupScreen, {})
  }

  gotoForgotPassword(){
        this.props.navigation.navigate(Routes.forgotPassword, {})
  }


  switchLogin(){

    this.setState({
      isAdmin:!this.state.isAdmin
    })

  }

  render(){
    return(
      <ScrollView 
      contentContainerStyle= {{justifyContent:"center"}}
      style = {{flex:1, backgroundColor:'#1a1e27'}}>

      
      <Image 
      style = {{marginLeft:16, marginTop:50, alignSelf:'center', height:150, width:150}}
      source={require('../../../assets/common/logo.png')} />


      {this.state.isAdmin ?
              <View style = {{flex:1, justifyContent:"center", marginTop:16, backgroundColor:'#fff', marginLeft:12, marginRight:12, marginBottom:12, borderRadius:16, borderColor:'#8D1B3D', borderWidth:0.5}}>
              <View style = {{paddingTop:20, paddingLeft:30}}>
                <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style = {styles.mainHeader2_1}>Administrator</Text>
                    <Text 
                      onPress={this.gotoDefault}
                      style = {{color:'grey', marginRight:16, fontWeight:'bold', fontSize:18, borderWidth:1, borderColor:'grey', borderRadius:8, padding:5}}>Skip></Text>
                  </View>
                <View style ={{flexDirection:"row", marginLeft:0, marginTop:16}}>
                  <Text style = {styles.mainHeader}>Al Aziziya</Text>
                  <Text style = {styles.mainHeader2_1}> Manpower Supply</Text>
                </View>
              <Text style = {styles.subText}>Log in to continue</Text>
            </View>

            <TextInput 
            autoCapitalize = {'none'}
            placeholder = "email*"
            placeholderTextColor = "#ccc"
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText = {(text)=>{
            this.setState({errorMessage:'', email:text})
          }}
          value = {this.state.email}
            style = {{height:40, marginLeft:32, marginTop:16, width:Global.screenWidth-60, color:'#A9A9A9'}}
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

            style = {[styles.textInputStyle, {marginLeft:32, flex:1, color:'#A9A9A9'}]}
            
            underlineColorAndroid='transparent'
            placeholder = {'Password*'}
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
    {/* 
            <Button
            title = "Login"
            style = {styles.buttonContainer}
            onPress = {this.login}
            /> */}

              <Ripple 
                onPress = {this.login}
                style = {{backgroundColor:'#8D1B3D', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center'}}>
                <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>LOGIN</Text>
              </Ripple>

            {this.state.isAdmin ? (null):
              <Ripple 
              onPress = {this.gotoSignup}
              style = {{backgroundColor:'#1a1e27', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center', marginTop:12, borderColor:'#8D1B3D', borderWidth:0.5}}>
                <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>REGISTER</Text>
              </Ripple>
          }
            <Text
            onPress={this.switchLogin}
            style = {{color:'grey', alignSelf:'center', padding:16, fontWeight:'bold'}}
            >Are you an Company? Click here</Text>
  

        </View>
        :
    
              <View style = {{flex:1, justifyContent:"center", marginTop:16, backgroundColor:'#282d39', marginLeft:12, marginRight:12, marginBottom:12, borderRadius:16, borderColor:'#8D1B3D', borderWidth:0.5}}>
                  <View style = {{paddingTop:20, paddingLeft:30,}}>

                  <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style = {styles.mainHeader2_1}>Company</Text>
                    <Text 
                      onPress={this.gotoDefault}
                      style = {{color:'grey', marginRight:16, fontWeight:'bold', fontSize:18, borderWidth:1, borderColor:'grey', borderRadius:8, padding:5}}>Skip></Text>
                  </View>
                    <View style ={{flexDirection:"row", marginLeft:0, marginTop:16}}>
                      <Text style = {styles.mainHeader}>Al Aziziya</Text>
                      <Text style = {styles.mainHeader2}> Manpower Supply</Text>
                    </View>
                  <Text style = {styles.subText}>Log in to continue</Text>
                </View>

                <TextInput 
                autoCapitalize = {'none'}
                placeholder = "email*"
                placeholderTextColor = "#ccc"
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText = {(text)=>{
                this.setState({errorMessage:'', email:text})
              }}
              value = {this.state.email}
                style = {{height:40, marginLeft:32, marginTop:16, width:Global.screenWidth-60, color:'white'}}
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
                placeholder = {'Password*'}
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
        {/* 
                <Button
                title = "Login"
                style = {styles.buttonContainer}
                onPress = {this.login}
                /> */}

                  <Ripple 
                    onPress = {this.login}
                    style = {{backgroundColor:'#8D1B3D', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center'}}>
                    <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>LOGIN</Text>
                  </Ripple>

                  <Ripple 
                  onPress = {this.gotoCompanyRegister}
                  style = {{backgroundColor:'#1a1e27', height:40, width:150, alignSelf:'center', borderRadius:20, justifyContent:'center', marginTop:12, borderColor:'#8D1B3D', borderWidth:0.5}}>
                    <Text style = {{alignSelf:'center', color:'white', fontWeight:'bold'}}>REGISTER</Text>
                  </Ripple>

                <Text
                onPress={this.switchLogin}
                style = {{color:'grey', alignSelf:'center', padding:16, fontWeight:'bold'}}
                >Are you an Administrator? Click here</Text>


            </View>

    
              }
      
       {this.state.isLoading ? <ProgressBar/> : (null)} 
      </ScrollView>

      
    )
  }
}
