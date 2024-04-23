import React, { useState } from 'react';
import { View, Text, StyleSheet,ImageProps, Image, TouchableOpacity } from 'react-native';


interface FavAgencies{
    id:number;
    image_link:ImageProps;
    onToggleSelection:(id: number) => void;
}

const App:React.FC<FavAgencies> = ({id,image_link,onToggleSelection}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelection = () => {
      setIsSelected(!isSelected);
      onToggleSelection(id);
  };
  return (
   
    
        <TouchableOpacity key={id.toString()}  style={[styles.container, { borderColor: isSelected ? '#40B8AC' : '#E5E5E5' }]} onPress={handleToggleSelection}>
            <Image source={image_link} style={{height:54,width:60,resizeMode:'contain'}}/>
        </TouchableOpacity>
     
     
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
    borderColor:'#E5E5E5',
    borderRadius:30,
    width:65,
    height:70,
    padding: 5, 
    margin:10,

    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
