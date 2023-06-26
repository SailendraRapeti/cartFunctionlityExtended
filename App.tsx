import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer,DarkTheme} from '@react-navigation/native';

import FirstStack from './components/FirstStack';
import Providerr from './context/Providerr';

const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <Providerr>
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FirstStack" component={FirstStack} />
            {/* <Stack.Screen name="ItemDetails" component={ItemDetails} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Providerr>
    );
  }
}

export default App;
