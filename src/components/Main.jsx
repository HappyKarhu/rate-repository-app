
import { StyleSheet, View, SafeAreaView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
});



const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />  {/* AppBar is here at the top */}
      <View style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes> 
      </View>
    </SafeAreaView>
  );
};

export default Main;