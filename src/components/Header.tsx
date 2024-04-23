import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Edit from '../assets/svg/Edit.svg';


interface HeaderBarProps {
  title?: string;
  BackHandler?: any;
  size:number;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title, BackHandler,size}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => {
                BackHandler();
              }}  
              style={{flex:1,}}>
      <Icon
        name="arrowleft"
        color={COLORS.primaryBlueHex}
        size={22}
        
      />
      </TouchableOpacity>
     
      <Text style={[styles.HeaderText,{fontSize:size}]}>{title} </Text>
     
      <TouchableOpacity>
        <Edit/>
      </TouchableOpacity>
       
      
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {

    marginTop:20, 
      
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginHorizontal:20,
    
    

  },
  HeaderText: {
    flex:1.5,
    fontFamily: FONTFAMILY.poppins_semibold,
   
    color: '#5F6D8D',
  },
});

export default HeaderBar;
