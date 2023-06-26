import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import ContextObject from '../context/Context';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Cart extends Component {
  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          console.log(value.array);

          return (
            <View style={{padding: 15}}>
              <Text style={{fontSize: 24}}>Cart</Text>
              <FlatList
                data={value.array}
                renderItem={({item}: {item: any}) => (
                  <View style={style.card}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image
                        style={style.image}
                        source={{uri: `${item.thumbnail}`}}
                      />
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginLeft: 80,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 22,
                            fontWeight: 'bold',
                          }}>
                          {item.title}
                        </Text>
                        <Text style={{ color: 'black'}}>
                          {item.brand}
                        </Text>
                        <Text style={{ color: 'black'}}>
                          {item.category}
                        </Text>
                        <Text style={{fontSize: 24, color: 'black'}}>
                          ${item.Amount}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            value.onDelete(item.id);
                          }}>
                          <Text>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={{color: 'black',marginBottom:40}}>Qty : {item.quantity}</Text>
                  </View>
                )}
              />
            </View>
          );
        }}
      </ContextObject.Consumer>
    );
  }
}
const style = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    margin: 10,
  },
  image: {
    height: 90,
    width: 70,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'greay',
  },
});
export default Cart;
