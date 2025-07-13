import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  inputTitle: {
    marginLeft: 5,
    color: themes.colors.gray,
    marginTop: 15,
    textTransform: "uppercase",
  },
  inputBox: {
    width: "100%",
    height: 40,
    backgroundColor: themes.colors.bgScreen,
    borderColor: themes.colors.lightgray,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputInsert: {
    width: "70%",
    height: "90%",
  },
  icon: {
    width: '100%'
  }
});
