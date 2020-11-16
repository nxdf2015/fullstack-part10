import React from 'react';
import { Text} from 'react-native';
import styles from './styles';

const AppBarTab = ({ name }) => <Text style={styles.item}>{name}</Text>;

export default AppBarTab;