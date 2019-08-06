import { Dimensions, Platform } from 'react-native'
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const dimen = Dimensions.get('window');

const Global = {
  screenWidth: deviceWidth,
  screenHeight: deviceHeight,
  iOSPlatform: (Platform.OS === 'ios'),
  osVersion : Platform.Version > 22,
  DebugModeOff: true, // false for testing true for live
  isIphoneX:(Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (dimen.height === 812 || dimen.width === 812))
}

export default Global
