import React, { useEffect, useState } from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Link } from "react-router-native";
import {useQuery } from '@apollo/react-hooks';

import AppBarTab from './AppBarTab';
import Container from './Container';

import { AUTHORIZED} from '../../graphql/queries';



const AppBar = () => {
  const [logged, setLogged] = useState(false);
  const {data} = useQuery(AUTHORIZED);
  
  useEffect(() => {
    if (data && data.authorizedUser){
      setLogged(true);
    }
    else {
      setLogged(false);
    }
  },[data]);
  
  
 
  
  
  return (
    <TouchableWithoutFeedback>
      <Container>
        <ScrollView horizontal>
          <Link to="/" component={TouchableOpacity}>
            <AppBarTab name="Repositories" />
          </Link>
          {!logged ? <Link to="/signin" component={TouchableOpacity}>
            <AppBarTab name="Sign in" />
          </Link>:
          <Link to="/logout" component={TouchableOpacity}>
            <AppBarTab name="logout" />
          </Link>}
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
