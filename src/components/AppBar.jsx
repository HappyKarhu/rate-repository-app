import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: '100%',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }} showsHorizontalScrollIndicator>
      <AppBarTab to="/">Repositories </AppBarTab>
      <AppBarTab to="/signin">Sign In </AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;