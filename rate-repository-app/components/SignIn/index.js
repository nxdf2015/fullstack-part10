import React from "react";

import { View } from "react-native";
import { Formik } from "formik";

import * as yup from "yup";
 
import useSignIn from '../../hooks/userSignIn';
import LoginForm from './Form';

import style from './styles';
import { useHistory } from "react-router-native";


const validationSchema = yup.object().shape({
  username: yup.string().required("Username required"),
  password: yup.string().required("Password required"),
});

const SignIn = () => {
  const [ signIn   ] = useSignIn();
  const history = useHistory();
  const submit = async ({ username, password }) => {
    try{
      await signIn({username,password});

    }catch(error) {
    
    history.push("/signin");
  }
     
  
  };
  return (<View>
      <Formik validationSchema={validationSchema} initialValues={{ username: "", password: "" }} onSubmit={submit}>
        {({ handleSubmit }) => (
         <LoginForm  handleSubmit={handleSubmit} style={style}/>
        )}
      </Formik>
    </View>);
};

export default SignIn;
