import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  Alert,
  FlatList,
  Modal,
  Linking,
  ImageBackground
} from "react-native";
import {
  ModalBox,
  DialogHeader,
  Ripple,
  Separator,
  Button,
  ProgressBar,
  TextFieldOTP
} from "../../../components";
import { Global, Colors, UserDefaults, URLs } from "../../../utils";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { NavigationActions, StackActions } from "react-navigation";

// #8D1B3D - Primary
// #611e32 - Secondary

type Props = {};

export default class AdminDashboard extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      isLoading: false,
      isAdmin: 0,
      showResume: false,
      id: 0,

      job_type: "",
      previos_salary: "",
      name: "",
      passport_number: "",
      date_of_issue: "",
      place_of_issue: "",
      date_of_birth: "",
      date_of_exp: "",
      nationality: "",
      religion: "",
      place_of_birth: "",
      date_of_birth: "",
      age: "",
      living_town: "",
      marital_status: "",
      no_of_childrens: "",
      mobile: "",
      mothers_name: "",
      height: "",
      weight: "",
      education: "",
      previous_exp: "",
      notice_period: "",
      country: "",
      remarks: ""
    };

    this.getData = this.getData.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.populateResume = this.populateResume.bind(this);
    this.renderResume = this.renderResume.bind(this);
    this.addResume = this.addResume.bind(this);
  }

  getData() {
    this.setState({ isLoading: true });

    console.log("Main", this.state.id);

    // // fetch('http://alaziziyamanpower.com/new_webservices/getProfileAll.php', {

    fetch("http://alaziziyamanpower.com/new_webservices/list-all-resume.php?", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.message == 800) {
          this.setState({
            data: responseJson.data,
            isLoading: false
          });
          console.log(
            "getAllProfile - Response",
            JSON.stringify(responseJson.data)
          );
        } else {
          Alert.alert(
            "Something went wrong",
            JSON.stringify(responseJson.message)
          );
        }
      });
  }

  addResume() {
    this.props.navigation.navigate(Routes.signupScreen, {});
  }

  populateResume(data) {
    console.log("Maine", data);
    this.setState({
      showResume: true,

      job_type: data.job_type,
      previos_salary: data.previos_salary,
      name: data.name,
      passport_number: "-",
      date_of_issue: "-",
      place_of_issue: "-",
      date_of_birth: "-",
      date_of_exp: "-",
      nationality: data.nationality,
      religion: data.religion,
      place_of_birth: "-",
      age: data.age,
      living_town: "-",
      marital_status: data.marital_status,
      no_of_childrens: "-",
      mobile: "-",
      mothers_name: "-",
      height: "-",
      weight: "-",
      education: data.education,
      previous_exp: data.experience,
      notice_period: data.notice_period,
      country: "-",
      remarks: "-"
    });
  }

  renderRow(data) {
    var data = data.item;

    return (
      //1a1e27
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginTop: 16,
          backgroundColor: "#1a1e27",
          marginLeft: 12,
          marginRight: 12,
          marginBottom: 12,
          borderRadius: 0,
          borderColor: "#611e32",
          borderWidth: 1,
          overflow: "hidden",
          elevation: 2,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: { height: 1, width: 0 }
        }}
      >
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 16,
            flexDirection: "row"
          }}
        >
          <ImageBackground
            style={{
              height: 110,
              width: 110,
              backgroundColor: "grey",
              borderRadius: 20
            }}
            source={require("../../../assets/common/placeholder.jpg")}
          >
            <Image
            resizeMode={'contain'}
              style={{
                width: 110,
                height: 110,
                borderRadius: 20,
                alignSelf: "center",
                justifyContent: "center"
              }}
              source={{
                uri:
                  "http://www.alaziziyamanpower.com/uploads/images/" +
                  data.image2
              }}
            />
          </ImageBackground>
          <View style={{ marginTop: 16 }}>
            <Text style={{ color: "white", fontSize: 14, marginLeft: 16 }}>
              {data.name}
            </Text>
            <Text style={{ color: "#611e32", fontSize: 14, marginLeft: 16 }}>
              {data.job_type}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1
              }}
            >
              <MaterialIcons.Button
                name={"call"}
                size={18}
                color={"#611e32"}
                onPress={() => {
                  Linking.openURL(`tel:${data.mobile}`);
                }}
                underlayColor="transparent"
                backgroundColor="transparent"
              />

              <FontAwesome5.Button
                name={"whatsapp"}
                size={18}
                color={"#611e32"}
                onPress={() => {
                  Linking.openURL(
                    `whatsapp://send?text=&phone=${data.whatsapp}`
                  );
                }}
                underlayColor="transparent"
                backgroundColor="transparent"
              />

              <MaterialCommunityIcons.Button
                name={"file-document"}
                size={18}
                color={"#611e32"}
                onPress={() => {
                  this.populateResume(data);
                }}
                underlayColor="transparent"
                backgroundColor="transparent"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#282d39",
            height: 50,
            width: Global.screenWidth,
            justifyContent: "space-evenly",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              color: "#fff",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            {data.nationality}
          </Text>
          <Text
            style={{
              color: "#fff",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            {data.age} Years
          </Text>
          <Text
            style={{
              color: "#fff",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            {data.religion}
          </Text>
          <View
            style={{
              height: 50,
              width: 50,
              padding: 0,
              justifyContent: "center"
            }}
          >
            {/* check-box and check-box-outline-blank */}
            <MaterialIcons.Button
              name={"check-box"}
              size={26}
              color={"green"}
              onPress={() => {}}
              underlayColor="transparent"
              backgroundColor="transparent"
            />
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    UserDefaults.set("isLoggedin", 1);

    UserDefaults.get("isAdmin")
      .then(isAdmin => {
        this.setState({ isAdmin: isAdmin });
      })
      .catch(error => {
        this.navigateToLogin();
        console.log("ERROR", error);
      });

    UserDefaults.get("id").then(id => {
      this.setState({
        id: id
      });
    });

    this.getData();
  }

  renderResume() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
          height: Global.screenHeight,
          width: Global.screenWidth
        }}
      >
        <MaterialIcons.Button
          name={"arrow-back"}
          size={30}
          color={"black"}
          onPress={() => {
            this.setState({
              showResume: false
            });
          }}
          underlayColor="transparent"
          backgroundColor="transparent"
        />
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            width: Global.screenWidth
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              padding: 16,
              justifyContent: "center"
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#611e32", fontSize: 19 }}
            >
              العزيزية لجلب الايدي العاملة
            </Text>
            <Text style={{ alignSelf: "center", color: "black", fontSize: 16 }}>
              APPLICATION FOR EMPLOYMENT
            </Text>
          </View>

          <View
            style={{ borderColor: "black", borderWidth: 0.5, paddingRight: 8 }}
          >
            <Image
              style={{
                marginLeft: 0,
                marginTop: 5,
                alignSelf: "center",
                height: 70,
                width: 70
              }}
              source={require("../../../assets/common/logo.png")}
            />
          </View>
        </View>

        <View
          style={{
            borderColor: "black",
            borderWidth: 0.5,
            marginLeft: 8,
            marginRight: 6,
            padding: 8
          }}
        >
          <Text>
            AGENCY CODE.|{" "}
            <Text style={{ fontWeight: "bold", color: "black" }}>
              {" "}
              REF.NO: 2019/IND/0001{" "}
            </Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>POST APPLIED FOR</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.job_type}</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>XXXX</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>MONTHLY SALARY </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.previos_salary}</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>راتب شهري</Text>
          </View>
        </View>

        <View
          style={{
            borderColor: "black",
            borderWidth: 0.5,
            marginLeft: 8,
            marginRight: 6,
            padding: 8
          }}
        >
          <Text>NAME IN FULL/ الاسم بالكامل : {this.state.name}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 1.5
            }}
          >
            <Text style={{ fontWeight: "bold", color: "black" }}>
              PASSPORT DETAILS{" "}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>PASSPORT NUMBER</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>xyz </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>رقم جواز السفر</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>DATE OF ISSUE</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>PQR </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>تاريخ المسألة</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>PLACE OF ISSUE</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>LMN </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>مكان صدوره</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>DATE OF EXP. </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>تاريخ EXP</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 1.5
            }}
          >
            <Text style={{ fontWeight: "bold", color: "black" }}>
              PERSONAL DETAILS{" "}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>NATIONALITY </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.nationality}</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>جنسية</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>RELIGION </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.religion}</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>دين</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>PLACE OF BIRTH </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>مكان الولادة</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>DATE OF BIRTH </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>تاريخ الولادة</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>AGE </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.age}</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>عمر</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>LIVING TOWN </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>العيش المدينة</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>MARITAL STATUS </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.marital_status}</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>الحالة الزوجية</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>NO. OF CHILDREN </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>لا. من الأطفال</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>PHONE NO. </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>رقم الهاتف</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>MOTHERS NAME</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>اسم الأم</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>HEIGHT</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>ارتفاع</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>WEIGHT</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>وزن</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>EDUCATION</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.education}</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>التعليم</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>PREVIOUS EXP.</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.experience} </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>خبرة سابقة</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>PERIOD</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>{this.state.notice_period} </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>فترة</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>COUNTRY</Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth / 3.0
            }}
          >
            <Text style={{}}>ASD </Text>
          </View>

          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 0,
              marginRight: 6,
              padding: 8,
              width: Global.screenWidth / 3.3
            }}
          >
            <Text style={{}}>بلد</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth - 1
            }}
          >
            <Text style={{ fontWeight: "bold", color: "black" }}>REMARKS </Text>
            <Text style={{ fontWeight: "bold", color: "black" }} />
            <Text style={{ fontWeight: "bold", color: "black" }} />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 6,
            backgroundColor: "#611e32"
          }}
        >
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              marginLeft: 8,
              marginRight: 0,
              padding: 8,
              width: Global.screenWidth - 1
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                alignSelf: "center",
                color: "white"
              }}
            >
              ADDRESS:{" "}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                alignSelf: "center",
                color: "white",
                textAlign: "center"
              }}
            >
              MOBILE : 33263555, P.O.BOX: 38305, COMMERCIAL SREET, AL
              AZIZIYA,DOHA QATAR
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                alignSelf: "center",
                color: "white"
              }}
            >
              EMAIL: alaziziyamanpowersupply@gmail.com
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#1a1e27", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#8D1B3D",
            height: 180,
            overflow: "visible"
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "500",
              marginTop: 48,
              marginRight: 16
            }}
          >
            العزيزية لجلب الايدي العاملة
          </Text>
          <Text
            style={{
              color: Colors._A2GrayCountryCode,
              marginLeft: 16,
              fontSize: 14
            }}
          >
            Street : 94, Zone :55, Commercial Street , Doha Qatar
          </Text>
          <Text
            style={{
              color: Colors._A2GrayCountryCode,
              marginLeft: 16,
              fontSize: 14
            }}
          >
            Mobile: +97433263555, Landline: +97444771272
          </Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={rowData => this.renderRow(rowData)}
        />

        <Modal
          transparent
          visible={this.state.showResume}
          onDismiss={() => {
            this.setState({ showResume: false });
          }}
          presentationStyle={"overFullScreen"}
          animationType="fade"
        >
          <ModalBox
            style={{ backgroundColor: " rgba(0, 0, 0, 0)" }}
            isOpen={this.state.showResume}
            swipeArea={200}
            backButtonClose={true}
            isScrollable={true}
            backButtonClose={true}
            onClosed={() => {
              this.setState({ showResume: false });
            }}
          >
            {this.renderResume()}
          </ModalBox>
        </Modal>

        {this.state.isLoading ? <ProgressBar /> : null}
      </ScrollView>
    );
  }
}
