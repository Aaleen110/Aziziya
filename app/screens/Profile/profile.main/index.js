

import React, {Component} from 'react';
import {Image, Text, View, ScrollView, Alert } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, Button, ProgressBar, TextFieldOTP} from '../../../components' 
import { Global, Colors, UserDefaults, URLs } from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import { NavigationActions, StackActions } from 'react-navigation'
import Toast, {DURATION} from 'react-native-easy-toast'

type Props = {};

export default class Profile extends Component<Props> {


  constructor(props){
    super(props);

    this.state={
       
        isLoading:false,
        name:'',
        pic:''
        
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

  componentDidMount(){
    
    UserDefaults.get('UserObj').then(
      (userObj)=>{
        this.setState({
          resumeId:userObj['resumeId'], 
          age:userObj['age'],
          email:userObj['email'],
          enter_date:userObj['enter_date'],
          expected_salary:userObj['expected_salary'],
          experience:userObj['experience'],
          image1:userObj['image1'],
          image2:userObj['image2'],
          job_category:userObj['job_category'],
          job_description:userObj['job_description'],
          job_location:userObj['job_location'],
          job_type:userObj['job_type'],
          marital_status:userObj['marital_status'],
          name:userObj['name'], 
          nationality:userObj['nationality'],
          notice_period:userObj['notice_period'],
          password:userObj['password'],
          previos_salary:userObj['previos_salary'],
          religion:userObj['religion'],
          resume_file:userObj['resume_file'],
          resume_status:userObj['resume_status'],
          skills:userObj['skills'],
          status:userObj['status'],
        })
      })

      // UserDefaults.get('passport').then(
      //   (photo)=>{

      //     console.log('MAIN', photo)
      //     this.setState({pic:photo})
      //   })
          
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
        <Text style = {{color:Colors._A2GrayCountryCode, marginLeft:16}}>Update your profile</Text>

         
       </View>

       <View style = {{flexDirection:'row', justifyContent:'center'}}>  
          <View 
          style = {{height:140, width:140, backgroundColor:Colors._A2GrayCountryCode, borderRadius:70, alignSelf:'center', marginTop:-50, marginLeft:16}}>
            <Image
            style={{width: 140, height: 140, borderRadius:70, alignSelf:'center', justifyContent:'center', }}
            source={{uri: 'http://clipart-library.com/images/BTaroLj5c.png'}}
            // source={{uri: this.state.pic}}

          />
          </View>  


          <View 
          style = {{
            height:50, 
            width:50, 
            backgroundColor:'#282d39', 
            borderRadius:70, 
            alignSelf:'center', 
            marginTop:-70, 
            flex:1, 
            marginLeft:32, 
            marginRight:16, 
            flexDirection:'row', 
            borderColor:'#8D1B3D', 
            borderWidth:0.5,
            justifyContent:'space-evenly',
            alignItems:'center'
            }}>
            
            <MaterialIcons.Button
            name={'edit'}
            size={18}
            color={'#8D1B3D'}
            style = {{height:100, width:50, flex:1}}
            onPress={()=>{ this.refs.toast.show('Edit Profile');}}
            underlayColor='transparent'
            backgroundColor='transparent'
          />

          <MaterialCommunityIcons.Button
                      name={'file-document'}
                      size={18}
                      color={'#8D1B3D'}
                      style = {{height:100, width:50, flex:1}}
                      onPress={()=>{ this.refs.toast.show('Resume');}}
                      underlayColor='transparent'
                      backgroundColor='transparent'
                    />

          <FontAwesome5.Button
                      name={'dot-circle'}
                      size={18}
                      color={'green'}
                      style = {{height:100, width:50, flex:1}}
                      onPress={()=>{ this.refs.toast.show('Selected');}}
                      underlayColor='transparent'
                      backgroundColor='transparent'
                    />

            <MaterialCommunityIcons.Button
                      name={'logout'}
                      size={18}
                      color={'#8D1B3D'}
                      style = {{height:100, width:50, flex:1}}
                      onPress={this.logout}
                      underlayColor='transparent'
                      backgroundColor='transparent'
                    />

          </View>  

        </View>

        <View>
          <Text style = {styles.mainText}>{this.state.name}</Text>
          <Text style = {styles.descText}>Name</Text>
        </View>   


        <View style = {{marginTop:12}}>
          <Text style = {styles.mainText}>{this.state.email}</Text>
          <Text style = {styles.descText}>Email</Text>
        </View>   

        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12}}>
              <Text style = {styles.mainText}>Graduation</Text>
              <Text style = {styles.descText}>Education</Text>
            </View>   

            <View style = {{marginTop:12, marginRight:32}}>
              <Text style = {styles.mainTextType2}>{this.state.age}</Text>
              <Text style = {styles.descTextType2}>Age</Text>
            </View>   
        </View>

        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12,}}>
              <Text style = {styles.mainText}>{this.state.expected_salary}</Text>
              <Text style = {styles.descText}>Salary Expectations</Text>
            </View>   

            <View style = {{marginTop:12, marginRight:32}}>
              <Text style = {styles.mainTextType2}>{this.state.previos_salary}</Text>
              <Text style = {styles.descTextType2}>Current Salary</Text>
            </View>   
        </View>

        <View style = {{marginTop:12}}>
          <Text style = {styles.mainText}>{this.state.marital_status}</Text>
          <Text style = {styles.descText}>Marital Status</Text>
        </View>   

        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12}}>
              <Text style = {styles.mainText}>{this.state.nationality}</Text>
              <Text style = {styles.descText}>Nationality</Text>
            </View>   
            
            <View style = {{marginTop:12, marginRight:32}}>
              <Text style = {styles.mainText}>{this.state.religion}</Text>
              <Text style = {styles.descText}>Religion</Text>
            </View>   
        </View>    

        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12}}>
              <Text style = {styles.mainText}>{this.state.experience}</Text>
              <Text style = {styles.descText}>Experience</Text>
            </View>   

            <View style = {{marginTop:12, marginRight:32}}>
              <Text style = {styles.mainTextType2}>{this.state.notice_period}</Text>
              <Text style = {styles.descTextType2}>Notice Period</Text>
            </View>   
        </View>

        <View style = {{marginTop:12}}>
          <Text style = {styles.mainText}>{this.state.skills}</Text>
          <Text style = {styles.descText}>Skills</Text>
        </View>   


        <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
            <View style = {{marginTop:12}}>
              <Text style = {styles.mainText}>{this.state.job_category}</Text>
              <Text style = {styles.descText}>Job Category</Text>
            </View>   

            <View style = {{marginTop:12, marginRight:32}}>
              <Text style = {styles.mainTextType2}>{this.state.job_type}</Text>
              <Text style = {styles.descTextType2}>Job Type</Text>
            </View>   
        </View>

        <View style = {{marginTop:12}}>
          <Text style = {styles.mainText}>{this.state.job_location}</Text>
          <Text style = {styles.descText}>Job Location</Text>
        </View>   

        <View style = {{marginTop:12}}>
          
        <View style = {{borderWidth:0.3, borderColor:'white', marginLeft:16, marginRight:16, marginTop:0, height:100}}>
       
        <Text style = {styles.descTextType3}>{this.state.job_description}</Text>

       </View>
          <Text style = {styles.descText}>Job Description</Text>
        </View>   
        <Toast ref="toast"/>
    </ScrollView>
    )
  }
}


