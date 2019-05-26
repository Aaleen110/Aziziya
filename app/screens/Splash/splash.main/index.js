import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, NetInfo } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation'
import {UserDefaults, URLs} from '../../../utils'

export default class SplashScreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
          
        }

     this.navigateToLogin = this.navigateToLogin.bind(this)
     this.navigateToMain = this.navigateToMain.bind(this)
    }

    navigateToLogin(){
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

    navigateToMain(){

        UserDefaults.get('isAdmin').then(
            (isAdmin)=>{
                if(isAdmin){
                    const resetAction = StackActions.reset({
                        index: 0,
                        key:null,
                        actions: [
                          NavigationActions.navigate({
                           routeName: Routes.tabbarNavAdmin
                          })
                        ]
                      })
                    this.props.navigation.dispatch(resetAction)
                }else{

                    const resetAction = StackActions.reset({
                        index: 0,
                        key:null,
                        actions: [
                          NavigationActions.navigate({
                           routeName: Routes.tabbarNav
                          })
                        ]
                      })
                    this.props.navigation.dispatch(resetAction)
                }
            }
        )
        const resetAction = StackActions.reset({
            index: 0,
            key:null,
            actions: [
              NavigationActions.navigate({
               routeName: Routes.tabbarNavAdmin
              })
            ]
          })
        this.props.navigation.dispatch(resetAction)
    }

    componentDidMount () {
   
        UserDefaults.get('isLoggedin').then(
            (token)=>{
                if(token == 0){

                    console.log('Token', token)
                    setTimeout(() => {
                        // this.navigateToMain();
                        this.navigateToLogin();
                      }, 2000)
                }else{


                    setTimeout(() => {
                        // this.navigateToLogin();
                        this.navigateToMain();
                      }, 2000)
                }
            }
        ).catch((error) => {
            this.navigateToLogin();
            console.log('ERROR', 'ERROR')
          });
       
    
    }
  

    render () {
        return (
             <View style = {{flex:1, backgroundColor:'#1a1e27', justifyContent:'center', padding:32, flexDirection:'row', alignItems:'center'}}>                  
                <Image 
                style = {{marginLeft:16, marginTop:0, alignSelf:'center', height:160, width:160}}
                source={require('../../../assets/common/logo.png')} />
            </View>
        )
    }
}

console.disableYellowBox = true;