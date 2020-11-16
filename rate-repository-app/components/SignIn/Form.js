import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import FormikTextInput from "./FormikTextInput";

const Form = ({ handleSubmit, style }) => (
  <View style={style.form}>
    <FormikTextInput
      name="username"
      placeholder="Username"
      style={[style.input, { margin: 15 }]}
    />
    <FormikTextInput
      name="password"
      placeholder="Password"
      style={[style.input, { marginBottom: 15 }]}
    />
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <Text style={style.submit}>Sign in</Text>
    </TouchableWithoutFeedback>
  </View>
);

export default Form;
