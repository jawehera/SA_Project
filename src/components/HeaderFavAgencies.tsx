import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import Icon from 'react-native-vector-icons/AntDesign';


interface HeaderBarProps {
  title?: string;
  BackHandler?: any;
  headerColor:string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title, BackHandler,headerColor}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => {
                BackHandler();
              }}  
              style={{flex:0.42,}}>
      <Icon
        name="arrowleft"
        color={COLORS.primaryBlueHex}
        size={22}
        
      />
      </TouchableOpacity>
        <View style={styles.HeaderText}>
            <Text style={{ fontFamily: FONTFAMILY.poppins_semibold,fontSize: 16,color: '#5F6D8D',alignSelf:'center'}}>
              {title}</Text>
            <Text style={{fontSize:10,alignSelf:'center',color:headerColor,}}>Choose at least 3 companies *</Text>

        </View>
        
      
        <TouchableOpacity style={{flex:0.42,backgroundColor:'#00B8A9',height:30,width:30,borderRadius:50,justifyContent: 'center',
          alignItems: 'center',shadowColor: '#000',shadowOffset: { width: 0,height: 2,}, shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5}}>
         
              <Icon
              name="close"
              color={COLORS.primaryWhiteHex}
              size={22}
             
              
            />
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
    paddingHorizontal:15,
    

  },
  HeaderText: {
    flex:3,
   
  },
});

export default HeaderBar;
