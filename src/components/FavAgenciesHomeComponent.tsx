import React, { useState } from 'react';
import { View, Text, StyleSheet,ImageProps, Image, TouchableOpacity } from 'react-native';
import CustomIcon from 'react-native-vector-icons/AntDesign';


interface FavAgencies{
    id:number;
    image_link:ImageProps;
    handle:boolean;
    // onToggleSelection:(id: number) => void;
    navigation:any;
}

const App:React.FC<FavAgencies> = ({id,image_link,handle,navigation}) => {
  const [isSelected, setIsSelected] = useState(false);

  // const handleToggleSelection = () => {
  //     setIsSelected(!isSelected);
    
  // };
  return (
   <View>
    <View key={id.toString()}  style={styles.container} >
      <TouchableOpacity style={{width:80,height:80,alignItems:'center',justifyContent:'center',marginTop:18,}}
      onPress={navigation}
      >
         <Image source={image_link} style={{height:80,width:80,resizeMode:'contain'}}/>
            
      </TouchableOpacity>
      
      {handle?
          <TouchableOpacity style={{backgroundColor:'#FFF',width:26,height:26,borderRadius:50,alignItems:'center',
          justifyContent:'center', alignSelf:'flex-end'}} >
              <CustomIcon
                      style={{padding:4,}}
                      name="heart"
                      size={14}
                      color={'red'}
              />
          </TouchableOpacity>
      
      :
          <TouchableOpacity style={{backgroundColor:'#FFF',width:40,height:40,borderRadius:50,alignItems:'center',
          justifyContent:'center', alignSelf:'flex-end'}} 
          
          >
              <CustomIcon
                      style={{padding:4,}}
                      name="hearto"
                      size={18}
                      color={'red'}
              />
          </TouchableOpacity>
      }
      
                
    </View>
    

        

   </View>
    
        
        



     
     
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F2F3F6',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:0.5,
    // borderColor:'#6C7C9E',
    borderRadius:10,
    // marginTop:30,
     
    width:115,
    height:106,
    padding: 10, 
    margin:10,
    elevation:8,

    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
