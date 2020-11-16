import { Dimensions, Platform, useWindowDimensions } from "react-native";

const theme = {
  colors: {
    primary: "#0366d6",
    secondary: "#24292e",
    main: "#e1e4e8",
    heading : "#0000",
    subHeading:"#7e7e7ffa",
    error: "#d73a4a",
    default:'blue'
  },
  size:{
    large: 300,
    medium : 100,
    small : 50
  },
  spacing :{
    large:25,
    medium:15,
    normal:10,
    small:5
  },
  font :{
    fontFamily : Platform.select({
      ios: 'arial',
      android:'roboto',
      default:'sans-serif'
    })
  },
  fontSize: {
    heading: 30,
    subHeading: 14,
    main: 14,
    large:30,
    medium:22,
    normal:15,
    small:9
  },

  fontWeight : {
      heading : "bold",
      subheading :"400",
      light:'300',
      normal:'normal',
      bold: "bold",
      medium :"400",
      
  }
};

export default theme;
