import React, { useState } from 'react';
import { View, Text, StyleSheet,ImageProps, Image, TouchableOpacity, ImageBackground } from 'react-native';


interface FavAgencies{
    id:number;
    image_link:ImageProps;
   
}

const App:React.FC<FavAgencies> = ({id,image_link}) => {
  

  
  return (
   
    
        <TouchableOpacity key={id.toString()}  style={styles.categoryItemContainer} >
            <ImageBackground source={image_link} style={styles.categoryItemImage}>
              
            </ImageBackground>
        </TouchableOpacity>
     
     
    
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderWidth:3,
  //   borderColor:'#E5E5E5',
  //   borderRadius:30,
  //   width:65,
  //   height:70,
  //   padding: 5, 
  //   margin:10,

    
  // },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryItemContainer: {
    marginBottom:30,
    width: 106, // Adjust the width to fit three items in a row with spacing
    height:150,
    margin: '1.5%', // Add some margin for spacing between items
    // aspectRatio: 1, // Maintain aspect ratio for each item
    overflow: 'hidden', // Hide overflow to prevent image distortion
    borderRadius:8,
    // elevation:4,
    shadowRadius:2,
    
  },
  categoryItemImage: {
    width: '100%', // Make the image fill the entire TouchableOpacity component
    height: '100%', // Make the image fill the entire TouchableOpacity component
    resizeMode: 'cover', // Ensure the image covers the entire area
  },
});

export default App;
