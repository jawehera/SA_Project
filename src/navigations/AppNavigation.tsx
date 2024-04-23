import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Main'>
        <Stack.Screen
          name="Main"
          component={DrawerNavigation}
          options={{animation: 'slide_from_bottom'}}>

        </Stack.Screen>
       
       
      </Stack.Navigator>
   </NavigationContainer>
  );
};



export default App;

