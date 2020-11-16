
import {StyleSheet} from 'react-native';
import theme from "../../theme";

export default    StyleSheet.create({
    form: {
      backgroundColor: "white",
    },
    input: {
      paddingLeft: 25,
      paddingVertical: 10,
      marginHorizontal: 15,
  
      fontSize: theme.fontSize.heading,
      fontWeight: theme.fontWeight.subheading,
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: theme.colors.main,
    },
    submit: {
      backgroundColor: theme.colors.primary,
      padding: 15,
      fontSize: theme.fontSize.heading,
      fontWeight: theme.fontWeight.heading,
      color: "white",
      textAlign: "center",
    },
  });