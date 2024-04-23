import React, { useState } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
;
import HeaderFavAgencies from '../components/HeaderFavAgencies';
import imageCompany from '../Data';
import FavAgenciesImageComponent from '../components/FavAgenciesImageComponent';
import GridView from 'react-native-grid-component';
import { useStore } from '../store/store';




const FavAgenciesPopup = ({navigation}:any) => {

    const Data =useStore((state:any)=>state.company);

    const BackHandler = () => {
        navigation.pop();
      };
      

    const numColumns = 3;
    




// choooooooooose companyyyyyyyyyyyyyyyyyy favorite 
  const CompaniesSelected = useStore((state: any) => state.companiesSelected);
  const manipulateCompanySelected =useStore((state:any)=>state.manipuleCompaniesSelected);
  // he////////////////header red

  const [headerColor,setHeaderColor]=useState('black')

  
  

  const navigatetoHome = () => {
        if (CompaniesSelected.length < 3) {
        
            console.log(CompaniesSelected);
            setHeaderColor('red');
            setTimeout(() => {
              setHeaderColor('black'); // Reset color to black after 3 seconds
            }, 300);
            return;
          
        }        
        navigation.navigate('Home');
  };


  const ToggleSelection=(id:number)=>{
    manipulateCompanySelected(id);
    console.log('selected')
  }

  
  
    
  return (
    <View style={styles.container}>
      
      <HeaderFavAgencies title="The companies you are seeking services from"  BackHandler={BackHandler} headerColor={headerColor}/>
      <View  style={styles.container2}>
          <FlatList 
            data={Data} 
            renderItem={({item})=> <FavAgenciesImageComponent id={item.id} image_link={item.image_link} 
            onToggleSelection={ToggleSelection}/>}
            numColumns={numColumns}
          
            />

          
      </View>
      <TouchableOpacity style={styles.opacityStyle} onPress={navigatetoHome} >
        <Text style={{color:'#FFF',fontSize:16,}}>Submit</Text>
      </TouchableOpacity>
        

      {/* <ScrollView>
          <View>

            {Data.map((data,index)=>(
                
                  
                    <FavAgenciesImageComponent index={index} image_link={data.image_link}/>
                    
                  
                )

            )}
              
          </View>

          

      </ScrollView>
      */}
      

     
      
      
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
  image:{
    width:50,
    height:50,

  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:6,
  },

  opacityStyle:{
    backgroundColor:'#00B8A9',
    width:227,
    height:47,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:34,
    marginBottom:20,
  },
});

export default FavAgenciesPopup;
