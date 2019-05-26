import React from 'react'
import { Image, View } from 'react-native'

import { Routes, Colors, Global, Images } from '../utils'

import SplashScreen from './Splash/splash.main';
import LoginScreen from './Login/login.main'
import SignupScreen from './Signup/signup.main'
import Profile from './Profile/profile.main'
import About from './About/aboutus.main'
import Dashboard from './Dashboard/dashboard.main'
import ContactUs from './ContactUs/contactus.main'
import SignupScreenJob from './Signup/signup.job'
import SignupScreenUpload from './Signup/signup.upload'
import Registration from './Registration/company.registration'

import { StackNavigator, TabNavigator } from 'react-navigation'
import ForgotPassword from './ForgotPassword/forgot.password';

import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CompanyProfile from './CompanyProfile/company.profile';
import AdminDashboard from './AdminDashboard/admin.dashboard';
import CompanyList from './Company/company.list';
import Default from './Default/default.main';

export default AppNavigatorStack

export const ProfileNav = StackNavigator({
    profile:{
        screen: Profile,
        key:Routes.profile,
        navigationOptions:{header:null}
    }
})

export const CompanyProfileNav = StackNavigator({
    companyProfile:{
        screen: CompanyProfile,
        key:Routes.companyProfile,
        navigationOptions:{header:null}
    }
})

export const DashboardNav = StackNavigator({
    dashboard:{
        screen: Dashboard,
        key:Routes.dashboard,
        navigationOptions:{header:null}
    }
})

export const DefaultNav = StackNavigator({
    default:{
        screen: Default,
        key:Routes.default,
        navigationOptions:{header:null}
    }
})

export const AdminDashboardNav = StackNavigator({
    adminDashboard:{
        screen:AdminDashboard,
        key:Routes.adminDashboard,
        navigationOptions:{header:null}
    }
})
export const CompanyNav = StackNavigator({
    companyList:{
        screen: CompanyList,
        key:Routes.companyList,
        navigationOptions:{header:null}

    }
})


export const AboutNav = StackNavigator({
    about:{
        screen: About,
        key:Routes.about,
        navigationOptions:{header:null}
    }
})

export const ContactUsNav = StackNavigator({
    contactus:{
        screen: ContactUs,
        key:Routes.contactus,
        navigationOptions:{header:null}
    }
})


export const TabbarNavDefault = TabNavigator({
    defaultNav:{
        screen: DefaultNav,
        key:Routes.defaultNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Home',
            tabBarIcon: tabIconNamed(1) 
          }
    },

    aboutNav:{
        screen: AboutNav,
        key:Routes.aboutNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'About',
            tabBarIcon: tabIconNamed(3)
          }
    },

    contactusNav:{
        screen: ContactUsNav,
        key:Routes.contactusNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Contact',
            tabBarIcon: tabIconNamed(4) 
          }
    }
},

{
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    lazy:false,
    tabBarOptions: {
      activeTintColor: "#611e32",
      inactiveTintColor: '#565656',
      indicatorStyle: {
        // color: 'transparent',
        backgroundColor: 'transparent'
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 0,
        // marginTop: Global.iOSPlatform ? -5 : -8,
        fontWeight:'400'
      },
      style: {
        backgroundColor: '#1a1e27',
        // height: Global.isIphoneX ? 85 : 65,

        paddingBottom:Global.isIphoneX ? 16 : 0
      },
      showIcon: true
    }
  }
)

export const TabbarNavAdmin = TabNavigator({
    // profileNav:{
    //     screen: ProfileNav,
    //     key:Routes.profileNav,
    //     navigationOptions: {
    //         header: null,
    //         tabBarLabel: 'Dashboard',
    //         //tabBarIcon: tabIconNamed(Images.imageTab1) // ('md-home')
    //       }
    // },

    adminDashboardNav:{
        screen: AdminDashboardNav,
        key:Routes.adminDashboardNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Home',
            tabBarIcon: tabIconNamed(1) // ('md-home')
            //tabBarIcon: tabIconNamed(Images.imageTab1) // ('md-home')
          }
    },

     companyNav:{
        screen: CompanyNav,
        key:Routes.companyNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Company',
            tabBarIcon: tabIconNamed(5)
            //tabBarIcon: tabIconNamed(Images.imageTab1) // ('md-home')
          }
    },

    aboutNav:{
        screen: AboutNav,
        key:Routes.aboutNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'About',
            tabBarIcon: tabIconNamed(3)
            //tabBarIcon: tabIconNamed(Images.imageTab1) // ('md-home')
          }
    },

    contactusNav:{
        screen: ContactUsNav,
        key:Routes.contactusNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Contact',
            tabBarIcon: tabIconNamed(4)
            //tabBarIcon: tabIconNamed(Images.imageTab1) // ('md-home')
          }
    }
},

