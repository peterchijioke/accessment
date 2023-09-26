import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home, {homeScreenID} from '../screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Account, {accountScreenID} from '../screens/Account';
import Cart, {cartScreenID} from '../screens/Cart';
import {menuScreenID} from '../screens/Menu';
import Menu from '../screens/Menu';
import DotGridIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileImage from '../component/common/ProfileImage';
const Tab = createBottomTabNavigator();
export const tabName = 'Tab';
export default function Tabs() {
  return (
    <View style={{flexGrow: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitleAlign: 'center',
          tabBarIcon: ({focused, color, size}) => {
            if (route.name == 'Account') {
              return (
                <ProfileImage source={require('../assets/images/user.png')} />
              );
            }
            if (route.name == 'Menu') {
              return (
                <DotGridIcon
                  name={'dots-grid'}
                  size={size}
                  color={focused ? color : '#000000'}
                />
              );
            }
            if (route.name == 'Home') {
              return (
                <AntDesign
                  name={'home'}
                  size={size}
                  color={focused ? color : '#000000'}
                />
              );
            }
            if (route.name == 'Cart') {
              return (
                <CartIcon
                  name={'shopping-outline'}
                  size={size}
                  color={focused ? color : '#000000'}
                />
              );
            }
          },
          tabBarActiveTintColor: '#DB3C25',
          tabBarInactiveTintColor: '#000000',
        })}>
        <Tab.Screen name={homeScreenID} component={Home} />
        <Tab.Screen name={menuScreenID} component={Menu} />
        <Tab.Screen
          name={cartScreenID}
          options={{
            headerShown: false,
          }}
          component={Cart}
        />
        <Tab.Screen name={accountScreenID} component={Account} />
      </Tab.Navigator>
    </View>
  );
}
