import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
//@ts-ignore
import user from '../images/user.png';

import TopNavigation from './TopNavigation';

export class Home extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.title}>
          <Text style={{color: '#2E2D2D'}}>F L O R I S T</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={style.welcome}>Welcome!</Text>
          <Image
            style={{
              height: 25,
              width: 25,
              marginTop: 25,
            }}
            source={user}
            resizeMode="contain"
          />
        </View>
        <View style={style.topNav}>
          <TopNavigation />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    alignItems: 'center',
    marginTop: 18,
    fontFamily: 'NATS',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
  },
  welcome: {
    color: 'black',
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
  },
  topNav: {
    backgroundColor: 'rgba(46, 45, 45, 0.1)',
    // height: 1000,
    flex:1,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default Home;
