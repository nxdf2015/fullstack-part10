 
import { useMutation ,useApolloClient} from "@apollo/react-hooks";
import { AUTHORIZE } from "../graphql/mutation";
import { useContext} from 'react';
import { useHistory  } from 'react-router-native';
import AuthContext from '../context/AuthStorageContext';

const useSignIn = () => {
  const [authorize ,{result}] = useMutation(AUTHORIZE);
  const history = useHistory();
  const clientApollo = useApolloClient();
  const authStorage = useContext(AuthContext);
  
  const signIn = async ({ username, password }) => {
  
    
     const response = await authorize({ variables: { username, password } });
     authStorage.setAccessToken(`${response.data.authorize.accessToken}`);
     clientApollo.resetStore();
     history.push('/');
    
     return response.data;
  };
  return [signIn , result];

};

export default useSignIn;