import { StyleSheet } from "react-native";
import { colors, heights } from "../../style/base";
import { mainStyle } from "../../style";

export default (styles = StyleSheet.create({
  item: {
    ...mainStyle.footer,
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 11,
    fontFamily: "IBMPlexSans-SemiBold"
  },
}));
