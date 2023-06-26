import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Wedding from './Wedding';
import Decor from './Decor';
import Gift from './Gift';

const Tab = createMaterialTopTabNavigator();

export class TopNavigation extends Component {
  render() {
    return (

      <Tab.Navigator  
      screenOptions={{
        tabBarIndicatorStyle:{
          backgroundColor:"#9682B6",
          height:49,
          borderRadius:10,
        }
      }}
    
      >
        <Tab.Screen name="Wedding" component={Wedding} />
        <Tab.Screen name="Decor" component={Decor} />
        <Tab.Screen name="Gift" component={Gift} />
      </Tab.Navigator>
    );
  }
}

export default TopNavigation;
