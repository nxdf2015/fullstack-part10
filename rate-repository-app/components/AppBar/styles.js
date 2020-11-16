import {StyleSheet, } from 'react-native';
import  Constants from 'expo-constants';
import theme from '../../theme';
 
export default  StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      paddingBottom: 25,
      paddingLeft: 15,
      backgroundColor: theme.colors.secondary,
  
      display: "flex",
    },
    item: {
      color: "white",
      fontSize: theme.fontSize.heading,
      fontWeight: theme.fontWeight.heading,
      padding: 15,
      
    },
  });