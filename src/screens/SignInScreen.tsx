import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, ScrollView, StatusBar } from 'react-native';
import { COLORS } from '../theme/theme';
import PasswordComponent2 from '../components/AuthComponent';
import HeaderBar from '../components/HeaderBar';
import AddressPopupComponent from '../components/AddressPopupComponent';
import AuthComponent from '../components/AuthComponent';
import 'react-native-url-polyfill/auto'



const App = ({navigation}:any) => {


  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  
    
    const BackHandler = () => {
      navigation.pop();
    };


    const navigateToFavAgencies = () => {
      navigation.push('favAgencies');
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
              
             <HeaderBar title="       Sign up"  BackHandler={BackHandler}/>
             <View>
                  <AuthComponent toggleModal={toggleModal} />
             </View>
              <AddressPopupComponent visible={modalVisible} onClose={toggleModal} navigation={navigateToFavAgencies} />
           </ScrollView>

                 
            
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer:{
    backgroundColor:'#D9D9D9',
    width:300,
    height:38,
    borderRadius:10,
    marginTop:15,
    elevation:5,

  },
  textStyle:{
    paddingLeft:15,

  },
  text: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop:30,
    alignSelf:'flex-start',
    marginLeft:30,
  },
 
});

export default App;
