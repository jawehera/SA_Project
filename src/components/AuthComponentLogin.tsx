import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import Iconicons from 'react-native-vector-icons/FontAwesome';
import { supabase } from '../lib/supabase';

const AuthComponentLogin = ({navigate}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (setter: any, value: string, validitySetter: any) => {
    setter(value);
    // Reset validity to true on any input change
    // This ensures the border color returns to normal immediately
    validitySetter(true);
  };

  const handleRegister = async () => {
    setLoading(true);

    try {
      const isValid = validateFields();

      if (!isValid) {
        setLoading(false);
        return;
      }

      // Check if email already exists
      const { data: existingEmail, error: emailError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email);
        console.log("exist")

      if (emailError) {
        console.error("Error occurred while checking existing email:", emailError.message);
        Alert.alert('An error occurred');
        setLoading(false);
        return;
      }

      // if (existingEmail.length > 0) {
      //   setEmailValid(false);
      //   setLoading(false);
      //   return;
      // } else {
      //   setEmailValid(true);
      // }

      


      // Check if password exists (assuming passwords are hashed in the database)
      const { data: existingPassword, error: passwordError } = await supabase
        .from('profiles')
        .select('id')
        .eq('password', password); // Replace 'hashedPassword' with the hashed value of the entered password

       
      if (passwordError) {
        console.error("Error occurred while checking existing password:", passwordError.message);
        Alert.alert('An error occurred');
        setLoading(false);
        return;
      }

      // if (existingPassword.length > 0 || password.length <= 6) {
      //   setPasswordValid(false);
      //   setLoading(false);
      //   return;
      // } else {
      //   setPasswordValid(true);
      // }
     

      // Proceed with registration if email and password are valid
      // You can add your registration logic here
        console.log("validate login")
        navigate();
    } catch (error) {
      console.error("Unhandled error occurred:", error);
      Alert.alert('An error occurred');
    }
  };

  const validateFields = () => {
    let isValid = true;

    // Validate email format
    if (!validateEmail(email)) {
        setEmailValid(false);
        console.log('not valid ')
        isValid = false;
      } else {
        setEmailValid(true);
        console.log('valid')
      }

    if (password === '' || password.length <= 6) {
      setPasswordValid(false);
      isValid = false;
    } else {
      setPasswordValid(true);
    }

    return isValid;
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
   
    return emailRegex.test(email.trim());
   
  };

  return (
    <View>
      <View style={[styles.container, !emailValid && styles.invalidInput]}>
        <TextInput
          value={email}
          onChangeText={value => handleInputChange(setEmail, value, setEmailValid)}
          placeholder='Email Address'
          style={styles.input}
        />
      </View>
      <View style={[styles.container, !passwordValid && styles.invalidInput]}>
        <TextInput
          value={password}
          onChangeText={value => handleInputChange(setPassword, value, setPasswordValid)}
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Iconicons
            name={showPassword ? 'eye' : 'eye-slash'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Forgot Password?</Text>
      <TouchableOpacity style={styles.loginTouchable} onPress={handleRegister} disabled={loading}>
        <Text style={{ color: '#FFFFFF', }}>{loading ? 'Loading...' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    width: 320,
    height: 55,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'flex-start',
    paddingStart: 15,
  },
  input: {
    justifyContent: 'flex-start'
  },
  eyeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  loginTouchable: {
    backgroundColor: '#00B8A9',
    height: 55,
    width: 320,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 40,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default AuthComponentLogin;
