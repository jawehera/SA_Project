import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import CustomIcon from 'react-native-vector-icons/EvilIcons';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import Icon from 'react-native-vector-icons/AntDesign';




const App = ({navigation, route}: any) => {
  const [searchText, setSearchText] = useState('');
  const resetSearchText=()=>{
    setSearchText('');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
                   {/* Header */}
      <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:40,}}>
        
     <TouchableOpacity onPress={() => navigation.pop()}   style={{flex:1,}}>
      <Icon
        name="arrowleft"
        color={COLORS.primaryBlueHex}
        size={22}
        
      />
      </TouchableOpacity>           
      <Image source={route.params.image_link} style={{flex:1,height:100,width:100,resizeMode:'contain'}}/>
      <View style={{flex:1}}></View>
      </View>
      <Text style={{color:'#6B7B9D',fontSize:20,fontFamily:'Source Sans Pro',
    fontWeight:'700'}}>Find the best selling products</Text>

 
                   {/* Search */}


     <View style={styles.InputContainerComponent}>

        <TouchableOpacity onPress={() => {}}>
                        <CustomIcon
                          style={styles.InputIcon}
                          name="search"
                          size={22}
                          color={'#677294'}  
                        />
                      </TouchableOpacity>



                      <TextInput
                        placeholder="Search for product"
                        value={searchText}
                        onChangeText={text => {
                          setSearchText(text);
                          
                        }}
                        // placeholderTextColor={COLORS.primaryLightGreyHex}
                        style={styles.TextInputContainer}
                      />




                      {searchText.length > 0 ? (
                        <TouchableOpacity
                          onPress={() => {
                            resetSearchText();
                          }}>
                          <CustomIcon
                            style={styles.InputIcon}
                            name="close"
                            size={FONTSIZE.size_20}
                            color={COLORS.primaryLightGreyHex}
                          />
                        </TouchableOpacity>
                      ) : (
                        <></>
                      )}
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
  InputContainerComponent:{
    marginVertical:20,
    width:318,
    height:50,
    flexDirection: 'row',
    
    borderRadius: 6,
    backgroundColor:'#FFF',
    alignItems: 'center',

  },
  InputIcon:{
    marginHorizontal: 10,

  },
  TextInputContainer:{
    height: SPACING.space_20 * 3,
    color: '#000',
    flex:1,

  },
});

export default App;
