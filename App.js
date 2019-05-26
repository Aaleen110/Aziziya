

import React, {Component} from 'react';
import {StatusBar, Platform, StyleSheet, Text, View,} from 'react-native';
import {AppNavigatorStack} from './app/screens/router'
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation'
 
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigatorStack/>
    );
  }
}
