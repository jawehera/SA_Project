import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CustomDropdown from './DropDownComponent';

interface Item {
    label: string;
    value: string;
  }

const App = () => {
    const data : Item[]=[
    {label:'Bad delivery Service',value:'1'},
    {label:'Bad after-sales services',value:'2'},
    {label:'Others',value:'3'}];
    const [isFocus, setIsFocus] = useState(false);


    const handleSelectItem = (item: any) => {
        // Handle selected item
        console.log('Selected item:', item);
      };


      const [text, setText] = useState('');

      const handleChangeText = (newText:string) => setText(newText);
  return (
    <View style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>

       
        <Text style={styles.text}>Thank you for filing this forum </Text>
            <View style={{marginBottom:10,}}>
                    <Text style={styles.AboutYou}>About you</Text>
                    <View style={{gap:10}}>
                    <TouchableOpacity style={styles.boxStyle} >
                        <TextInput style={styles.textbox} placeholder='Name'></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxStyle}>
                        <TextInput style={styles.textbox} placeholder='Last Name'></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxStyle}>
                        <TextInput style={styles.textbox} placeholder='Company Name'></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxStyle}>
                        <TextInput style={styles.textbox} placeholder='Phone Number'></TextInput>
                    </TouchableOpacity>
                    </View>
            </View>



            <View style={{marginBottom:10,}}>
                    <Text style={styles.AboutYou}>About Order</Text>
                    <View style={{gap:10}}>
                    <TouchableOpacity style={styles.boxStyle} >
                        <TextInput style={styles.textbox} placeholder='Order ID'></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxStyle}>
                        <TextInput style={styles.textbox} placeholder='Company name'></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxStyle}>
                        <TextInput style={styles.textbox} placeholder='Delivery date'></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.boxStyle}>
                        <TextInput style={styles.textbox} placeholder='Delivery address'></TextInput>
                    </TouchableOpacity>
                    </View>
            </View>

            <Dropdown 
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            data={data} 
            labelField="label" 
            valueField="value"
            placeholder='Type of problem'
            dropdownPosition='bottom'
            
          
            placeholderStyle={styles.placeholderStyle}
            onChange={(item: Item) => {
                // Handle onChange event
              }}/>

            
            {/* <CustomDropdown data={data} onSelectItem={handleSelectItem} /> */}
            

            

            {/* <Text style={{marginBottom:100,}}>hellooo</Text> */}



            <Pressable style={{backgroundColor:'#D9D9D9',marginBottom:100,alignSelf:'center',width:300,
          borderRadius:10,paddingStart:20,height:140 ,}} >

                  <TextInput
                    multiline={true}
                    numberOfLines={6}
                    value={text}
                    onChangeText={handleChangeText}
                    style={styles.textarea}
                    placeholder="Add a comment..."
                    
                  />
            </Pressable>


            <TouchableOpacity style={{alignSelf:'center',alignItems:'center',justifyContent:'center',
          backgroundColor:'#40B8AC',width:260,height:52, marginBottom:30,borderRadius:10,}}>
              <Text style={{color:'#FFF'}}>Submit</Text>
            </TouchableOpacity>



            <TouchableOpacity style={{alignSelf:'center',alignItems:'center',justifyContent:'center',
          backgroundColor:'#FFF',width:260,height:52, marginBottom:200,borderColor:"#40B8AC",borderWidth:0.5,
          borderRadius:10,}}>
              <Text style={{color:'#40B8AC'}}>Cancel</Text>
            </TouchableOpacity>

            
                
            
            
        </ScrollView>
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  text: {
    fontSize: 14,
    fontFamily:'Source Sans Pro',
    color:'#626262',
    textAlign:'justify',
    marginStart:10,
    marginTop:20
    
  },
  AboutYou:{
    fontSize: 16,
    fontFamily:'Source Sans Pro',
    color:'#626262',
    marginBottom:10,
    marginTop:20,
    marginStart:10,

  },
  boxStyle:{
    width:300,
    height:55,
    alignSelf:'center',
    backgroundColor:'#D9D9D9',
    alignItems:'flex-start',
    justifyContent:'center',
    borderRadius:10,
    elevation:4,

  },
  textbox:{
    paddingStart:30,
    

  },
  ScrollViewFlex: {
    flexGrow: 1,
  },

  placeholderStyle: {
    fontSize: 14,
    color:'#626262',
    marginStart:20,
    fontFamily:'Source Sans Pro'
  },
  dropdown: {
    width:300,
    height:55,
    alignSelf:'center',
    backgroundColor:'#D9D9D9',   
    borderColor: '#D9D9D9',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginBottom: 30,
    elevation:4,
    
  },

  textarea: {
    // height: 200, // Adjust height as needed
    // width:300,
    // padding:10,
    paddingEnd:20,
    // paddingTop: 10,
    // borderWidth: 1,
    // borderColor: '#D9D9D9',
    // backgroundColor:'#D9D9D9',
    // marginBottom:100,
    // alignSelf:'center'
    // // Add other styles as desired
  },

});

export default App;
