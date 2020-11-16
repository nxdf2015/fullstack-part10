import React ,{useContext} from "react";
import {useApolloClient} from '@apollo/react-hooks';
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Switch, Route ,useHistory } from "react-router-native";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from './SignIn'; 
import  authContext from '../context/AuthStorageContext';

const Main = () => {
  
 
  return (<View>
    <AppBar />
    <Switch>
        <Route path="/signin">
            <SignIn/>
        </Route>
       
      <Route path="/logout">
        <Logout></Logout>
      </Route>
      <Route path="/">
        <RepositoryList />
      </Route>
    </Switch>
    <StatusBar style="auto" />
  </View>
);};


const Logout = () => {
  const history = useHistory();
  const clientApollo = useApolloClient();
  const authStorage = useContext(authContext);

  authStorage.removeAccessToken();
  clientApollo.resetStore();
  history.push('/');
  return null ; 
};
export default Main;
