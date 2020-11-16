import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import theme from "../../theme";
const style = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-start"
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  heading:{
    fontSize:theme.fontSize.heading,
    fontWeight : theme.fontWeight.heading
  },
  subHeading :{
    fontSize:theme.fontSize.subHeading,
    color: theme.colors.subHeading,
    fontWeight:theme.fontWeight.subheading
  }
  
});
export const RepositoryItem = ({ item }) => {
  

  const capitalize = (text) => text[0].toUpperCase() + text.substring(1);

  const formatNumber = num => {
    if (num < 1000)
      return num;
    else {
      return  `${Number(num/1000).toFixed(1)}k`;
    }
  };

  const Box = ({label, value}) => ( <View style={[style.column,{alignItems:'center'}]}>
    <Text style={style.heading}>{formatNumber(value)}</Text>
    <Text  style={[style.subHeading,{color : theme.colors.subHeading,fontWeight:"300"} ]}>{capitalize(label)}</Text>
  </View>);

  const Header = ({uri , description , language , fullName}) => {
    return   (<View style={[style.row ,{alignItems:"flex-start"}]}>
    <Image
      style={{ width: 50, height: 50 ,margin: 5, borderRadius:5 ,marginHorizontal:10}}
      source={{ uri  }}
    />
    <View style={[style.column,{marginTop:5,marginRight:10}]}>
      <Text style={style.heading}>{ fullName}</Text>
      <Text style={[style.subHeading,{width : 300} ]}>{ description}</Text>
      <View style={[style.row ,{marginVertical : 5}]}>
        <Text style={[style.heading,{
          borderRadius:5,
          backgroundColor:theme.colors.primary,color:'white',padding:5}]}>{ language}</Text> 
      </View>
    </View>
  </View>);
  };

  return (
    <View style={[{backgroundColor: 'white' ,marginVertical:5,paddingVertical:5}]}>
      <Header uri={item.ownerAvatarUrl} fullName={item.fullName} description={item.description} language={item.language}/>
      
      <View style={[style.row,{justifyContent:"space-around",paddingVertical:5}]}>
       <Box label="stars" value={item.stargazersCount}/>
       <Box label="forks" value={item.forksCount}/>
       <Box label="review" value={item.reviewCount}/>
       <Box label="rating" value={item.ratingAverage}/>
      </View>
     
    </View>
  );
};
