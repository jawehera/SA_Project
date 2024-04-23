import { createDrawerNavigator } from '@react-navigation/drawer';
// import {  NavigationContainer } from '@react-navigation/native';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { COLORS } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Foundation';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabNavigation from './BottomTabNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderScreen from '../screens/OrderScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReturnScreen from '../screens/ReturnScreen';
import PaymentHistoryScreen from '../screens/PaymentHistoryScreen';
import ReclamationScreen from '../screens/ReclamationScreen';
import CartScreen from '../screens/CartScreen';
import whishlistScreen from '../screens/whishlistScreen';
import nav from '../assets/svg/nav.svg';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Logo from '../assets/svg/nav.svg';
import { Icon } from 'react-native-paper';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    // <NavigationContainer>
       <Drawer.Navigator
      
       drawerContent={(props) => <CustomDrawerContent {...props} />}
       screenOptions={{
        drawerInactiveTintColor:'#FFF',
        drawerActiveTintColor:'#000',
      
        
       
       
        
      }}
       >
         <Drawer.Screen 
          name="Home1"
          options={{
          headerShadowVisible: false,
          headerShown:false,
          drawerIcon: () => null,
          drawerLabel: () => null,  
          drawerItemStyle:{display:'none'}       
         }} 
         

        component={BottomTabNavigation} />


        <Drawer.Screen 
          name="Profile" 
          options={{
         
          
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialCommunityIcons name="account" size={24} color={COLORS.secondaryBlackRGBA} />
           
          ),
          
          
          headerShown:false,
          
          }} 
        component={ProfileScreen} />


        <Drawer.Screen 
          name="Order" 
          options={{
         
          
          headerShadowVisible: false,
          drawerIcon: () => (
           <MaterialIcons name="event" size={24} color={COLORS.secondaryBlackRGBA} />
           
          ),
          headerShown:false,
          
        }} 
        component={OrderScreen} />



         <Drawer.Screen 
          name="Returns" 
          options={{
         
          
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="assignment-return" size={24} color={COLORS.secondaryBlackRGBA} />
          ),
          headerShown:false,
          
        }} 
        component={ReturnScreen} />
        


        <Drawer.Screen 
          name="Payment History" 
          options={{
         
          
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="payment" size={24} color={COLORS.secondaryBlackRGBA} />
          ),
          headerShown:false,
          
        }} 
        component={PaymentHistoryScreen} />
        
        <Drawer.Screen 
          name="Reclamation" 
          options={{
         
          
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="event" size={24} color={COLORS.secondaryBlackRGBA} />
          ),
          headerShown:false,
          
        }} 
        component={ReclamationScreen} />
        


        <Drawer.Screen 
          name="Cart" 
          options={{
         
          
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="event" size={24} color={COLORS.secondaryBlackRGBA} />
          ),
          headerShown:false,
          
        }} 
        component={CartScreen} />

        <Drawer.Screen 
          name="Whishlist" 
          options={{
         
          
          headerShadowVisible: false,
          drawerIcon: () => (
            <MaterialIcons name="event" size={24} color={COLORS.secondaryBlackRGBA} />
          ),
          headerShown:false,
          
        }} 
        component={whishlistScreen} />

        
        
      
    </Drawer.Navigator>

    // </NavigationContainer>
   
  );
}

export default MyDrawer;