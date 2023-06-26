import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
//@ts-ignore
import card from '../images/card.png';
import All from '../images/All.png';
import rec2 from '../images/rec2.png';
import rec3 from '../images/rec3.png';
import rec4 from '../images/rec4.png';
import rec1 from '../images/rec1.png';
import bot1 from '../images/bot1.png';
import bot2 from '../images/bot2.png';
import bot3 from '../images/bot3.png';
import bot4 from '../images/bot4.png';
import bot5 from '../images/bot5.png';
import bot6 from '../images/bot6.png';
import start from '../images/star.png';
// import { ScrollView } from 'react-native-gesture-handler';

interface Iprops {
  navigation?: any;
}
export class Wedding extends Component<Iprops> {
  render() {
    return (
      <View>
        <Image
          style={{height: 95, width: 361, marginTop: 25, marginLeft: 10}}
          source={card}
        />
        <ScrollView horizontal style={{marginTop: 30}}>
          {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Catlog")}}>  */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={All} />
            <Text>All</Text>
          </View>
          {/* </TouchableOpacity> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec2} />
            <Text>Bouquet</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec3} />
            <Text>Table</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec4} />
            <Text>Aisle</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec1} />
            <Text>Access</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec2} />
            <Text>Bouquet</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec3} />
            <Text>Table</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec4} />
            <Text>Aisle</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 55,
              marginRight: 14,
            }}>
            <Image source={rec1} />
            <Text>Access</Text>
          </View>
        </ScrollView>

        <Text
          style={{
            marginTop: 30,
            fontWeight: '400',
            fontSize: 20,
            color: 'black',
          }}>
          Popularity
        </Text>
        <ScrollView horizontal>
          <View style={style.card}>
            <Image
              style={{height: 149, width: 287, borderRadius: 6}}
              source={bot1}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View>
                <Text>Spark</Text>
                <Text>$90</Text>
              </View>
              <Image source={start} />
            </View>
          </View>
          <View style={style.card}>
            <Image
              style={{height: 149, width: 287, borderRadius: 6}}
              source={bot2}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View>
                <Text>Spark</Text>
                <Text>$90</Text>
              </View>
              <Image source={start} />
            </View>
          </View>
          <View style={style.card}>
            <Image
              style={{height: 149, width: 287, borderRadius: 6}}
              source={bot3}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View>
                <Text>Spark</Text>
                <Text>$90</Text>
              </View>
              <Image source={start} />
            </View>
          </View>

          <View style={style.card}>
            <Image
              style={{height: 149, width: 287, borderRadius: 6}}
              source={bot4}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View>
                <Text>Spark</Text>
                <Text>$90</Text>
              </View>
              <Image source={start} />
            </View>
          </View>

          <View style={style.card}>
            <Image
              style={{height: 149, width: 287, borderRadius: 6}}
              source={bot5}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View>
                <Text>Spark</Text>
                <Text>$90</Text>
              </View>
              <Image source={start} />
            </View>
          </View>

          <View style={style.card}>
            <Image
              style={{height: 149, width: 287, borderRadius: 6}}
              source={bot6}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View>
                <Text>Spark</Text>
                <Text>$90</Text>
              </View>
              <Image source={start} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  card: {
    width: 311,
    height: 237,

    /* White */

    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    marginTop: 34,
    padding: 10,
    marginLeft: 10,
    marginRight: 15,
  },
});
export default Wedding;
