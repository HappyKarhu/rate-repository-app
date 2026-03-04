import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    gap: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/signin">Sign In</AppBarTab>
    </View>
  );
};

export default AppBar;