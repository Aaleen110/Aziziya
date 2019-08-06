import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import {
  ModalBox,
  DialogHeader,
  Ripple,
  Separator,
  ProgressBar
} from "../../../components";
import { Global, Colors, UserDefaults, URLs } from "../../../utils";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialIcon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "rn-fetch-blob";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";

export default class SignupScreenUpload extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      disableFlag: false,
      showLoginModal: true,
      showSignupModal: false,
      uploadHalfImage: false,
      uploadFullImage: false,
      uploadCV: false,
      half_image: "",
      full_image: "",
      cv_image: "",

      test_image: "",
      resume_id: ""
    };

    this.signup = this.signup.bind(this);
    this.finish = this.finish.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.selectPhoto2 = this.selectPhoto2.bind(this);
    this.getFileExtFromMIME = this.getFileExtFromMIME.bind(this);
    this.selectResume = this.selectResume.bind(this);
    this.setFinalPdfPath = this.setFinalPdfPath.bind(this);
    this.uploadImageToServer = this.uploadImageToServer.bind(this);
    this.uploadPdfToServer = this.uploadPdfToServer.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;
    const resume_id = navigation.getParam("resume_id", "");

    console.log("RESUMEID", resume_id);

    this.setState({
      resume_id: resume_id,
      img_half: ""
    });
  }

  getFileExtFromMIME(mime) {
    switch (mime) {
      case "application/pdf":
        return ".pdf";
      case "image/jpeg":
      case "image/png":
      case "image/jpg":
        return ".jpg";
      default:
        return ".tmp";
    }
  }

  uploadImageToServer = () => {
    this.setState({ isLoading: true });
    // console.log('DATA sent', this.state.data)

    RNFetchBlob.fetch(
      "POST",
      "http://alaziziyamanpower.com/new_webservices/model/upload_image.php",
      {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        "Content-Type": "multipart/form-data"
      },
      [
        {
          name: "img_half",
          filename: "image.png",
          type: "image/png",
          data: this.state.img_half
        },

        {
          name: "image",
          filename: "image.png",
          type: "image/png",
          data: this.state.data
        },

        {
          name: "pdf",
          filename: "image.png",
          type: "application/pdf",
          data: this.state.pdf
        },

        { name: "resume_id", data: this.state.resume_id }
      ]
    )
      .then(resp => {
        var tempMSG = resp.data;

        tempMSG = tempMSG.replace(/^"|"$/g, "");
        this.setState({ isLoading: false });
        console.log("Response Upload", JSON.stringify(resp));
      })
      .catch(err => {
        this.setState({ isLoading: false });
        Alert.alert("Something went wrong", "Please try again later");
      });
  };

  uploadPdfToServer = () => {
    RNFetchBlob.fetch(
      "POST",
      "http://alaziziyamanpower.com/new_webservices/model/upload_image.php",
      {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        "Content-Type": "multipart/form-data"
      },
      [
        {
          name: "image",
          filename: "image.png",
          type: "application/pdf",
          data: this.state.pdf
        },
        { name: "image_tag", data: this.state.Image_TAG }
      ]
    )
      .then(resp => {
        var tempMSG = resp.data;

        tempMSG = tempMSG.replace(/^"|"$/g, "");

        console.log("Response", JSON.stringify(resp));
      })
      .catch(err => {
        // ...
      });
  };

  selectPhoto2(type) {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    if (type == 1) {
      ImagePicker.showImagePicker(options, response => {
        console.log("Response = ", response);

        if (response.didCancel) {
          console.log("User cancelled photo picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          let source = { uri: response.uri };

          this.setState({
            ImageSource: source,
            data: response.data
          });
        }
      });
    } else {
      ImagePicker.showImagePicker(options, response => {
        console.log("Response = ", response);

        if (response.didCancel) {
          console.log("User cancelled photo picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          let source = { uri: response.uri };

          this.setState({
            ImageSource: source,
            img_half: response.data
          });
        }
      });
    }
  }

  selectPhoto(type) {
    const options = {
      noData: true,
      compressImageQuality: Global.iOSPlatform ? 0 : 1,
      width: 200,
      height: 200,
      cropping: true,
      mediaType: "any"
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        // AsyncStorage.setItem('passport', response);

        RNFetchBlob.fs
          .exists(response.path || "")
          .then(exist => {
            var ext = this.getFileExtFromMIME(response.type || "");
            if (ext !== ".tmp") {
              RNFetchBlob.fs
                .readFile(response.path || "", "base64")
                .then(imageDataBase64 => {
                  // console.log('IMAGE BASE 64', imageDataBase64)
                  switch (type) {
                    case 1:
                      this.setState({
                        half_image: `data:image/jpg;base64,${imageDataBase64}`,
                        test_image: imageDataBase64,
                        uploadHalfImage: true
                      });
                      break;
                    case 2:
                      this.setState({
                        full_image: `data:image/jpg;base64,${imageDataBase64}`,
                        uploadFullImage: true
                      });
                      break;
                  }
                  this.setState({
                    image: `data:image/jpg;base64,${imageDataBase64}`
                  });
                  // AsyncStorage.setItem('passport', JSON.stringify({'key':`data:image/jpg;base64,${imageDataBase64}`}));

                  // AsyncStorage.setItem('passport', `data:image/jpg;base64,${imageDataBase64}` );
                  //  console.log("Image", `data:image/jpg;base64,${imageDataBase64}`)
                })
                .catch(error => console.log("Error", error));
            } else {
              Alert.alert("Something went wrong", "Unknown file type");
            }
          })
          .catch(error => console.log("Error", error));
      }
    });
  }

  selectResume() {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.pdf()]
      },
      (error, url) => {
        console.log("AAA", url);
        console.log("AAA", error);

        this.setFinalPdfPath(url);
      }
    );
  }

  setFinalPdfPath(url) {
    if (url) {
      console.log(url, "sss");

      var output = url.uri + "/" + url.fileName;

      //  RNFetchBlob.fs.exists(url.uri || '')
      // .then((exist) => {

      RNFetchBlob.fs
        .readFile(url.uri || "", "base64")
        .then(imageDataBase64 => {
          console.log("Test", imageDataBase64);

          this.setState({
            pdf: imageDataBase64
          });
        })
        .catch(error => {
          Alert.alert("Error", error);
        });

      // }).catch((error) => {
      //   Alert.alert('Error', error)
      // })
    }
  }

  finish() {
    if (
      this.state.half_image != "" &&
      this.state.full_image != ""
      //this.state.cv_image != ""
    ) {
      this.setState({ isLoading: true });

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
    }
  }

  signup() {
    this.setState({ isLoading: true });
    if (
      this.state.fullname != "" &&
      this.state.mobile != "" &&
      this.state.email != "" &&
      this.state.password != ""
    ) {
      this.saveSignupData(
        this.state.fullname,
        this.state.mobile,
        this.state.email,
        this.state.password
      ).then(() => {
        Alert.alert("Sucess", "Signup sucessfull");
      });
    } else {
      this.setState({ isLoading: false });
      Alert.alert("Credentials", "Please fill all required fields first");
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: "#1a1e27", flex: 1 }}>
        <View style={{ paddingTop: 32, paddingLeft: 30 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
              marginBottom: 16,
              marginLeft: -30
            }}
          >
            <View
              style={{
                borderColor: "#fff",
                borderWidth: 0.3,
                marginLeft: 10,
                backgroundColor: "#8D1B3D",
                borderWidth: 0.5,
                height: 15,
                width: 15,
                alignSelf: "center",
                borderRadius: 20,
                justifyContent: "center"
              }}
            />

            <View
              style={{
                borderColor: "#fff",
                borderWidth: 0.3,
                marginLeft: 10,
                backgroundColor: "#8D1B3D",
                height: 15,
                width: 15,
                alignSelf: "center",
                borderRadius: 20,
                justifyContent: "center"
              }}
            />

            <View
              style={{
                borderColor: "#fff",
                borderWidth: 0.3,
                marginLeft: 10,
                backgroundColor: "#8D1B3D",
                height: 15,
                width: 15,
                alignSelf: "center",
                borderRadius: 20,
                justifyContent: "center"
              }}
            />
          </View>

          <Text style={styles.welcome}>Upload,</Text>
          <Text style={styles.subText}>Upload your CV and photograph</Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            color: "white",
            marginLeft: 32,
            marginTop: 16
          }}
        >
          Upload half image
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Ripple
            onPress={() => this.selectPhoto2(1)}
            style={{
              backgroundColor: "#8D1B3D",
              height: 30,
              width: 150,
              alignSelf: "flex-start",
              borderRadius: 10,
              marginLeft: 36,
              marginTop: 16,
              marginBottom: 16,
              flexDirection: "row"
            }}
          >
            <MaterialIcons.Button
              name={"file-upload"}
              backgroundColor={"transparent"}
              color={"white"}
              // onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
              underlayColor="transparent"
              size={30}
              style={{
                marginTop: 0,
                marginBottom: 0,
                padding: 0,
                marginLeft: 0,
                marginRight: 0
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 0,
                marginTop: 0,
                justifyContent: "center",
                alignSelf: "center"
              }}
            >
              Choose files
            </Text>
          </Ripple>

          <MaterialIcon.Button
            name={this.state.uploadHalfImage ? "md-checkmark" : null}
            backgroundColor={"transparent"}
            color={"green"}
            //onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            underlayColor="transparent"
            size={30}
            style={{
              marginTop: 16,
              marginBottom: 0,
              padding: 0,
              marginLeft: 10,
              marginRight: 0
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
          Upload full image
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Ripple
            onPress={() => this.selectPhoto2(2)}
            style={{
              backgroundColor: "#8D1B3D",
              height: 30,
              width: 150,
              alignSelf: "flex-start",
              borderRadius: 10,
              marginLeft: 36,
              marginTop: 16,
              marginBottom: 16,
              flexDirection: "row"
            }}
          >
            <MaterialIcons.Button
              name={"file-upload"}
              backgroundColor={"transparent"}
              color={"white"}
              //  onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
              underlayColor="transparent"
              size={30}
              style={{
                marginTop: 0,
                marginBottom: 0,
                padding: 0,
                marginLeft: 0,
                marginRight: 0
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 0,
                marginTop: 0,
                justifyContent: "center",
                alignSelf: "center"
              }}
            >
              Choose file
            </Text>
          </Ripple>

          <MaterialIcon.Button
            name={this.state.uploadFullImage ? "md-checkmark" : null}
            backgroundColor={"transparent"}
            color={"green"}
            //  onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            underlayColor="transparent"
            size={30}
            style={{
              marginTop: 16,
              marginBottom: 0,
              padding: 0,
              marginLeft: 10,
              marginRight: 0
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
          Upload CV
        </Text>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <Ripple
            onPress={() => this.selectResume()}
            style={{
              backgroundColor: "#8D1B3D",
              height: 30,
              width: 150,
              alignSelf: "flex-start",
              borderRadius: 10,
              marginLeft: 36,
              marginTop: 16,
              marginBottom: 16,
              flexDirection: "row"
            }}
          >
            <MaterialIcons.Button
              name={"file-upload"}
              backgroundColor={"transparent"}
              color={"white"}
              //  onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
              underlayColor="transparent"
              size={30}
              style={{
                marginTop: 0,
                marginBottom: 0,
                padding: 0,
                marginLeft: 0,
                marginRight: 0
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 0,
                marginTop: 0,
                justifyContent: "center",
                alignSelf: "center"
              }}
            >
              Choose file
            </Text>
          </Ripple>

          <MaterialIcon.Button
            name={this.state.uploadCV ? "md-checkmark" : null}
            backgroundColor={"transparent"}
            color={"green"}
            //     onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
            underlayColor="transparent"
            size={30}
            style={{
              marginTop: 16,
              marginBottom: 0,
              padding: 0,
              marginLeft: 10,
              marginRight: 0
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
          onPress={this.uploadImageToServer}
          style={{
            backgroundColor: "#8D1B3D",
            height: 50,
            width: Global.screenWidth,
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{ alignSelf: "center", color: "white", fontWeight: "bold" }}
          >
            Finish!
          </Text>
        </Ripple>
        {this.state.isLoading ? <ProgressBar /> : null}
      </View>
    );
  }
}
