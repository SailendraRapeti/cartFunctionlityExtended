import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import start from '../images/star.png';
import button from '../images/button.png';
import ContextObject from '../context/Context';

interface Iprops {
  navigation?: any;
  route: any;
}
interface Istate {
  count: number;
  total: number;
}

class ItemDetails extends Component<Iprops, Istate> {
  state = {
    count: 1,
    total: 90,
  };
  // static contextType=ContextObject

  Increas = () => {
    this.setState({count: this.state.count + 1});
    this.setState({total: this.state.total + 90});
  };
  Decrease = () => {
    this.setState({count: this.state.count - 1});
    this.setState({total: this.state.total - 90});
  };

  // cart=()=>{
  //     // this.props.navigation.navigate("Cart")
  //     this.context.onAddCart(this.props.route.params)
  // }
  render() {
    const result = this.props.route.params;
    // console.log('sai', result);
    return (
      <ContextObject.Consumer>
        {value => {
          return (
            <View>
              <View>
                <Image
                  style={style.ima}
                  source={{uri: `${result.thumbnail}`}}
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{padding: 10}}>
                  <Text style={{color: 'black', fontSize: 20, marginTop: 7}}>
                    Spark
                  </Text>
                  <Text style={{color: 'black', marginTop: 7}}>
                    Availability
                  </Text>
                  <Text style={{color: 'black', marginTop: 7}}>Rating</Text>
                </View>
                <View style={{padding: 10}}>
                  <Text style={{fontSize: 20, marginTop: 7, marginLeft: 25}}>
                    $90
                  </Text>
                  <Text style={{color: 'green', marginTop: 7, marginLeft: 25}}>
                    In Stock
                  </Text>
                  <Image style={{marginTop: 5}} source={start} />
                </View>
              </View>
              <View style={style.line}></View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginTop: 17, padding: 10}}>
                  <Text
                    style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                    Quantity
                  </Text>
                </View>
                <View style={style.card}>
                  <TouchableOpacity onPress={this.Decrease}>
                    <Text>--</Text>
                  </TouchableOpacity>
                  <View style={style.card1}>
                    <Text style={{marginLeft: 11}}>{this.state.count}</Text>
                  </View>
                  <TouchableOpacity onPress={this.Increas}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 13,
                  padding: 10,
                }}>
                <Text
                  style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
                  Total
                </Text>
                <Text style={{fontSize: 24}}>${this.state.total}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  value.onAddCart({...result,quantity:this.state.count,Amount:this.state.total});
                }}>
                <Image
                  style={{marginLeft: 100, marginTop: 20}}
                  source={button}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      </ContextObject.Consumer>
    );
  }
}
const style = StyleSheet.create({
  ima: {
    height: 400,
    width: '100%',
  },
  line: {
    width: 361,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#818A98',
    marginLeft: 20,
    marginTop: 30,
  },
  card: {
    backgroundColor: 'rgba(129, 138, 152, 0.2)',
    borderRadius: 7,
    width: 126,
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    marginTop: 30,
    marginRight: 8,
  },
  card1: {
    width: 40,
    height: 28,
    borderStartColor: '#F4F4F4',
    borderRadius: 7,
  },
});
export default ItemDetails;
