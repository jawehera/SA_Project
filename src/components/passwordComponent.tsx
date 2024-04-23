import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Iconicons from 'react-native-vector-icons/FontAwesome';

const PasswordField = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={!showPassword} 
        style={styles.input}
        
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
        <Iconicons
          name={showPassword ?   'eye':'eye-slash'}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    backgroundColor:'#D9D9D9',
    width:320,
    height:55,
    borderRadius:10,
    marginTop:20,
    alignItems:'flex-start',
    paddingStart:15,
    
  },
  input: {
   justifyContent:'flex-start'
    
   
  },
  eyeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default PasswordField;

