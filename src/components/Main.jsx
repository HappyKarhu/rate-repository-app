
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 3,
    backgroundColor: '#e1e4e8',
  },
});



const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />  {/* AppBar is here at the top */}
      <RepositoryList /> 
    </View>
  );
};

export default Main;