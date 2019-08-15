

import React, {Component} from 'react';
import {Image, Text, View, ScrollView, Alert } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, Button, ProgressBar, TextFieldOTP} from '../../../components' 
import { Colors, UserDefaults} from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import { NavigationActions, StackActions } from 'react-navigation'
import Toast, {DURATION} from 'react-native-easy-toast'

type Props = {};

export default class CompanyProfile extends Component<Props> {


  constructor(props){
    super(props);

    this.state={
       
        isLoading:false,
        name:'',
        pic:''
        
    }
   
	this.goback = this.goback.bind(this)
	this.editProfile = this.editProfile.bind(this)
    
  }

  
  editProfile(){
    this.props.navigation.navigate(Routes.registration, {'isUpdate':1})
  }

  componentDidMount(){
    
    UserDefaults.get('UserObj').then(
      (userObj)=>{

		console.log("HELLO THERE", userObj)
        this.setState({

		  id:userObj['id'],
		  email:userObj['email'],
		  enter_date:userObj['enter_date'],
		  password:userObj['password'],
		  country:userObj['country'],	
		  whatsapp:userObj['whatsapp'],
		  company_name:userObj['company_name'],
		  mobile:userObj['mobile']
        })
      })  
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
      <ScrollView
      style={{ backgroundColor: '#1a1e27' }}
      
    >

      <View style = {{backgroundColor:'#8D1B3D', height:180}}> 
        <Text style = {{color:'#fff', fontSize:32, fontWeight:"400",marginTop:48, marginLeft:16}}>Profile</Text>
        <Text style = {{color:Colors._A2GrayCountryCode, marginLeft:16}}>Update your company's profile</Text>

         
       </View>

	   <Ripple 
          onPress = {this.editProfile}
          style = {{height:60, width:60, backgroundColor:'#282d39', borderRadius:60, alignSelf:'flex-end', marginRight:32, marginTop:-35, justifyContent:'center',borderColor:'#8D1B3D', 
          borderWidth:0.5,}}>
           <MaterialIcons.Button
                        name={'edit'}
                        size={28}
                        color={'#8D1B3D'}
                        style = {{alignSelf:'center', justifyContent:'center', marginLeft:6}}
                        onPress={()=>{}}
                        underlayColor='transparent'
                        backgroundColor='transparent'
                    />

        </Ripple> 
        

       <View style = {{flexDirection:'row', justifyContent:'center'}}>  
          
		  


         

        </View>

        <View style = {{marginTop:16}}>
          <Text style = {styles.mainText}>{this.state.company_name}</Text>
          <Text style = {styles.descText}>Name</Text>
        </View>   


        <View style = {{marginTop:12}}>
          <Text style = {styles.mainText}>{this.state.email}</Text>
          <Text style = {styles.descText}>Email Id</Text>
        </View>   

        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12}}>
              <Text style = {styles.mainText}>{this.state.password}</Text>
              <Text style = {styles.descText}>Password</Text>
            </View>    
        </View>

        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12,}}>
              <Text style = {styles.mainText}>{this.state.country}</Text>
              <Text style = {styles.descText}>Country</Text>
            </View>   

           
        </View>

        <View style = {{marginTop:12}}>
          <Text style = {styles.mainText}>{this.state.mobile}</Text>
          <Text style = {styles.descText}>Mobile</Text>
        </View>   

        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12}}>
              <Text style = {styles.mainText}>{this.state.whatsapp}</Text>
              <Text style = {styles.descText}>Whatsapp</Text>
            </View>   
            
             
        </View>    

     
        <Toast ref="toast"/>
    </ScrollView>
    )
  }
}


