import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
// import { repositories } from '../repositories';
import theme from '../../theme';
import { RepositoryItem } from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';


const styles = StyleSheet.create({
  container:{
    backgroundColor: theme.colors.main,
    // borderStyle:"solid",
    // borderColor:"green",
    // borderWidth:2,
    marginHorizontal : 10,
    marginBottom:20,
  },
  separator: {
    height: 10,
    
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {
  const {repositories }  = useRepositories();
  
  return (<FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
       
      renderItem={RepositoryItem}
      style={styles.container}
    />
  );
};

export default RepositoryList;