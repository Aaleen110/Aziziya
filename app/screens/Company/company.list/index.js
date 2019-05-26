

import React, {Component} from 'react';
import {Image, Text, View, ScrollView, Alert, FlatList, Modal, Linking } from 'react-native';
import {ModalBox, DialogHeader, Ripple, Separator, Button, ProgressBar, TextFieldOTP} from '../../../components' 
import { Global, Colors, UserDefaults, URLs } from '../../../utils'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import { NavigationActions, StackActions } from 'react-navigation'

// #8D1B3D - Primary
// #611e32 - Secondary

type Props = {};

export default class CompanyList extends Component<Props> {


  constructor(props){
    super(props);

    this.state={
       
        isLoading:false,
        data:[],
        isLoading:false,
        isAdmin:0,
        showResume:false,
        id:0,

        job_type:"",
        previos_salary:"",
        name:"",
        passport_number:"",
        date_of_issue:"",
        place_of_issue:"",
        date_of_birth:"",
        date_of_exp:"",
        nationality:"",
        religion:"",
        place_of_birth:"",
        date_of_birth:"",
        age:"",
        living_town:"",
        marital_status:"",
        no_of_childrens:"",
        mobile:"",
        mothers_name:"",
        height:"",
        weight:"",
        education:"",
        previous_exp:"",
        notice_period:"",
        country:"",
        remarks:""


        
    }
   
    this.getData = this.getData.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.populateResume = this.populateResume.bind(this)
	this.addResume = this.addResume.bind(this)
	this.approveCompany = this.approveCompany.bind(this)
	this.approve = this.approve.bind(this)
  }


