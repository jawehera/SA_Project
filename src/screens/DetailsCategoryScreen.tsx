
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList, TextInput, BackHandler, ScrollView } from 'react-native';
import { useStore } from '../store/store';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import Logo from 'react-native-vector-icons/AntDesign';
import CustomIcon from 'react-native-vector-icons/EvilIcons';
import { useEffect, useState } from 'react';
import CustomIcon1 from 'react-native-vector-icons/AntDesign';
import ImageProductComponent from '../components/ImageProductComponent';

const getCategoriesFromData = (data: any, index: number) => {
  const item = data[index];
  if (!item || !item.categories) return [];

  const categories = Object.keys(item.categories);
  categories.unshift('All Services');

  return categories;
};

const getProductList = (category: string, index: number, data: any) => {
  const item = data[index];
  let allProducts = [];
  if (!item || !item.categories || Object.keys(item.categories).length === 0) {
    return [];
  }
  
  if (category === 'All Services') {
    for (const key in item.categories) {
      allProducts.push(...item.categories[key]);
    }
    return allProducts;
  } else {
    return item.categories[category];
  }
};

const App = ({navigation, route}: any) => {
  const Category = useStore((state:any) => state.Category);
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(route.params?.id );
  const [categories, setCategories] = useState(getCategoriesFromData(Category, route.params?.id));
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedProduct, setSortedProduct] = useState(
    getProductList('All Services', route.params?.id, Category)|| [],
  );

  useEffect(() => {
    setSortedProduct(getProductList(categoryIndex.category, selectedItem, Category));
  }, [categoryIndex, selectedItem, Category]);

  const resetSearchText=()=>{
    setSearchText('');
  };

  const handlePress = (itemId: number) => {
    setSelectedItem(itemId);    
    setCategoryIndex({index:0,category:categories[0]});
    setCategories(getCategoriesFromData(Category,itemId));
    setSortedProduct([...getProductList('All Services',itemId,Category)]);
  };

  const BackHandler=()=>{
    navigation.pop();
  };

  const HandleNavigation=()=>{
    navigation.push('BuyNowProduct');
  };

  return (
    <ScrollView style={styles.container}>

      {/* Search */}
      <View style={{flexDirection:'row', alignItems:'center', marginTop:50, marginEnd:10, marginStart:20, marginBottom:30,}}>
        <TouchableOpacity style={{marginRight:30}} onPress={BackHandler}>
          <Logo name='arrowleft' size={24} color={'#2BB7A9'} />
        </TouchableOpacity>
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity style={{marginHorizontal:10,}} onPress={() => {}}>
            <CustomIcon name='search' size={16} color={COLORS.primaryLightGreyHex} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search for Product"
            value={searchText}
            onChangeText={text => setSearchText(text)}
            style={styles.TextInputContainer}
            multiline={false}
            numberOfLines={1}
           
          />
          {searchText.length > 0 ? (
            <TouchableOpacity onPress={resetSearchText}>
              <Logo style={styles.InputIcon} name="close" size={FONTSIZE.size_20} color={COLORS.primaryLightGreyHex} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
      {/* Categoriesssss */}
     
      <FlatList
        horizontal
        
        data={Category}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.FlatListContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id.toString()}
            style={[styles.categoryItemContainer, selectedItem === item.id && styles.selectedItem]}
            onPress={() => handlePress(item.id)}>
            <ImageBackground
              source={item.image_link}
              style={[styles.categoryItemImage, { width: selectedItem === item.id ? 90 : 70, height: selectedItem === item.id ? 90 : 70, alignSelf:selectedItem === item.id ? 'center' : 'auto'}]}>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
     
      
      
      


                 {/* Category Scroller */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:10,paddingHorizontal:10,paddingBottom:20,}}>
        {categories.map((data, index) => (
          <View
            key={index.toString()}
            style={{}}>
            <TouchableOpacity
              style={[{width:109,height:37, elevation:4, alignItems:'center',justifyContent:'center',borderRadius:10,
              },categoryIndex.index == index
              ? {backgroundColor:'#2BB7A9'}
              : {backgroundColor:'white'}]}
              onPress={() => {
                setCategoryIndex({index: index, category: categories[index]});
                setSortedProduct([...getProductList(categoryIndex.category,selectedItem,Category)]);
              }}>
              <Text
                style={[
                categoryIndex.index == index
                ? {color:'white'}
                : {color:'black'}, 
                ]}>
                {data}
              </Text>
              
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>


      {/* Products  */}

     <View style={{flex:1,marginTop:5,backgroundColor:'#D4E7E5',
     borderTopStartRadius:20,borderTopEndRadius:20, paddingBottom:150,}}>
      {/* Header */}
       <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,marginStart:10,}}>
                  <Text style={{color:'#6C7C9E',fontSize:16,fontFamily:'bold',fontWeight:'800'
                ,}}>{categoryIndex.category}</Text>
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

        {/* end Header */}
        

        {sortedProduct && sortedProduct.length===0
        ?
        // Remember i just set marginTop ,chang value and view changes 
        <Text style={{alignSelf:'center',marginTop:100,}}>Empty ...</Text>
        :
        <View style={{alignItems:'center', justifyContent: 'center'}}>

            <FlatList

                data={sortedProduct}

                // contentContainerStyle={{}}
                scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item,index})=>{
                  return(
                  <View style={{marginVertical:20,marginRight: index % 2 === 0 ? 30 : 0,}}> 
                  
                    {/* <Text>{item.name}</Text> */}
                    
                    <ImageProductComponent key={index} id={item.name} image_product={item.image_product}  navigation={HandleNavigation}/>


                    <TouchableOpacity style={{width:140,height:30, justifyContent:'center',alignItems:'center',marginTop:20,
                      backgroundColor:'#2BB7A9',borderRadius:6,elevation:4,}}
                      onPress={()=>navigation.push('BuyNowProduct')}
                      >
                      <Text style={{color:"#FFF",fontSize:12,fontFamily:'Source Sans Pro',
                   }}>Buy Now</Text>
                    </TouchableOpacity>
                  
                    
                  </View>
                  );
                  
                }}
                numColumns={2}
                />

      </View>
     
        }

      
     
      

     </View>
     
     
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  categoryItemContainer:{
    borderRadius: 20, // Half of width and height to achieve circular shape
    overflow: 'hidden', // Clip child elements that overflow the container
  },
  categoryItemImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  FlatListContainer: {
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_10,
    gap:10,
    
  },
  InputContainerComponent:{
    width:260,
    height:50,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor:'#FFF',
    alignItems: 'center',
    elevation:6,
    flex: 1, // Allow parent view to expand
    overflow: 'hidden', 
    
  },
  InputIcon:{
    marginHorizontal: 10,
  },
  TextInputContainer:{
    height: SPACING.space_20 * 3,
    color: '#000',
    position:'relative',
    flex:1,
    
  },
  selectedItem: {
    width: 90,
    height: 90,
    marginBottom:20,
  },
});

export default App;
