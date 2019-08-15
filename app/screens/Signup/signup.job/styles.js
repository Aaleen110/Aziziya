import { StyleSheet, Dimensions } from "react-native";
import { Global, Color, URLs } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginBottom: 16,
    marginLeft: -30
  },

  innerLayer1: {
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
  },

  innerLayer2: {
    borderColor: "#fff",
    borderWidth: 0.3,
    marginLeft: 10,
    backgroundColor: "#8D1B3D",
    height: 15,
    width: 15,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center"
  },

  innerLayer3: {
    borderColor: "#fff",
    borderWidth: 0.3,
    marginLeft: 10,
    backgroundColor: "#1a1e27",
    height: 15,
    width: 15,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center"
  },

  innerLayer4: {
    borderColor: "#fff",
    borderWidth: 0.3,
    marginLeft: 10,
    backgroundColor: "#1a1e27",
    height: 15,
    width: 15,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center"
  },

  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8D1B3D",
    justifyContent: "flex-start"
  },
  subText: {
    fontSize: 18,
    fontWeight: "500",
    color: "grey"
  }
});

export default styles;
