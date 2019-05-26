import { Dimensions, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const dimen = Dimensions.get('window');

const Global = {
  screenWidth: deviceWidth,
  screenHeight: deviceHeight,
  iOSPlatform: (Platform.OS === 'ios'),
  osVersion : Platform.Version > 22,
  developerId: 1,
  currencySymbol: '\u20B9',
  LTHDateFormat: 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'',
  LTHDateFormatMoment: 'YYYY-MM-DDTHH:mm:ss',
  dateFormatDisplay: 'Do MMM YYYY',
  splitter: '$--$',
  splitter2: '-$$-',
  appVersion: '4.0',
  regexMultiSpace: '/\s+/g', // standered-no-useless-escape
    /* VERY IMPORTANT
     Production                 : DebugModeOff = true
     Test and Build Environment : DebugModeOff = false
     */
  DebugModeOff: true, // false for testing true for live
  isIphoneX:(Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (dimen.height === 812 || dimen.width === 812))

}

export default Global
