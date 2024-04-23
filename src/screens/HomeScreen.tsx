import { Button, FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomIcon from 'react-native-vector-icons/EvilIcons';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import Logo from '../assets/svg/nav.svg';
import CustomIcon1 from 'react-native-vector-icons/AntDesign';
import { useStore } from '../store/store';
import FavAgenciesHomeComponent from '../components/FavAgenciesHomeComponent';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { withDecay } from 'react-native-reanimated';
import CategoryComponent from '../components/CategoryComponent';







const Home = ({navigation}:any) => {
  const [searchText, setSearchText] = useState('');
  const CompaniesSelected = useStore((state: any) => state.companiesSelected);
  const companiesNotSelected = useStore((state:any) => state.companiesNotSelected);
  const updateCompaniesNotSelected = useStore((state:any) => state.updateCompaniesNotSelected);
  const Category=useStore((state:any)=>state.Category);


  const numColumns = 3;




  // Call updateCompaniesNotSelected whenever companiesSelected changes
  useEffect(() => {
    updateCompaniesNotSelected();
    console.log("updateeeeeeeeee");
  }, [CompaniesSelected, updateCompaniesNotSelected]);


  const tabBarHeight = useBottomTabBarHeight();



  const resetSearchText=()=>{
    setSearchText('');
  };


  
    
  return (


  
  <View style={{ flex: 1, }}>





    
    <LinearGradient colors={['#469FA6','#07D9AD']} style={{height:156,width:'100%',
    borderBottomRightRadius:20,borderBottomLeftRadius:20,}}> 
  
            
                <StatusBar backgroundColor="transparent" translucent />


                <View style={{flexDirection:'row',alignItems:'center' , marginTop:76,
                    marginEnd:10,marginStart:20,}}>
                    <TouchableOpacity style={{margin:10}} onPress={() => navigation.openDrawer()}>
                        <Logo width={27} height={27} />
                    </TouchableOpacity>
                   
                <View style={styles.InputContainerComponent}>

                          
                    <TouchableOpacity
                      onPress={() => {
                      
                      }}>
                      <CustomIcon
                        style={styles.InputIcon}
                        name="search"
                        size={22}
                        color={
                          searchText.length > 0
                            ? '#2BB7A9'
                            : COLORS.primaryLightGreyHex
                        }
                      />
                    </TouchableOpacity>



                    <TextInput
                      placeholder="Item or company name"
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
                    

                    
              </LinearGradient> 
   
     

                          

            

              <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{marginBottom: tabBarHeight}}> 

                              {/* Companies Scroller  */}
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginStart:10,}}>
                      <Text style={{color:'#6C7C9E',fontSize:16,fontFamily:'bold',fontWeight:'800'}}>YOUR TOP COMPANIES</Text>
                      
                      <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                            <Text>See All</Text>
                            <CustomIcon1
                                    style={styles.InputIcon}
                                    name="right"
                                    size={11}
                                    color={'#7E8CAA'}
                                  />

                      </TouchableOpacity>
                        
                    
                    </View>



                    <FlatList

                        horizontal
                        data={CompaniesSelected}
                        contentContainerStyle={styles.FlatListContainer}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item,index }) => {
                            return (
                                <TouchableOpacity>
                                    <FavAgenciesHomeComponent id={index} image_link={item} handle={true} navigation={()=>navigation.push('ProductCampanyScreen',{id:item.id,image_link:item.image_link})} />
                                </TouchableOpacity>
                            );
                        }}
                    />


              
                {/* Discover other companies   */}


               

                <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginStart:10,}}>
                  <Text style={{color:'#6C7C9E',fontSize:16,fontFamily:'bold',fontWeight:'800'}}>DISCOVER OTHER COMPANIES</Text>
                  <TouchableOpacity  style={{flexDirection:'row', alignItems:'center'}}>
                      <Text>See All</Text>
                      <CustomIcon1
                          style={styles.InputIcon}
                          name="right"
                          size={11}
                          color={'#7E8CAA'}
                      />
                  </TouchableOpacity>
                </View>

                <FlatList

                    horizontal
                    data={companiesNotSelected}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.FlatListContainer}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity>
                                <FavAgenciesHomeComponent id={item.id} image_link={item.image_link}  handle={false}  navigation={()=>navigation.push('ProductCampanyScreen',{id:item.id,image_link:item.image_link})}/>
                            </TouchableOpacity>
                        );
                    }}
                    />




                    {/* CHOOSE A CATEGORY */}



                  {/* <ScrollView> */}
                    <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginStart:10,marginBottom:40,}}>
                      <Text  style={{color:'#6C7C9E',fontSize:16,fontFamily:'bold',fontWeight:'800'}}>CHOOSE A CATEGORY</Text>
                      <TouchableOpacity  style={{flexDirection:'row', alignItems:'center'}}>
                          <Text>See All</Text>
                          <CustomIcon1
                              style={styles.InputIcon}
                              name="right"
                              size={11}
                              color={'#7E8CAA'}
                          />
                      </TouchableOpacity>
                    </View>




                    <View  style={styles.container2}>
                          <FlatList 
                           scrollEnabled={false}
                            data={Category} 
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item})=> 
                            // <TouchableOpacity style={{height:20,width:20}}>
                            //        <Image  source={item.image_link}/>
                            // </TouchableOpacity>
                            // <CategoryComponent id={item.id} image_link={item.image_link} />
                            <TouchableOpacity key={item.id.toString()}  style={styles.categoryItemContainer} onPress={()=>navigation.push('DetailsCategoryScreen',{id:item.id,image_link:item.image_link})}>
                                    <ImageBackground source={item.image_link} style={styles.categoryItemImage}>
                                      
                                    </ImageBackground>
                             </TouchableOpacity>
                                                    

                            }
                            numColumns={numColumns}
                          
                            />

                             

          
                    </View>
                    {/* </ScrollView> */}




                



             





              





              
    
                    </ScrollView>
  
  </View>
  
  )

 
}







const styles=StyleSheet.create({
  InputContainerComponent:{
   
    width:260,
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
    // flex: 1,
    height: SPACING.space_20 * 3,
    // fontFamily: FONTFAMILY.poppins_medium,
    // fontSize: FONTSIZE.size_14,
    color: '#000',

  },
  FlatListContainer: {
    
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_10,
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:6,
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

export default Home;