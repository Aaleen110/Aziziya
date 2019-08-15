import React, { Component } from "react";
import { Alert, Text, View, TextInput, ScrollView } from "react-native";
import { Ripple, Separator, ProgressBar } from "../../../components";
import { Global, Constants, URLs } from "../../../utils";
import styles from "./styles";
import { Dropdown } from "react-native-material-dropdown";

export default class SignupScreenJob extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      job_category: "",
      job_location: "",
      status: "",
      experience: "",
      current_salary: "",
      expected_salary: "",
      notice: "",
      skills: "",
      description: "",
      fullname: "",
      mobile: "",
      email: "",
      password: "",
      age: "",
      nationality: "",
      religion: "",
      education: "",
      marital_status: "",
      passport_number: "",
      disableFlag: false,
      showLoginModal: true,
      showSignupModal: false,
      isExperienceSelected: 0
    };
    this.gotoNextScreen = this.gotoNextScreen.bind(this);
    this.gotoUpload = this.gotoUpload.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;
    const fullname = navigation.getParam("fullname", "");
    const mobile = navigation.getParam("mobile", "");
    const email = navigation.getParam("email", "");
    const password = navigation.getParam("password", "");
    const age = navigation.getParam("age", "");
    const nationality = navigation.getParam("nationality", "");
    const religion = navigation.getParam("religion", "");
    const education = navigation.getParam("education", "");
    const marital_status = navigation.getParam("marital_status", "");
    const passport_number = navigation.getParam("passport_number", "");

    this.setState({
      fullname: fullname,
      mobile: mobile,
      email: email,
      password: password,
      age: age,
      nationality: nationality,
      religion: religion,
      education: education,
      marital_status: marital_status,
      passport_number: passport_number
    });
  }

  gotoUpload(id) {
    this.props.navigation.navigate(Routes.signupScreenUpload, {
      resume_id: id
    });
  }

  gotoNextScreen() {
    this.setState({
      isLoading: true
    });

    if (
      this.state.job_category != "" &&
      this.state.job_location != "" &&
      this.state.status != "" &&
      this.state.current_salary != "" &&
      this.state.expected_salary != "" &&
      this.state.notice != "" &&
      this.state.skills != "" &&
      this.state.description != "" &&
      this.state.isExperienceSelected != 0
    ) {
      let experience = "";
      switch (this.state.isExperienceSelected) {
        case 1:
          experience = "<1";
          break;

        case 2:
          experience = "1+";
          break;

        case 3:
          experience = "2+";
          break;

        case 4:
          experience = "3+";
          break;
      }

      let params =
        "name=" +
        this.state.fullname +
        "&mobile=" +
        this.state.mobile +
        "&email=" +
        this.state.email +
        "&password=" +
        this.state.password +
        "&age=" +
        this.state.age +
        "&nationality=" +
        this.state.nationality +
        "&education=" +
        this.state.education +
        "&marital_status=" +
        this.state.marital_status +
        "&job_category=" +
        this.state.job_category +
        "&job_location=" +
        this.state.job_location +
        "&experience=" +
        this.state.experience +
        "&previos_salary=" +
        this.state.current_salary +
        "&expected_salary=" +
        this.state.expected_salary +
        "&notice_period=" +
        this.state.notice +
        "&skills=" +
        this.state.skills +
        "&job_description=" +
        this.state.description +
        "&religion=" +
        this.state.religion +
        "&job_type=" +
        this.state.job +
        "&passport_number" +
        this.state.passport_number +
        "&resume_file=empty" + //+this.state.cv_image
        "&resume_status=" +
        this.state.status +
        "&image1=null" + //+this.state.half_image
        "&image2=null"; //+this.state.full_image

      fetch(URLs.URLs.addResume + "company_id=7&" + params, {
        method: "GET"
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.message == 500) {
            this.setState({ isLoading: false });

            let resume_id = responseJson.data;

            this.gotoUpload(resume_id.toString());
          } else if (responseJson.message == 501) {
            Alert.alert("Something went wrong", "You are already registered");
            this.setState({ isLoading: false });
          } else {
            Alert.alert("Something went wrong", "Please try again later.");
            this.setState({ isLoading: false });
          }
        });
    } else {
      Alert.alert(
        "Something went wrong",
        "Please fill all the required fields"
      );
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#1a1e27" }}>
        <View style={{ paddingTop: 32, paddingLeft: 30 }}>
          <View style={styles.innerLayer1}>
            <View style={styles.innerLayer2} />

            <View style={styles.innerLayer3} />

            <View style={styles.innerLayer4} />
          </View>

          <Text style={styles.welcome}>Job,</Text>
          <Text style={styles.subText}>Enter your job details</Text>
        </View>

        <View style={{ marginLeft: 32, marginRight: 32, marginTop: -12 }}>
          <Dropdown
            label="Job Category"
            baseColor="white"
            itemColor="black"
            selectedItemColor="black"
            textColor="white"
            fontSize={14}
            data={Constants.jobCategoryData}
            onChangeText={value => {
              this.setState({ job_category: value });
            }}
          />
        </View>

        <View style={{ marginLeft: 32, marginRight: 32, marginTop: -12 }}>
          <Dropdown
            label="Job Location"
            baseColor="white"
            itemColor="black"
            selectedItemColor="black"
            textColor="white"
            fontSize={14}
            data={Constants.jobLocationData}
            onChangeText={value => {
              this.setState({ job_location: value });
            }}
          />
        </View>

        <View style={{ marginLeft: 32, marginRight: 32, marginTop: -12 }}>
          <Dropdown
            label="Status"
            baseColor="white"
            itemColor="black"
            selectedItemColor="black"
            textColor="white"
            fontSize={14}
            data={Constants.statusData}
            onChangeText={value => {
              this.setState({ status: value });
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 14,
            color: "white",
            marginLeft: 32,
            marginTop: 16
          }}
        >
          Experience
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Ripple
            onPress={() => {
              this.setState({ isExperienceSelected: 1 });
            }}
            style={{
              height: 40,
              width: 40,
              backgroundColor:
                this.state.isExperienceSelected == 1
                  ? "#8D1B3D"
                  : "transparent",
              borderRadius: 10,
              borderWidth: 1.3,
              borderColor: "#8D1B3D",
              marginLeft: 32,
              marginTop: 16,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              {"<1"}
            </Text>
          </Ripple>

          <Ripple
            onPress={() => {
              this.setState({ isExperienceSelected: 2 });
            }}
            style={{
              height: 40,
              width: 40,
              backgroundColor:
                this.state.isExperienceSelected == 2
                  ? "#8D1B3D"
                  : "transparent",
              borderRadius: 10,
              borderWidth: 1.3,
              borderColor: "#8D1B3D",
              marginLeft: 32,
              marginTop: 16,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              {"1+"}
            </Text>
          </Ripple>

          <Ripple
            onPress={() => {
              this.setState({ isExperienceSelected: 3 });
            }}
            style={{
              height: 40,
              width: 40,
              backgroundColor:
                this.state.isExperienceSelected == 3
                  ? "#8D1B3D"
                  : "transparent",
              borderRadius: 10,
              borderWidth: 1.3,
              borderColor: "#8D1B3D",
              marginLeft: 32,
              marginTop: 16,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              {"2+"}
            </Text>
          </Ripple>

          <Ripple
            onPress={() => {
              this.setState({ isExperienceSelected: 4 });
            }}
            style={{
              height: 40,
              width: 40,
              backgroundColor:
                this.state.isExperienceSelected == 4
                  ? "#8D1B3D"
                  : "transparent",
              borderRadius: 10,
              borderWidth: 1.3,
              borderColor: "#8D1B3D",
              marginLeft: 32,
              marginTop: 16,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              {"3+"}
            </Text>
          </Ripple>
        </View>

        <Text
          style={{
            fontSize: 16,
            color: "white",
            marginLeft: 32,
            marginTop: 16
          }}
        >
          Salary per annum
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder="Current"
            placeholderTextColor="#ccc"
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={text => {
              this.setState({ errorMessage: "", current_salary: text });
            }}
            value={this.state.current_salary}
            style={{
              height: 40,
              marginLeft: 32,
              marginTop: 0,
              width: Global.screenWidth / 4,
              color: "white"
            }}
          />

          <TextInput
            placeholder="Expectations"
            placeholderTextColor="#ccc"
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={text => {
              this.setState({ errorMessage: "", expected_salary: text });
            }}
            value={this.state.expected_salary}
            style={{
              height: 40,
              marginLeft: 32,
              marginTop: 0,
              width: Global.screenWidth - 60,
              color: "white"
            }}
          />
        </View>

        <TextInput
          placeholder="Notice period"
          placeholderTextColor="#ccc"
          underlineColorAndroid="rgba(0,0,0,0)"
          onChangeText={text => {
            this.setState({ errorMessage: "", notice: text });
          }}
          value={this.state.notice}
          style={{
            height: 40,
            marginLeft: 32,
            marginTop: 0,
            width: Global.screenWidth - 60,
            color: "white"
          }}
        />

        <Separator
          style={{
            height: 1,
            width: Global.screenWidth * 0.85,
            alignSelf: "center"
          }}
        />

        <TextInput
          placeholder="Skills Known"
          placeholderTextColor="#ccc"
          underlineColorAndroid="rgba(0,0,0,0)"
          onChangeText={text => {
            this.setState({ errorMessage: "", skills: text });
          }}
          value={this.state.skills}
          style={{
            height: 40,
            marginLeft: 32,
            marginTop: 0,
            width: Global.screenWidth - 60,
            color: "white"
          }}
        />

        <Separator
          style={{
            height: 1,
            width: Global.screenWidth * 0.85,
            alignSelf: "center"
          }}
        />

        <Text
          style={{
            fontSize: 14,
            color: "white",
            marginLeft: 32,
            marginTop: 16
          }}
        >
          Job Description
        </Text>
        <View
          style={{
            borderWidth: 0.3,
            borderColor: "white",
            marginLeft: 32,
            marginRight: 32,
            marginTop: 16,
            height: 100
          }}
        >
          <TextInput
            placeholder="Please provide detailed description of the job profile"
            placeholderTextColor="#ccc"
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={text => {
              this.setState({ errorMessage: "", description: text });
            }}
            multiline={true}
            value={this.state.description}
            style={{
              height: 100,
              marginLeft: 16,
              marginRight: 36,
              width: Global.screenWidth - 80,
              color: "white"
            }}
          />
        </View>

        <Text
          style={{
            color: "red",
            justifyContent: "center",
            alignSelf: "center",
            paddingTop: 16
          }}
        >
          {this.state.errorMessage}
        </Text>

        <Ripple
          onPress={this.gotoNextScreen}
          style={{
            backgroundColor: "#8D1B3D",
            height: 40,
            width: 150,
            alignSelf: "center",
            borderRadius: 20,
            justifyContent: "center",
            marginBottom: 16
          }}
        >
          <Text
            style={{ alignSelf: "center", color: "white", fontWeight: "bold" }}
          >
            Next
          </Text>
        </Ripple>

        {this.state.isLoading ? <ProgressBar /> : null}
      </ScrollView>
    );
  }
}