{
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    lazy:false,
    tabBarOptions: {
      activeTintColor: "#611e32",
      inactiveTintColor: '#565656',
      indicatorStyle: {
        // color: 'transparent',
        backgroundColor: 'transparent'
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 0,
        // marginTop: Global.iOSPlatform ? -5 : -8,
        fontWeight:'400'
      },
      style: {
        backgroundColor: '#1a1e27',
        // height: Global.isIphoneX ? 85 : 65,

        // paddingBottom:Global.isIphoneX ? 16 : 0
      },
      showIcon: true
    }
  }
)



export const TabbarNav = TabNavigator({
   
   
    dashboardNav:{
        screen: DashboardNav,
        key:Routes.dashboardNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Home',
            tabBarIcon: tabIconNamed(1) 
          }
    },

   
    // profileNav:{
    //     screen: ProfileNav,
    //     key:Routes.profileNav,
    //     navigationOptions: {
    //         header: null,
    //         tabBarLabel: 'Profile',
    //         tabBarIcon: tabIconNamed(2) 
    //       }
    // },


    profileNav:{
        screen: CompanyProfileNav,
        key:Routes.companyProfile,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Profile',
            tabBarIcon: tabIconNamed(2) 
          }
    },

    aboutNav:{
        screen: AboutNav,
        key:Routes.aboutNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'About',
            tabBarIcon: tabIconNamed(3)
          }
    },

    contactusNav:{
        screen: ContactUsNav,
        key:Routes.contactusNav,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Contact',
            tabBarIcon: tabIconNamed(4) 
          }
    }
},

{
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
    lazy:false,
    tabBarOptions: {
      activeTintColor: "#611e32",
      inactiveTintColor: '#565656',
      indicatorStyle: {
        // color: 'transparent',
        backgroundColor: 'transparent'
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 0,
        // marginTop: Global.iOSPlatform ? -5 : -8,
        fontWeight:'400'
      },
      style: {
        backgroundColor: '#1a1e27',
        // height: Global.isIphoneX ? 85 : 65,

        paddingBottom:Global.isIphoneX ? 16 : 0
      },
      showIcon: true
    }
  }
)


function tabIconNamed (type) {

    switch(type){
        case 1:
        return ({ tintColor, focused }) => (
            <View>
             
                <Foundation
                        name={'home'}
                        size={30}
                        style={{color: tintColor, backgroundColor:'transparent'}}
                      />
            </View>
            )
        break;

        case 2:
        return ({ tintColor, focused }) => (
            <View>
             
                <Ionicons
                        name={'ios-person'}
                        size={30}
                        style={{color: tintColor, backgroundColor:'transparent'}}
                      />
            </View>
            )

        break;

        case 3:
        return ({ tintColor, focused }) => (
            <View>
             
                <MaterialCommunityIcons
                        name={'information'}
                        size={30}
                        style={{color: tintColor, backgroundColor:'transparent'}}
                      />
            </View>
            )
        break;

        case 4:
        return ({ tintColor, focused }) => (
            <View>
             
                <Ionicons
                        name={'ios-contacts'}
                        size={30}
                        style={{ color: tintColor, backgroundColor:'transparent'}}
                      />
                    
            </View>
            )

        break;

       case 5:
        return ({ tintColor, focused }) => (
            <View>
             
                <FontAwesome5
                        name={'building'}
                        size={30}
                        style={{ color: tintColor, backgroundColor:'transparent'}}
                      />
                    
            </View>
            )

        break;

    }
    
 
}


export const AppNavigatorStack = StackNavigator({

    splashScreen:{
      screen:SplashScreen,
      key:Routes.splashScreen,
      navigationOptions:{header:null}
    },

    loginScreen:{
        screen:LoginScreen,
        key: Routes.loginScreen,
        navigationOptions:{header:null}
    },

    tabbarNav: {
        screen: TabbarNav,
        key: Routes.tabbarNav,
        navigationOptions: { header: null }
      },

    tabbarNavAdmin:{
        screen: TabbarNavAdmin,
        key: Routes.tabbarNavAdmin,
        navigationOptions: { header: null }
    }, 

    tabbarNavDefault:{
        screen: TabbarNavDefault,
        key: Routes.tabbarNavDefault,
        navigationOptions:{header:null}
    },

    signupScreen:{
        screen:SignupScreen,
        key: Routes.signupScreen,
        navigationOptions:{header:null}
    },

    signupScreenJob:{
        screen:SignupScreenJob,
        key: Routes.signupScreenJob,
        navigationOptions:{header:null}
    },

    signupScreenUpload:{
        screen:SignupScreenUpload,
        key: Routes.signupScreenUpload,
        navigationOptions:{header:null}
    },

    registration:{
        screen:Registration,
        key:Routes.registration,
        navigationOptions:{header:null}
    },

    forgotPassword:{
        screen:ForgotPassword,
        key:Routes.forgotPassword,
        navigationOptions:{header:null}
    },

    profile:{
        screen:Profile,
        key:Routes.profile,
        navigationOptions:{header:null}
    },

    companyProfile:{
        screen:CompanyProfile,
        key:Routes.companyProfile,
        navigationOptions:{header:null}
    },

    default:{
        screen: Default,
        key:Routes.default,
        navigationOptions:{header:null}
    }
})


