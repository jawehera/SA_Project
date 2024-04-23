import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import Camera from '../assets/svg/Camera.svg';
import ImagePicker, { launchCamera } from 'react-native-image-picker';




const App = ({navigation}:any) => {
  const [pickedImage, setPickedImage] = useState('https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=peISksSE8ac5yGejSxtcr9ewTL4xyUvHZMYOUesL~Tg26XMKe6jlOXm-y3e6RfmC0wOMKLCj-euUIJ21Y6JevuFh9IaKCajBwApUW6cwKHb~EhFJXg3~RE0ckogj-DXcQhEGywcXbKpE1DkAhac7ilV76NC60bO01t8PLsYTf904mNY5-i-XdMTMkxVmoszDm-1-rQ1IF0bhD4csuRE9PeBLYaVF468O1WeGSYU8nReg1PeQTNakOJBJolNKlvQLtueqMr~0EBqfDEKc3Otl7PPtRNOeF6l2IyXODN23~xoo1nO7xZYi7QKlXdUNu~0u8SU2hxhj58WOESadZV3A~w__');


  const openCamera=async()=>{

  };
   
 
  const BackHandler=()=>{
    // navigation.toggleDrawer();          navigationnnnnnnnnnnnnnnn un composant de drawer 
  };
  return (
    <View style={{marginTop:30,}}>
      <StatusBar barStyle={'dark-content'}/>

      <Header title='PROFILE' BackHandler={BackHandler} size={20} />
      <View style={styles.imageContainer}>
        <Image source={{uri:pickedImage}} 
        style={{
          resizeMode:'cover',
          height: '100%', // Ensure the image takes up the entire height of TouchableOpacity
          width: '100%', // Ensure the image takes up the entire width of TouchableOpacity
        }}/>
      </View>
      <TouchableOpacity style={{backgroundColor:'#5F6D8D', width:36,height:36,borderRadius:50,alignItems:'center',justifyContent:'center'}}
      onPress={openCamera}
      >
      <Camera width={18} height={15} color={'black'} />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer:{
    borderRadius: 100,
    width: 128,
    height: 128,
    borderWidth: 2,
    borderColor: '#5F6D8D',
    alignSelf: 'center',
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Ensure the image doesn't overflow the bounds of TouchableOpacity
  },
});

export default App;
