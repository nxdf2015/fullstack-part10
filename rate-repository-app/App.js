import React from "react";

import { Dimensions, View, StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/react-hooks";
import Main from "./components/Main";
import createClient from "./apolloConfig";

import AuthContext from "./context/AuthStorageContext";
import AuthStorage from "./utils/authStorage";

import theme from "./theme";
const authStorage = new AuthStorage();
const client = createClient(authStorage);

export default function App() {
  return (<View style={styles.container}>
      <NativeRouter>
        <AuthContext.Provider value={authStorage}>
          <ApolloProvider client={client}>
            <Main></Main>
          </ApolloProvider>
        </AuthContext.Provider>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: Dimensions.get("screen").width,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.main,
    flex: 1,
    
    fontFamily: theme.font.fontFamily,
    // backgroundColor: '#fff',

    // justifyContent: 'center',
  },
});
