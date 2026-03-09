import Text from './Text';
import { useFormik } from 'formik';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#rgba(180,211,192,0.3)',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
  },
});

const SignIn = () => {
   const formik = useFormik({
     initialValues: {
       username: '',
       password: '',
     },
     onSubmit: (values) => {
       console.log(values);
     },
   });

  return (
    <View style={ styles.container }>
      <TextInput
        placeholder="Username"
        style={ styles.input }
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={ styles.input }
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;