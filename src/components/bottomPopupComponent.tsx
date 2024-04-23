import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const BottomPopupComponent = ({navigation}:any) => {
    const [address, setAddress] = useState('');

    
    const handleAddAddress = () => {
       
        console.log('Address added:', address);

      };

   

      
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select where to deliver on the map or active
       the location on your phone</Text>
       
       <Text style={styles.locationStyle}>Your Location</Text>
       <Text style={styles.address}>{address}</Text>
      <Pressable style={{alignItems:'flex-start',alignSelf:'flex-start',marginStart:20,}} onPress={handleAddAddress}>
        <Text style={styles.addButton}>+ Add an address</Text>
      </Pressable>
       
       
      <TouchableOpacity style={styles.opacityStyle}  onPress={navigation}>
        <Text style={{color:'#677294',fontSize:16,}}>Save adresses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#00B8A9',
    borderRadius:16,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign:'justify',
    color:'#FFFFFF',
  },
  locationStyle:{
    marginTop:35,
    alignSelf:'flex-start',
    marginStart:20,
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,

  },
  address: {
    color: 'white',
    fontSize: 16,
    marginVertical: 8,
    alignSelf:'flex-start',
    marginStart:20,
    textDecorationLine: 'underline',
    textDecorationColor:'#D9D9D9',
  },
  addButton: {
    // marginStart:20,
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
    // alignSelf:'flex-start',
    
  },
  opacityStyle:{
    backgroundColor:'#FFFFFF',
    width:227,
    height:47,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:34,
    marginTop:20,
  },
});

export default  BottomPopupComponent ;
