import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { TouchableOpacity } from 'react-native';
import Logo from '../assets/svg/camion.svg';

import { useNavigation } from '@react-navigation/native';


const VerticalLinearGradient = ({navigation}:any) => {
  // const navigation = useNavigation();

  const onSignInPress=()=>{
    navigation.push('AuthSign');

  };
  const onLoginPress=()=>{
    navigation.push('AuthLogin');

  };
  return (
    <LinearGradient colors={['#00B8A9','#1E9A9D','#48708B','#516788','#556386']} style={styles.container}>
     {/* Your content goes here */}
       <View style={styles.imgContainer}>
       <Logo width={200} height={100} />
        <Text style={styles.subTitle}>SA Project</Text>
      </View>
      <Text style={{color:COLORS.primaryWhiteHex,fontSize:SPACING.space_20}}>Welcome to SA Project</Text>
      <View  style={styles.buttonContainer}>
      <TouchableOpacity style={styles.signContainer}   onPress={onSignInPress}>
        <Text  style={styles.textContainer }>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.signContainer}  onPress={onLoginPress}>
        <Text style={styles.textContainer}>LOGIN </Text>
      </TouchableOpacity>
      </View>
     

      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer : {
    flex:2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'

   

  },
  subTitle:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:SPACING.space_18,
    color:COLORS.primaryWhiteHex,
  },
  buttonContainer:{
    flex:1,
    justifyContent:'space-around',
    marginBottom:SPACING.space_20,
  },
  

  signContainer:{
    height:SPACING.space_36*1.5,
    width:SPACING.space_36*7,
    borderRadius:SPACING.space_36,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.primaryWhiteHex,

  },
  textContainer:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_16,
    color:COLORS.primaryDarkGreyHex

  },
});

export default VerticalLinearGradient;
