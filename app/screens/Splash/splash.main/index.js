import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { UserDefaults } from "../../../utils";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.navigateToLogin = this.navigateToLogin.bind(this);
    this.navigateToMain = this.navigateToMain.bind(this);
  }

  navigateToLogin() {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName: Routes.tabbarNavDefault
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  navigateToMain() {
    UserDefaults.get("isAdmin").then(isAdmin => {
      if (isAdmin) {
        const resetAction = StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({
              routeName: Routes.tabbarNavAdmin
            })
          ]
        });
        this.props.navigation.dispatch(resetAction);
      } else {
        const resetAction = StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({
              routeName: Routes.tabbarNav
            })
          ]
        });
        this.props.navigation.dispatch(resetAction);
      }
    });
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName: Routes.tabbarNavAdmin
        })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    UserDefaults.get("isLoggedin")
      .then(token => {
        if (token) {
          if (token == 0) {
            setTimeout(() => {
              this.navigateToLogin();
            }, 2000);
          } else {
            setTimeout(() => {
              this.navigateToMain();
            }, 2000);
          }
        } else {
          setTimeout(() => {
            this.navigateToLogin();
          }, 2000);
        }
      })
      .catch(error => {
        this.navigateToLogin();
      });
  }

  render() {
    return (
      <View style={style.container}>
        <Image
          style={style.icon}
          source={require("../../../assets/common/logo.png")}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1e27",
    justifyContent: "center",
    padding: 32,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 16,
    marginTop: 0,
    alignSelf: "center",
    height: 160,
    width: 160
  }
});

console.disableYellowBox = true;
