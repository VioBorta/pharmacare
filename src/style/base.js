import { StyleSheet } from "react-native";
export const colors = {
    white: "#FFFF",
    mainGreen: "#50D2C2",
    mainBlue: "#378DD2",
    darkGray: "#505050",
    gray: "#B3B3B3",
};
export const heights = {
    FOOTER_HEIGHT: 70,
    FOOTER_WIDTH: "100%"
  };
export default StyleSheet.create({
    //margins
    mt_20: {
        marginTop: 20
    },

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: "row"
    },
    spaceBetween: {
        justifyContent: "space-between"
    },
    profileItemsText: {
        color: colors.mainBlue,
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 16,
        marginLeft: "5%",
    },
    alignItemsCenter: {
        alignItems: "center"
    },
    validationError: {
        color: "red",
        marginLeft: "6%",
        top: "2%",
        fontSize: 14,
    },
    footer: {
        height: heights.FOOTER_HEIGHT,
        width: heights.FOOTER_WIDTH,
      },
      flex1: {
          flex: 1
      }
});
