import {Text, View, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './Cart';
import Chat from './Chat';

import HomeIcon from '../images/Home.png';
//@ts-ignore
import CatlogIcon from '../images/catlog.png';
//@ts-ignore
import ChatIcon from '../images/chat.png';
import StackNavigation from './StackNavigation';

//@ts-ignore
import CartIcom from '../images/cart.png';

const Tab = createBottomTabNavigator();

export class FirstStack extends Component {
  render() {
    function screenOptions(
      route: RouteProp<ParamListBase, string>,
      color: string,
    ): React.ReactNode {
      throw new Error('Function not implemented.');
    }

    // function screenOptions(
    //   route: RouteProp<ParamListBase, string>,
    //   color: string,
    // ): React.ReactNode {
    //   throw new Error('Function not implemented.');
    // }

    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#CDE7BE',
          tabBarInactiveTintColor: '#2E2D2D',
          
          tabBarStyle: [
            {
              display: 'flex',
              height:70,
            },
            null,
          ],
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              // <View
              //   style={{
              //     alignItems: 'center',
              //     justifyContent: 'center',
              //     top: 5,
              //   }}>
                  
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#4B194F' : '#2E2D2D',
                  }}
                  source={HomeIcon}
                  resizeMode="contain"
                />
               
              
            ),
            tabBarActiveBackgroundColor:"#fff",
            tabBarInactiveBackgroundColor:"#fff",
            tabBarActiveTintColor:"#4B1947",
            tabBarLabelStyle:{
              fontSize:15,
              fontWeight:"400",
            }
          }}
        />
        <Tab.Screen
          name="catLog"
          component={StackNavigation}
          options={{
            tabBarIcon: ({focused}) => (
             
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#4B194F' : '#2E2D2D',
                  }}
                  source={CatlogIcon}
                  resizeMode="contain"
                />
               
              
            ),
            tabBarActiveBackgroundColor:"#fff",
            tabBarInactiveBackgroundColor:"#fff",
            tabBarActiveTintColor:"#4B1947",
            tabBarLabelStyle:{
              fontSize:15,
              fontWeight:"400",
            }
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({focused}) => (
             
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#4B194F' : '#2E2D2D',
                  }}
                  source={ChatIcon}
                  resizeMode="contain"
                />
                
            ),
            tabBarActiveBackgroundColor:"#fff",
            tabBarInactiveBackgroundColor:"#fff",
            tabBarActiveTintColor:"#4B1947",
            tabBarLabelStyle:{
              fontSize:15,
              fontWeight:"400",
            }
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => (
             
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#4B194F' : '#2E2D2D',
                  }}
                  source={CartIcom}
                  resizeMode="contain"
                />

            ),
            tabBarActiveBackgroundColor:"#fff",
            tabBarInactiveBackgroundColor:"#fff",
            tabBarActiveTintColor:"#4B1947",
            tabBarLabelStyle:{
              fontSize:15,
              fontWeight:"400",
            }
          }}
        />
      </Tab.Navigator>
    );
  }
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default FirstStack;
