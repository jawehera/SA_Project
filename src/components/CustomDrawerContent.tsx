import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import nav from '../assets/svg/nav.svg';
import Logo from '../assets/svg/nav.svg';
import { useNavigation } from '@react-navigation/native';


const CustomDrawerContent = (props:any) => {
const navigation = useNavigation();
  return (
   <View style={{flex:1,backgroundColor:'#078376',}} >

        <DrawerContentScrollView  {...props}>
            <View style={{padding:50}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home1')}>
              <Logo width={27} height={27} />
            </TouchableOpacity>

            </View>
            <DrawerItemList {...props} />
            
            
        </DrawerContentScrollView>
        <View style={styles.line} />
        <View style={{marginBottom:10,marginTop:10,gap:5,marginStart:40}}>
            <Pressable>
                <Text style={{textDecorationLine: 'underline', color:'#FFF',}}>Help and privacy</Text>
            </Pressable>
            <Pressable>
                <Text style={{textDecorationLine: 'underline',color:'#FFF',}}>Services</Text>
            </Pressable>
            <Pressable>
                <Text style={{textDecorationLine: 'underline',color:'#FFF',}}>+00 00 00 00</Text>
            </Pressable>
        </View>
        

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
  line: {
    
    height: 0.5,
    backgroundColor: 'black',
    marginHorizontal: 40,
  },
});

export default CustomDrawerContent;
