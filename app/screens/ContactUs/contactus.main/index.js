

import React, {Component} from 'react';
import {Image, Text, View, ScrollView, Alert, Linking } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, Button, ProgressBar, TextFieldOTP} from '../../../components' 
import { Global, Colors, UserDefaults, URLs } from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/Entypo';
import MaterialIconsMain from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
import { NavigationActions, StackActions } from 'react-navigation'


type Props = {};

export default class ContactUs extends Component<Props> {

  constructor(props){
    super(props);

    this.state={
      
        
    }
   
    this.logout = this.logout.bind(this)
    this.goback = this.goback.bind(this)
    
  }

  logout(){


    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => this.goback()
      
      },
      ],
      {cancelable: false},
    );   
  }

  goback(){

    UserDefaults.set('isLoggedin', 0);

    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName: Routes.loginScreen
        })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }  

  render(){
    return(
      <ScrollView style={{ backgroundColor: '#1a1e27' }}>
      
        <View style= {{flexDirection:'column',backgroundColor:'#1a1e27', flex:1}}>

          <View style = {{backgroundColor:'#8D1B3D', height:180}}> 
            <Text style = {{color:'#fff', fontSize:32, fontWeight:"400",marginTop:48, marginLeft:16}}>Contact Us</Text>
            <Text style = {{color:Colors._A2GrayCountryCode, marginLeft:16}}>Find Jobs, Employment & Career Opportunities in QATAR</Text>
          </View>
          
          <Ripple 
            onPress= {()=>{
              Linking.openURL('https://www.google.com/maps/place/Al+Aziziya+Manpower+Consultancy/@25.2425954,51.4467093,15z/data=!4m5!3m4!1s0x0:0x5c814e227fff9b91!8m2!3d25.2425954!4d51.4467093')
            }}
            style = {{flexDirection:'row', marginTop:32}}>
                      <MaterialIcons.Button
                        name={'location-pin'}
                        backgroundColor={'transparent'}
                        color={ Colors._A2GrayCountryCode}
                        onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                        underlayColor='transparent'
                        size={36}
                        style={{
                          marginTop: 16,
                          marginBottom: 0,
                          padding: 10,
                          marginLeft: 0,
                          marginRight:0,
                        }}
                      />
                      <Text style = {{color:Colors._A2GrayCountryCode, marginTop:32, fontSize:16 }}>Al Aziziya, Doha, QATAR</Text>
            </Ripple>


            <Ripple 
            onPress={()=>{
              Linking.openURL(`tel:${33263555}`)
            }}
            style = {{flexDirection:'row'}}>
                      <MaterialIconsMain.Button
                        name={'call'}
                        backgroundColor={'transparent'}
                        color={ Colors._A2GrayCountryCode}
                        onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                        underlayColor='transparent'
                        size={34}
                        style={{
                          marginTop: 16,
                          marginBottom: 0,
                          padding: 10,
                          marginLeft: 0,
                          marginRight:0,
                        }}
                      />
                      <Text style = {{color:Colors._A2GrayCountryCode, marginTop:32, fontSize:16 }}>33263555</Text>
            </Ripple>

            <Ripple style = {{flexDirection:'row'}}>
                      <FontAwesome.Button
                        name={'fax'}
                        backgroundColor={'transparent'}
                        color={ Colors._A2GrayCountryCode}
                        onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                        underlayColor='transparent'
                        size={34}
                        style={{
                          marginTop: 16,
                          marginBottom: 0,
                          padding: 10,
                          marginLeft: 0,
                          marginRight:0,
                        }}
                      />
                      <Text style = {{color:Colors._A2GrayCountryCode, marginTop:32, fontSize:16 }}>44771272</Text>
            </Ripple>

            <Ripple 
              onPress = {() => Linking.openURL('mailto:salaziziyamanpowersupply@gmail.com') }
              style = {{flexDirection:'row'}}>
                      <MaterialIconsMain.Button
                        name={'email'}
                        backgroundColor={'transparent'}
                        color={ Colors._A2GrayCountryCode}
                        onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                        underlayColor='transparent'
                        size={34}
                        style={{
                          marginTop: 16,
                          marginBottom: 0,
                          padding: 10,
                          marginLeft: 0,
                          marginRight:0,
                        }}
                      />
                      <Text style = {{color:Colors._A2GrayCountryCode, marginTop:28, fontSize:16 }}>
                      alaziziyamanpowersupply@gmail.com</Text>
            </Ripple>


            <View style= {{flexDirection:'row', marginTop:32}}>            
                <Ripple 
                        onPress = {()=>{
                          Linking.openURL('https://www.facebook.com/alaziziya.manpowersupply')
                        }}
                        style = {{height:40, width:40, backgroundColor:'transparent', borderRadius:10, borderWidth:1.3, borderColor:'#8D1B3D', marginLeft:32, marginTop:16,justifyContent:'center', alignItems:'center',}}>
                            <FontAwesome.Button
                                name={'facebook'}
                                backgroundColor={'transparent'}
                                color={ Colors._A2GrayCountryCode}
                                onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                                underlayColor='transparent'
                                size={30}
                                style={{
                                alignSelf:'center', 
                                justifyContent:'center'   ,
                                marginTop: 0,
                                marginBottom: 0,
                                padding: 0,
                                marginLeft: 4,
                                marginRight:0,
                                }}
                            />
                    </Ripple>

                    <Ripple 
                        onPress = {()=>{
                          Linking.openURL('https://twitter.com/Alaziziyamanpo1')
                        }}
                        style = {{height:40, width:40, backgroundColor:'transparent', borderRadius:10, borderWidth:1.3, borderColor:'#8D1B3D', marginLeft:32, marginTop:16,justifyContent:'center', alignItems:'center',}}>
                            <FontAwesome.Button
                                name={'twitter'}
                                backgroundColor={'transparent'}
                                color={ Colors._A2GrayCountryCode}
                                onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                                underlayColor='transparent'
                                size={28}
                                style={{
                                alignSelf:'center', 
                                justifyContent:'center'   ,
                                marginTop: 0,
                                marginBottom: 0,
                                padding: 0,
                                marginLeft: 4,
                                marginRight:0,
                                }}
                            />
                    </Ripple>

                    <Ripple 
                        onPress = {()=>{
                          Linking.openURL('https://www.pinterest.com/alaziziyamanpowersupply0304/')
                        }}
                        style = {{height:40, width:40, backgroundColor:'transparent', borderRadius:10, borderWidth:1.3, borderColor:'#8D1B3D', marginLeft:32, marginTop:16,justifyContent:'center', alignItems:'center',}}>
                            <FontAwesome.Button
                                name={'pinterest-p'}
                                backgroundColor={'transparent'}
                                color={ Colors._A2GrayCountryCode}
                                onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                                underlayColor='transparent'
                                size={28}
                                style={{
                                alignSelf:'center', 
                                justifyContent:'center'   ,
                                marginTop: 0,
                                marginBottom: 0,
                                padding: 0,
                                marginLeft: 4,
                                marginRight:0,
                                }}
                            />
                    </Ripple>

                    <Ripple 
                        onPress = {()=>{
                          Linking.openURL('https://www.instagram.com/alaziziyamanpowersupply/') 
                        }}
                        style = {{height:40, width:40, backgroundColor:'transparent', borderRadius:10, borderWidth:1.3, borderColor:'#8D1B3D', marginLeft:32, marginTop:16,justifyContent:'center', alignItems:'center',}}>
                            <FontAwesome.Button
                                name={'instagram'}
                                backgroundColor={'transparent'}
                                color={ Colors._A2GrayCountryCode}
                                underlayColor='transparent'
                                size={28}
                                style={{
                                alignSelf:'center', 
                                justifyContent:'center'   ,
                                marginTop: 0,
                                marginBottom: 0,
                                padding: 0,
                                marginLeft: 4,
                                marginRight:0,
                                }}
                            />
                    </Ripple>

                    <Ripple 
                        onPress = {()=>{
                          Linking.openURL('https://al-aziziya-manpower-supply.business.site/') 
                        }}
                        style = {{height:40, width:40, backgroundColor:'transparent', borderRadius:10, borderWidth:1.3, borderColor:'#8D1B3D', marginLeft:32, marginTop:16,justifyContent:'center', alignItems:'center',}}>
                            <MaterialCommunityIcons.Button
                                name={'earth'}
                                backgroundColor={'transparent'}
                                color={ Colors._A2GrayCountryCode}
                                onPress={() =>  this.setState({ isPasswordNotVisible: !this.state.isPasswordNotVisible })}
                                underlayColor='transparent'
                                size={30}
                                style={{
                                alignSelf:'center', 
                                justifyContent:'center'   ,
                                marginTop: 0,
                                marginBottom: 0,
                                padding: 0,
                                marginLeft: 4,
                                marginRight:0,
                                }}
                            />
                    </Ripple>
            </View>        
            
        </View>             

            <Text onPress={this.logout}
              style = {{alignSelf:'center', margin:64, color:'#611e32', fontWeight:'bold', fontSize:18,}}>LOGOUT</Text>
      </ScrollView>
             
    
    )
  }
}


// http://alaziziyamanpower.com/new_webservices/register.php

// &name=testname
// &education=testedu
// &job_location=testlocation
// &status=teststatus
// &marital_status=tests
// &nationality=testindia
// &religion=testtest
// &experience=123
// &age=122
// &previos_salary=111
// &expected_salary=111
// &notice_period=111
// &job_category=test
// &job_type=test_jobtype
// &skills=java
// &job_description=none
// &resume_file=nan
// &resume_status=1
// &password=pass
// &email=aaleenmirza@gmailcom
// &image2=img2
// &image1=img1