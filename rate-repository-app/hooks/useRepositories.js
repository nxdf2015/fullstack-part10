import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ALL_REPOSITORIES } from '../graphql/queries';
const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const query = useQuery(ALL_REPOSITORIES,{fetchPolicy:'cache-and-network'});
//   const fetchRepositories = async () => {
//     setLoading(true);

//     // Replace the IP address part with your own IP address!
//     const response = await fetch('http://192.168.100.16:5000/api/repositories');
//     const json = await response.json();

//     setLoading(false);
//     setRepositories(json);
//   };

  useEffect(() => {
     setLoading(true);
  }, []);
 if (loading  && !query.loading){
  
     setRepositories(query.data.repositories.edges.map(object => (object.node)));
     setLoading(false);
 }

  return { repositories, loading , refetch : query.refetch };
};

export default useRepositories;