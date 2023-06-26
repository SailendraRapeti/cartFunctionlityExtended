import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Catlog from './Catlog';
import ItemDetails from './ItemDetails';
const Stack = createStackNavigator();

export class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Catlog" component={Catlog} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigation;
