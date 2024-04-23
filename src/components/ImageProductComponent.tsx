import React from 'react';
import { View, Text, StyleSheet, ImageProps, TouchableOpacity, Image } from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import CustomIcon from 'react-native-vector-icons/AntDesign'


interface ProductProps{
    key:number;
    id:String;
    image_product:ImageProps;
    navigation:any;
}

const App :React.FC<ProductProps>= ({key,id,image_product,navigation}) => {
  return (
  //  I suppress elevation here it doesn't work from just two side (left and bottom for examples )
  //
   
     <View style={{backgroundColor:'white',width:140,height:170,borderRadius:8,elevation:4,margin:4,}}>
      <TouchableOpacity style={{alignSelf:'flex-end',marginTop:8,marginEnd:8,borderRadius:25,
    width:30,height:30,alignItems:'center',justifyContent:'center'}}>
      <CustomIcon
          style={{alignSelf:'center'}}
          name="hearto"
          size={12}
          color={'red'}
                          />
      </TouchableOpacity>

      <TouchableOpacity  key={key} style={{width:100,height:100,alignItems:'center',justifyContent:'center',alignSelf:'center'}}
      onPress={navigation}
      >
         <Image source={image_product} style={{width:80,height:80,resizeMode:'contain'}}/>
         <Text style={{color:'#6C7C9E',fontSize:16,fontFamily:'Source Sans Pro',fontWeight:'bold',
        marginTop:10,}}>{id}</Text>
            
      </TouchableOpacity>
     </View>
      
   
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
