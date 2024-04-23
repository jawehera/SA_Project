import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { StatusBar, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import SignInScreen from '../screens/SignInScreen';
import LoginScreen from '../screens/LoginScreen';
import FavAgenciesScreen from '../screens/FavAgenciesScreen';
// import BottomTabNavigation from './BottomTabNavigation';
// import AppNavigation from './AppNavigation';
import DrawerNavigation from './DrawerNavigation';
import DetailsCategoryScreen from '../screens/DetailsCategoryScreen';
import BuyNowProductScreen from '../screens/BuyNowProductScreen';
import ProductCompanyScreen from '../screens/ProductCompanyScreen';




const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
   <NavigationContainer>
    
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name='AuthScreen' component={AuthScreen}/>
        <Stack.Screen  name='AuthSign' component={SignInScreen}/>
        <Stack.Screen name='AuthLogin' component={LoginScreen}/>
        <Stack.Screen name='favAgencies' component={FavAgenciesScreen}/>
        <Stack.Screen name='Home'  component={DrawerNavigation}/>
        <Stack.Screen name='DetailsCategoryScreen'  component={DetailsCategoryScreen}/>
        <Stack.Screen name='BuyNowProduct'  component={BuyNowProductScreen}/>
        <Stack.Screen name='ProductCampanyScreen'  component={ProductCompanyScreen}/>
      
        
        
        

    </Stack.Navigator>

   </NavigationContainer>
  );
};



export default AuthNavigation;