  getData(){

    this.setState({isLoading:true})

    console.log('Main', this.state.id)

    // // fetch('http://alaziziyamanpower.com/new_webservices/getProfileAll.php', {

    fetch('http://alaziziyamanpower.com/new_webservices/list-all-company.php?', {
    method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {

    if (responseJson.message == 900){
        this.setState({
          data:responseJson.data,
          isLoading:false
        })
        console.log('getAllCompanies - Response', JSON.stringify(responseJson.data) )
        
    }else{
		this.setState({
			isLoading:false
		  })
        Alert.alert('Something went wrong', JSON.stringify(responseJson.message))
    }
    
    })
}

approveCompany(id){
	Alert.alert(
		'Update Status',
		'Are you sure you want to approve this company\'s status',
		[
		 
		  {
			text: 'Cancel',
			onPress: () => console.log('Cancel Pressed'),
			style: 'cancel',
		  },
		  {text: 'Yes, Update', onPress: () => this.approve(id)},
		],
		{cancelable: false},
	  );
}

approve(id){
	fetch('http://alaziziyamanpower.com/new_webservices/update-company-status.php?company_id='+id+'&status=1', {
    method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {

    if (responseJson.message == 400){
        Alert.alert('Sucess', 'Company status updated sucessfully')
		this.getData()
    }else{
		this.setState({
			isLoading:false
		  })
        Alert.alert('Something went wrong', JSON.stringify(responseJson.message))
    }
    
    })
}

addResume(){
    this.props.navigation.navigate(Routes.signupScreen, {})
}

populateResume(data){
  console.log('Maine', data)
  this.setState({
    showResume:true,
    
    job_type:data.job_type,
    previos_salary:data.previos_salary,
    name:data.name,
    passport_number:"-",
    date_of_issue:"-",
    place_of_issue:"-",
    date_of_birth:"-",
    date_of_exp:"-",
    nationality:data.nationality,
    religion:data.religion,
    place_of_birth:"-",
    age:data.age,
    living_town:"-",
    marital_status:data.marital_status,
    no_of_childrens:"-",
    mobile:"-",
    mothers_name:"-",
    height:"-",
    weight:"-",
    education:data.education,
    previous_exp:data.experience,
    notice_period:data.notice_period,
    country:"-",
    remarks:"-"
  })

}
  
  renderRow(data){

    var data = data.item
	console.log('COMPANY DATA', data)
    return(//1a1e27
      <View 
      onPress ={()=>{}}
      style = {{flex:1, justifyContent:"center", marginTop:16, backgroundColor:'#1a1e27', marginLeft:12, marginRight:12, marginBottom:12, borderRadius:0, borderColor:'#611e32', borderWidth:1, overflow: "hidden", elevation:2, shadowOpacity: 0.3,
      shadowRadius: 3, shadowOffset: {height: 1, width: 0 }}}>
          <View style = {{paddingTop:10, paddingBottom:10, paddingLeft:16, flexDirection:'row'}}>
            
              <View style = {{marginTop:16, }}>
                <Text style = {{color:'white', fontSize:20, marginLeft:16}}>{data.company_name}</Text>
                <Text style = {{color:'#611e32', fontSize:14, marginLeft:16}}>{data.email}</Text>
				<Text style = {{color:'#611e32', fontSize:14, marginLeft:16}}>{data.country}</Text>
                <View style = {{flexDirection:'row', justifyContent:'space-between', alignItems:'center', flex:1,}}>
                    <MaterialIcons.Button
                        name={'call'}
                        size={18}
                        color={'#611e32'}
                      
                        onPress={()=>{
							Linking.openURL(`tel:${data.mobile}`)

						}}
                        underlayColor='transparent'
                        backgroundColor='transparent'
                    />

                    <FontAwesome5.Button
                      name={'whatsapp'}
                      size={18}
                      color={'#611e32'}
                    
                      onPress={()=>{
						Linking.openURL('whatsapp://send?text=Hi&phone='+data.whatsapp)

					  }}
                      underlayColor='transparent'
                      backgroundColor='transparent'
                    />
                 {
                   this.state.isAdmin ?    
                    <Text style = {{color:'white', fontSize:14, marginLeft:0}}>{data.mobile}</Text>
                :
                (null)
                 }
                  </View>
              </View>
          </View>

          <View style = {{backgroundColor:'#282d39', height:50, width:Global.screenWidth, justifyContent:'space-between', flexDirection:'row', paddingLeft:16, paddingRight:36}}>
            
            {/* <Text style = {{color:'#fff', justifyContent:'center', alignContent:'center', alignSelf:'center', fontWeight:'bold', fontSize:16}}>Date:{data.enter_date}</Text> */}
            {data.status == 0?
			<Ripple 
				onPress = {()=>{this.approveCompany(data.id)}}
				style = {{justifyContent:'center', alignContent:'center', alignSelf:'center', padding:16}}>
				<Text style = {{color:'#8D1B3D', fontWeight:'bold', fontSize:16}}>Approve</Text>
            </Ripple>
			:
			(null)
			}
          </View>
    </View>
    );
  }

  componentDidMount(){

    UserDefaults.set('isLoggedin', 1);

    UserDefaults.get('isAdmin').then(
      (isAdmin)=>{
         this.setState({isAdmin:isAdmin})
      }
  ).catch((error) => {
      this.navigateToLogin();
      console.log('ERROR', error)
    });

    UserDefaults.get('id').then(
      (id)=>{
        this.setState({
          id:id
        })
      }
    )


    this.getData();
  }




  render(){

    
    return(
      <ScrollView
      style={{ backgroundColor: '#1a1e27', flex:1 }}
      
    >

         

      <View style = {{backgroundColor:'#8D1B3D', height:180, overflow:'visible'}}> 
        <Text style = {{color:'#fff', fontSize:32, fontWeight:"400",marginTop:48, marginLeft:16}}>All Companies</Text>
        <Text style = {{color:Colors._A2GrayCountryCode, marginLeft:16}}>Find Jobs, Employment & Career Opportunities in QATAR</Text>


       </View>

       
       {/* <Ripple 
          onPress = {this.addResume}
          style = {{height:60, width:60, backgroundColor:'#282d39', borderRadius:60, alignSelf:'flex-end', marginRight:32, marginTop:-35, justifyContent:'center',borderColor:'#8D1B3D', 
          borderWidth:0.5,}}>
           <MaterialIcons.Button
                        name={'person-add'}
                        size={28}
                        color={'#8D1B3D'}
                        style = {{alignSelf:'center', justifyContent:'center', marginLeft:6}}
                        onPress={()=>{}}
                        underlayColor='transparent'
                        backgroundColor='transparent'
                    />

        </Ripple> 
         */}


       <FlatList
         data={this.state.data}
         renderItem={(rowData) => this.renderRow(rowData)}
    />

   <Modal
   transparent
    visible={this.state.showResume}
    onDismiss={()=>{this.setState({showResume:false})}}
    presentationStyle={'overFullScreen'}
    animationType='fade'
    
    >
    <ModalBox
    style={{backgroundColor: ' rgba(0, 0, 0, 0)'}}
      isOpen={this.state.showResume}
      swipeArea={200}
      backButtonClose={true}
      isScrollable={true}
      backButtonClose={true}
      onClosed ={()=>{
        this.setState({showResume:false})
      }}
      >
    

    </ModalBox>
    </Modal>   


    
  
    {this.state.isLoading ? <ProgressBar/> : null}
             
    </ScrollView>
    )
  }
}


