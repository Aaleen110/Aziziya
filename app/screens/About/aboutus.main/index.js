import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Colors } from "../../../utils";

export default class About extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#1a1e27" }}>
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#1a1e27",
            flex: 1
          }}
        >
          <View style={{ backgroundColor: "#8D1B3D", height: 180 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 32,
                fontWeight: "400",
                marginTop: 48,
                marginLeft: 16
              }}
            >
              About Us
            </Text>
            <Text style={{ color: Colors._A2GrayCountryCode, marginLeft: 16 }}>
              Al AziziyaManpower Supply
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: "400",
            marginTop: 6,
            marginLeft: 16
          }}
        >
          WHO WE ARE?
        </Text>
        <Text style={{ padding: 16, color: Colors._A2GrayCountryCode }}>
          Al Aziziya Manpower Supply Housemaids, House Drivers, Home Care Nurse,
          Skilled & Unskilled Labors from INDIA, Philippines, Kenya, Srilanka,
          Ethiopia, Bangladesh. AlaziziyaManpowerSupply is a manpower providing
          company located in doha Qatar.. we supply all sorts of services such
          as Housemaids which are very good at work,House drivers which are very
          particular of time,Home care nurse,Skilled and Unskilled labours from
          INDIAand any other countaries such as
          PHILIPPINES,KENYA,SRILANKA,ETHIOPIA,BANGLADESH ETC.
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: "400",
            marginTop: 6,
            marginLeft: 16
          }}
        >
          HOW WE DO IT?
        </Text>
        <Text style={{ padding: 16, color: Colors._A2GrayCountryCode }}>
          AlaziziyaManpowerSupply is a manpower providing company located in
          doha Qatar.. we supply all sorts of services such as Housemaids which
          are very good at work,House drivers which are very particular of
          time,Home care nurse,Skilled and Unskilled labours from INDIAand any
          other countaries such as
          PHILIPPINES,KENYA,SRILANKA,ETHIOPIA,BANGLADESH ETC..
        </Text>
      </ScrollView>
    );
  }
}
