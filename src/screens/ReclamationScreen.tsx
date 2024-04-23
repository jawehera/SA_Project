import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import Icon from 'react-native-vector-icons/AntDesign';
import Empty from '../assets/svg/empty.svg';
import ReportSomethingComponent from '../components/ReportSomethingComponent';

const App = (navigation:any) => {
  const [isTrackRequestSelected ,setIsTrackRequestSelected]=useState(false);
  const [isAppliedReturnsSelected ,setIsAppliedReturnsSelected]=useState(false);
  
 
  
  


  
 
  const BackHandler = () => {
    navigation.goback();
  };
  return (
    <View style={styles.container}>
       <HeaderBar title="RECLAMATION"  BackHandler={BackHandler}/>
       <ScrollView style={{marginTop:100,marginStart:20,}}>
       
          {!isTrackRequestSelected?
          
          <Pressable style={{flexDirection:'row',alignItems:'center',gap:110,marginBottom:20,}}
              onPress={()=>{setIsTrackRequestSelected(true)}} >
                <Text style={{color:'#5F6D8D',fontSize:16,}}>MY COMPLAINTS</Text>
                <Icon name='right'/>
          </Pressable>
            :
            <View>
                  <View style={{gap:5,marginBottom:20,}} >
                      <Pressable style={{flexDirection:'row',alignItems:'center',gap:140,}}
                      onPress={()=>{setIsTrackRequestSelected(false)}} >
                        <Text style={{color:'#5F6D8D',fontSize:16,}}>REPORT SOMETHING</Text>
                        <Icon name='down'/>
                      </Pressable>
                      <View style={styles.line}/>
                      <Text style={{fontSize:12,color:'#626262',marginTop:18,marginLeft:12,}}>This champ is empty ...</Text>
                      <Empty style={{margin:20,}}/>
                      
                  </View> 

                


                  
            </View>


          }



          {!isAppliedReturnsSelected?
          
          <Pressable style={{flexDirection:'row',alignItems:'center',gap:84,marginBottom:20,}}
          onPress={()=>{setIsAppliedReturnsSelected(true)}}>
          <Text style={{color:'#5F6D8D',fontSize:16,}}>REPORT SOMETHING</Text>
          <Icon name='right'/>
         </Pressable>
            :
            <View style={{gap:5,marginBottom:20,}} >
                  <Pressable style={{flexDirection:'row',alignItems:'center',gap:145,}}
                  onPress={()=>{setIsAppliedReturnsSelected(false)}}>
                  <Text style={{color:'#5F6D8D',fontSize:16,}}>REPORT SOMETHING</Text>
                  <Icon name='down'/>
                </Pressable>
                <View style={styles.line}/>
                
                <ReportSomethingComponent/>
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
    marginHorizontal:5,
    marginEnd:20,
    
   
  },
});

export default App;

