

import React, {Component} from 'react';
import {Image, Text, View, ScrollView } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, Button, ProgressBar, TextFieldOTP} from '../../../components' 
import { Global, Colors, UserDefaults, URLs } from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
import { NavigationActions, StackActions } from 'react-navigation'


type Props = {};

export default class About extends Component<Props> {

  render(){
    return(
      <ScrollView
      style={{ backgroundColor: '#1a1e27' }}
      
    >

      <View style= {{flexDirection:'column',backgroundColor:'#1a1e27', flex:1, }}>

        <View style = {{backgroundColor:'#8D1B3D', height:180}}> 
        <Text style = {{color:'#fff', fontSize:32, fontWeight:"400",marginTop:48, marginLeft:16}}>About Us</Text>
        <Text style = {{color:Colors._A2GrayCountryCode, marginLeft:16}}>Al AziziyaManpower Supply</Text>
       </View>

      </View>

      <Text style = {{color:'#fff', fontSize:22, fontWeight:"400",marginTop:6, marginLeft:16}}>HOW WE DO IT?</Text>
       <Text style = {{padding:16, color:Colors._A2GrayCountryCode}}>
                   Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.consequat ipsum, nec sagittis sem nibh id elit.Donec vestibulum justo a diam ultricies. pel lentesque. Quisque mattis diam vel.

        Lorem Ipsum has been the industry's standard dummy text ever sincer they 1500s, when an unknown printer took and galley of type and scrambled. nisi elit consequat ipsum, nec sagittis sem nibh id elit.</Text> 

        <Text style = {{color:'#fff', fontSize:22, fontWeight:"400",marginTop:6, marginLeft:16}}>WHY WE DO IT?</Text>
       <Text style = {{padding:16, color:Colors._A2GrayCountryCode}}>
                   Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.consequat ipsum, nec sagittis sem nibh id elit.Donec vestibulum justo a diam ultricies. pel lentesque. Quisque mattis diam vel.

        Lorem Ipsum has been the industry's standard dummy text ever sincer they 1500s, when an unknown printer took and galley of type and scrambled. nisi elit consequat ipsum, nec sagittis sem nibh id elit.</Text> 

        <Text style = {{color:'#fff', fontSize:22, fontWeight:"400",marginTop:6, marginLeft:16}}>WHO WE ARE?</Text>
       <Text style = {{padding:16, color:Colors._A2GrayCountryCode}}>
Al Aziziya Manpower Supply Housemaids, House Drivers, Home Care Nurse, Skilled and Unskilled Labors from INDIA, Philippines, Kenya, Srilanka, Ethiopia, Bangladesh.</Text> 

             
    </ScrollView>
    )
  }
}


