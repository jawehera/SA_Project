import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import WhishlistScreen from '../screens/whishlistScreen';

import Icon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
       
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
         
         tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="home"
            size={25}
            color={focused ? COLORS.primaryBlueHex : COLORS.primaryGreyHex}/>
       
         ),
         }}
        >
        </Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FeatherIcon
            name="shopping-bag"
            size={25}
            color={focused ? COLORS.primaryBlueHex : COLORS.primaryGreyHex}/>
      
          ),
        }}
        ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
            name="account-outline"
            size={35}
            color={focused ? COLORS.primaryBlueHex : COLORS.primaryGreyHex}/>
       
          ),
        }}
        ></Tab.Screen>
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
            name="event"
            size={30}
            color={focused ? COLORS.primaryBlueHex : COLORS.primaryGreyHex}/>
       
          ),
        }}
        ></Tab.Screen>
        <Tab.Screen
        name="Whishlist"
        component={WhishlistScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FeatherIcon
            name="heart"
            size={30}
            color={focused ? COLORS.primaryBlueHex : COLORS.primaryGreyHex}/>
      
          ),
         
        }}
        ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryWhiteHex,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    borderTopLeftRadius:SPACING.space_28,
    borderTopRightRadius:SPACING.space_28,
  },
 
});

export default TabNavigator;
