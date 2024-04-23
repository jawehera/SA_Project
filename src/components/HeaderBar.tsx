import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import Icon from 'react-native-vector-icons/AntDesign';


interface HeaderBarProps {
  title?: string;
  BackHandler?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title, BackHandler}) => {
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
     
      <Text style={styles.HeaderText}>{title} </Text>
      <View style={{flex:1,}}><Text></Text></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {

    marginTop:20,   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal:15,
    

  },
  HeaderText: {
    flex:1.5,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 16,
    color: '#5F6D8D',
  },
});

export default HeaderBar;
