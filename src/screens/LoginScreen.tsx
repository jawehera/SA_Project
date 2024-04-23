import React from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar,ScrollView} from 'react-native';
import { COLORS, SPACING } from '../theme/theme';
import { TouchableOpacity } from 'react-native';
import Separator from '../components/separator';
import Logo from '../assets/svg/Google.svg';
import Logo1 from '../assets/svg/Facebook.svg';
// import PasswordComponent from '../components/passwordComponent'
import HeaderBar from '../components/HeaderBar';
import 'react-native-url-polyfill/auto'


import AuthComponent from '../components/AuthComponentLogin';

const App = ({navigation}:any  ) => {

  const BackHandler = () => {
    navigation.pop();
  };
  const navigateToHome = () => {
    navigation.navigate('Home');
};
  return (
    <View style={styles.container}>
     
      <StatusBar
      translucent backgroundColor="transparent"
      barStyle={'dark-content'}
      />
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{gap:20,}}
      >

      <HeaderBar title="           Log in"  BackHandler={BackHandler}/>
      
     
      <View  style={styles.imputFilds}>
        <AuthComponent navigate={navigateToHome}/>
      </View>
      

     
      {/* login footer */}
      <View style={{flexDirection:'row',marginBottom:30,alignSelf:'center',marginTop:30,}}>
            <Text style={{color:'#556386'}}>Don’t have an account ? </Text>
            <Text style={{color:'#00B8A9'}}> Sign up</Text>
      </View> 
      {/* separator */}
      <View style={{marginTop:40,marginBottom:40,}}>
        <Separator />
      </View>


     {/* sign in with google */}
         <TouchableOpacity  style={styles.signinWithGoogleTouchable}>
            <Logo width={20} height={20} />
            <Text style={{color:'#000000',fontSize:15,}}>Sign in with Google</Text>
        </TouchableOpacity> 


      {/* sign in with facebook */}
        <TouchableOpacity  style={[styles.textContainer,{backgroundColor:'#FFF',borderRadius:10,borderColor:'#999999',borderWidth:0.5,flexDirection:'row',
    alignItems:'center',justifyContent:'space-around',marginBottom:200,}]}>
            <Logo1 width={24} height={24} />
            <Text style={{color:'#000000',fontSize:15,}}>Sign in with Facebook</Text>
        </TouchableOpacity> 



    
        </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  imputFilds:{
    justifyContent:'space-evenly',
  },
  textStyle:{
    paddingLeft:15,

  },
  textContainer:{
    backgroundColor:'#D9D9D9',
    width:320,
    height:55,
    borderRadius:10,
    marginTop:20,

  },
 
  signinWithGoogleTouchable:{
   
    width:320,
    height:55,
    marginTop:20,
    backgroundColor:'#FFF',
    borderRadius:10,
    borderColor:'#999999',
    borderWidth:0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
   
  },
  
});

export default App;
