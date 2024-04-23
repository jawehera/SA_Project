import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import Iconicons from 'react-native-vector-icons/FontAwesome';
import { supabase } from '../lib/supabase';

interface AuthProps {
  toggleModal: any,
}

const Auth = (props: AuthProps) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // State variables to track field validity
  const [nameValid, setNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);



  const handleInputChange = (setter: any, value: string, validitySetter: any) => {
    setter(value);
    // Reset validity to true on any input change
    // This ensures the border color returns to normal immediately
    validitySetter(true);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Validate all fields
      const isValid = validateFields();
      console.log('valid')

      if (!isValid) {
        setLoading(false); // Reset loading state
        return;
      }

      // Check if email already exists
      const { data: existingEmail, error: emailError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email);

      if (emailError) {
        console.error("Error occurred while checking existing email:", emailError.message);
        Alert.alert('An error occurred');
        setLoading(false); // Reset loading state
        return;
      }

      if (existingEmail.length > 0) {
        setEmailValid(false); // Set email validity state to false to highlight it in red
        setLoading(false); // Reset loading state
        console.log('here')
        return;
      } else {
        setEmailValid(true); // Reset email validity state if it's valid
      }

      // Check if phone number format is valid
      if (!validatePhoneNumber(phoneNumber)) {
        setPhoneNumberValid(false);
        setLoading(false);
        return;
      } else {
        setPhoneNumberValid(true);
      }

      // Check if password exists
      const { data: existingPassword, error: passwordError } = await supabase
        .from('profiles')
        .select('id')
        .eq('password', password);

      if (passwordError) {
        console.error("Error occurred while checking existing password:", passwordError.message);
        Alert.alert('An error occurred');
        setLoading(false);
        return;
      }

      if (existingPassword.length > 0 || password.length <= 6) {
        setPasswordValid(false);
        setLoading(false);
        return;
      } else {
        setPasswordValid(true);
      }
  

      // Submit data to the profiles table
      const { data, error } = await supabase.from('profiles').insert([
        { name, lastName, email, phoneNumber, password }
      ]);

      if (error) {
        console.error("Error occurred while submitting data:", error.message);
        Alert.alert('An error occurred');
        setLoading(false); // Reset loading state
        return;
      }

      // Call toggleModal after successful submission
      props.toggleModal();

      // // Show success message
      // Alert.alert('Success');

    } catch (error) {
      console.error("Unhandled error occurred:", error);
      Alert.alert('An error occurred');
    }

    setLoading(false); // Reset loading state
  };

  const validateFields = () => {
    let isValid = true;

    // Validate name
    if (name.trim() === '') {
      setNameValid(false);
      isValid = false;
    } else {
      setNameValid(true);
    }

    // Validate last name
    if (lastName.trim() === '') {
      setLastNameValid(false);
      isValid = false;
    } else {
      setLastNameValid(true);
    }

    // Validate email format
    if (!validateEmail(email)) {
      setEmailValid(false);
      isValid = false;
    } else {
      setEmailValid(true);
    }

    // Validate phone number format
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberValid(false);
      isValid = false;
    } else {
      setPhoneNumberValid(true);
    }

    // Validate password
    if (password === '') {
      setPasswordValid(false);
      isValid = false;
    } else {
      setPasswordValid(true);
    }

    // Validate confirm password
    if (confirmPassword === '' || confirmPassword !== password) {
      setConfirmPasswordValid(false);
      isValid = false;
    } else {
      setConfirmPasswordValid(true);
    }

    return isValid;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
   
    return emailRegex.test(email.trim());
   
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    // Implement your validation logic here
    // Assuming any non-empty string starting with '+' is valid
    if (phoneNumber.trim() !== '' && phoneNumber.trim().startsWith('+')) {
      const digitsOnly = phoneNumber.trim().slice(1); // Remove '+' and keep only digits
      return /^\d+$/.test(digitsOnly); // Check if all characters are digits
    }
    return false;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <View>
      
      {/* name */}
      <View style={[styles.container, !nameValid && styles.invalidInput]}>
        <TextInput
          value={name}
          onChangeText={(value) => handleInputChange(setName, value, setNameValid)}
          placeholder="First Name"
          style={styles.input}
        />
      </View>

      {/* Last name */}
      <View style={[styles.container, !lastNameValid && styles.invalidInput]}>
        <TextInput
          value={lastName}
          onChangeText={(value) => handleInputChange(setLastName, value, setLastNameValid)}
          placeholder="Last Name"
          style={styles.input}
        />
      </View>

      {/* Email */}
      <View style={[styles.container, !emailValid && styles.invalidInput]}>
        <TextInput
          value={email}
          onChangeText={(value) => handleInputChange(setEmail, value, setEmailValid)}
          placeholder='Email Address'
        />
      </View>
      {/* add Email */}

      <TouchableOpacity style={styles.touchableEmail}>
        <Text style={styles.addEmail}>+ Add an Email address</Text>
      </TouchableOpacity>

      {/* password */}
      <View style={[styles.container, !passwordValid && styles.invalidInput]}>
        <TextInput
          value={password}
          onChangeText={(value) => handleInputChange(setPassword, value, setPasswordValid)}
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.input} />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Iconicons
            name={showPassword ? 'eye' : 'eye-slash'}
            size={24}
            color="gray" />
        </TouchableOpacity>
      </View>

      {/* Confirm password */}
      <View style={[styles.container, !confirmPasswordValid && styles.invalidInput]}>
        <TextInput
          value={confirmPassword}
          onChangeText={(value) => handleInputChange(setConfirmPassword, value, setConfirmPasswordValid)}
          placeholder='Confirmed Password'
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      {/* Phone Number */}
      <View style={[styles.container, !phoneNumberValid && styles.invalidInput]}>
        <TextInput
          value={phoneNumber}
          onChangeText={(value) => handleInputChange(setPhoneNumber, value, setPhoneNumberValid)}
          placeholder='Phone Number'
        />
      </View>
       {/* add Phone */}

       <TouchableOpacity style={styles.touchablePhone}>
        <Text style={styles.addPhone}>+ Add an Email address</Text>
      </TouchableOpacity>

      {/*  Register*/}
      <TouchableOpacity style={styles.register} onPress={handleSubmit} disabled={loading}>
        <Text>Register</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footerStyle}>
        <Text style={styles.footerTextStyle}>Already a member ? </Text>
        <TouchableOpacity >
          <Text style={styles.footerLoginStyle}>Login</Text>
        </TouchableOpacity>
      </View>
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
    elevation: 5,
  },
  input: {
    justifyContent: 'flex-start'
  },
  eyeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  register: {
    backgroundColor: '#00B8A9',
    height: 55,
    width: 320,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 5,
  },
  footerStyle: {
    flexDirection: 'row',
    marginBottom: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
  footerTextStyle: {
    color:'#556386',
  },
  footerLoginStyle: {
    color:'#00B8A9',
  },
  invalidInput: {
    borderColor: 'red', // Change border color to red for invalid inputs
    borderWidth: 1, // Add border width for invalid inputs
  },
  touchableEmail:{
    marginTop:10,
    marginBottom:20,
  },
  addEmail:{
    color:'#1C2439',
  },
  touchablePhone:{
    marginTop:10,
    marginBottom:20,
  },
  addPhone:{
    color:'#1C2439',
  },
});

export default Auth;
