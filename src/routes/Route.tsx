import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs, {tabName} from './Tabs';
import Product, {ProductScreenID} from '../screen/Product';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              options={{
                headerStyle: {backgroundColor: '#F9F9F9'},
              }}
              name={tabName}
              component={Tabs}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name={ProductScreenID} component={Product} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;
