import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import Icon from 'react-native-vector-icons/AntDesign';
import Empty from '../assets/svg/empty.svg';

const App = (navigation:any) => {
  const [isNewOrdersSelected ,setIsNewOrdersSelected]=useState(false);
  const [isAppliedOrdersSelected ,setIsAppliedOrdersSelected]=useState(false);
  const [isDeclinedOrdersSelected ,setIsDeclinedOrdersSelected]=useState(false);
  const [isOrdersSelected ,setIsOrdersSelected]=useState(false); 
  const [isEmpty,setIsEmpty]=useState(true);
  


  
  // const HandleSelection=()=>{
  //   setIsSelected(!isSelected);
  // };
  const BackHandler = () => {
    navigation.goback();
  };
  return (
    <View style={styles.container}>
       <HeaderBar title="    ORDERS"  BackHandler={BackHandler}/>
       <ScrollView style={{marginTop:100,marginStart:20,}}>
       
          {!isNewOrdersSelected?
          
          <Pressable style={{flexDirection:'row',alignItems:'center',gap:80,marginBottom:20,}}
              onPress={()=>{setIsNewOrdersSelected(true)}} >
                <Text style={{color:'#5F6D8D',fontSize:16,}}>New Orders</Text>
                <Icon name='right'/>
          </Pressable>
            :
            <View>
                  <View style={{gap:5,marginBottom:20,}} >
                      <Pressable style={{flexDirection:'row',alignItems:'center',gap:220,}}
                      onPress={()=>{setIsNewOrdersSelected(false)}} >
                        <Text style={{color:'#5F6D8D',fontSize:16,}}>New Orders</Text>
                        <Icon name='down'/>
                      </Pressable>
                      <View style={styles.line}/>
                      <Text style={{fontSize:12,color:'#626262',marginTop:18,marginLeft:12,}}>This champ is empty ...</Text>
                      <Empty style={{margin:20,}}/>
                  </View> 

                  {/* {isEmpty?
                  <view></view>:<></>} */}


                  
            </View>


          }



          {!isAppliedOrdersSelected?
          
          <Pressable style={{flexDirection:'row',alignItems:'center',gap:60,marginBottom:20,}}
          onPress={()=>{setIsAppliedOrdersSelected(true)}}>
          <Text style={{color:'#5F6D8D',fontSize:16,}}>Applied Orders</Text>
          <Icon name='right'/>
         </Pressable>
            :
            <View style={{gap:5,marginBottom:20,}} >
                  <Pressable style={{flexDirection:'row',alignItems:'center',gap:200,}}
                  onPress={()=>{setIsAppliedOrdersSelected(false)}}>
                  <Text style={{color:'#5F6D8D',fontSize:16,}}>Applied Orders</Text>
                  <Icon name='down'/>
                </Pressable>
                <View style={styles.line}/>
                <Text style={{fontSize:12,color:'#626262',marginTop:18,marginLeft:12,}}>This champ is empty ...</Text>
                <Empty style={{margin:20,}}/>
            </View>
            

          }
           {!isDeclinedOrdersSelected?
          
          <Pressable style={{flexDirection:'row',alignItems:'center',gap:55,marginBottom:20,}}
          onPress={()=>{setIsDeclinedOrdersSelected(true)}}>
          <Text style={{color:'#5F6D8D',fontSize:16,}}>Declined Orders</Text>
          <Icon name='right'/>
         </Pressable>
            :

            <View style={{gap:5,marginBottom:20,}} >
               <Pressable style={{flexDirection:'row',alignItems:'center',gap:194,}}
                    onPress={()=>{setIsDeclinedOrdersSelected(false)}}>
                    <Text style={{color:'#5F6D8D',fontSize:16,}}>Declined Orders</Text>
                    <Icon name='down'/>
              </Pressable>

              <View style={styles.line}/>
              <Text style={{fontSize:12,color:'#626262',marginTop:18,marginLeft:12,}}>This champ is empty ...</Text>
              <Empty style={{margin:20,}}/>
            </View>
           

          }
          
           


          {!isOrdersSelected?
          
          <Pressable style={{flexDirection:'row',alignItems:'center',gap:34,marginBottom:20,}}
          onPress={()=>{setIsOrdersSelected(true)}}>
            <Text style={{color:'#5F6D8D',fontSize:16,}}>Orders on contract</Text>
            <Icon name='right'/>
          </Pressable>
            :
            <View style={{gap:5,marginBottom:20,}} >
              <Pressable style={{flexDirection:'row',alignItems:'center',gap:170,}}
              onPress={()=>{setIsOrdersSelected(false)}}>
                  <Text style={{color:'#5F6D8D',fontSize:16,}}>Orders on contract</Text>
                  <Icon name='down'/>
            </Pressable>
            <View style={styles.line}/>
              <Text style={{fontSize:12,color:'#626262',marginTop:18,marginLeft:12,}}>This champ is empty ...</Text>
              <Empty style={{margin:20,}}/>
            </View>
            
            }
          
       
       
      
      
       

       </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#5F6D8D',
    marginHorizontal: 2,
    
   
  },
});

export default App;
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello From Report Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default App;
