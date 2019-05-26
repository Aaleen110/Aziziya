import { StyleSheet, Dimensions } from 'react-native'
import { Global, Color, URLs } from '../../../utils'



export const imageWidth = Global.screenWidth * 0.75
export const imageHeight = (imageWidth * 0.1800) * (2.5)
export const imageHeightSmall = (imageWidth * 0.1800) * (1)

const styles = StyleSheet.create({


  mainText:{
    color:'#fff',
    fontSize:20,
    color:'white',
    marginLeft:16

  },

  descText:{
    color:Colors._A2GrayCountryCode,
    fontSize:12,
    marginLeft:16
  },

  mainTextType2:{
    color:'#fff',
    fontSize:20,
    color:'white',
    marginLeft:16,
    textAlign:'right'

  },

  descTextType2:{
    color:Colors._A2GrayCountryCode,
    fontSize:12,
    marginLeft:16,
    textAlign:'right'
  },

  descTextType3:{
    color:'white',
    fontSize:14,
    marginLeft:16
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    alignContent:'flex-start',
    justifyContent: 'flex-start',
    paddingTop:150,
    backgroundColor: 'white',
   
  },


  textFieldContainer: {
    flexDirection: 'row',
    marginTop: 28,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: Global.screenWidth * 0.9
  },
  buttonContainer: {
    backgroundColor:'#556190',
    height: 46,
    margin: 26,
    width: Global.screenWidth * 0.7,
    borderColor: '#556190',
    alignSelf: 'center',
    borderRadius: 4,
   
  },
  textChangeCountryCode: {
    textAlign: 'right'
  },
 


  welcome:{
    fontSize:30,
    fontWeight:"bold",
  
    color:'black',
    justifyContent:'flex-start',
    
    
  },
  subText:{
    fontSize:18,
    fontWeight:"500",
    alignSelf: 'center',
    color:'grey'
  },

  textInputStyle :{
      
    backgroundColor:'transparent',
  
    marginLeft:16,
    marginRight:16,
},
header:{
  fontSize:34,
  fontWeight:"bold",
  marginLeft:16,
  marginTop:16,
  color:'white',
  alignSelf:'center',
},

centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  
  },

  cameraContainer: {
    height: Dimensions.get('window').height,
  },
})


export default styles
