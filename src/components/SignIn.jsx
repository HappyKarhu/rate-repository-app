import Text from './Text';
import { useFormik } from 'formik';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

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
     validationSchema: validationSchema,
     onSubmit: (values) => {
       console.log(values);
     },
   });

  return (
    <View style={ styles.container }>
      <TextInput
        placeholder="Username"
        style={ [styles.input,
          formik.errors.username && formik.touched.username ? { borderColor: '#d73a4a' } : null
        ] }
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.errors.username && formik.touched.username && (
  <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
)}

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={ [styles.input,
          formik.errors.password && formik.touched.password ? { borderColor: '#d73a4a' } : null
          ]
         }
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
      />
      {formik.errors.password && formik.touched.password && (
  <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
)}
      

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;