import React from "react";
import theme from '../../theme';

import { useField } from "formik";
import { TextInput ,View,Text,StyleSheet } from "react-native";
 
const styleValidation= StyleSheet.create({
 error : {
     color: theme.colors.error,
     fontSize: theme.fontSize.heading,
     textAlign:'center',
     marginTop: 5,
     marginBottom:15
 }
 ,
 border :{
     borderColor : 'red'
 }
});

const FormikTextInput = ({ name, style , ...props }) => {
  const [field, meta  , helper] = useField(name);
  
  return (
    <View>
      <TextInput
        value={field.value}
        secureTextEntry={name === "password"}
        onChangeText={(value) => helper.setValue(value)}
        onBlur={() => helper.setTouched(true)}
        name={name}
        style={[style, meta.error && styleValidation.border]}
        {...props}

      />
      {meta.touched && meta.error && <Text style={styleValidation.error}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
