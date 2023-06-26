import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import IconBack from '../images/iconBack.png';

import Icon from '../images/Icon.png';

import vec from '../images/vec.png';

import CartIcom from '../images/cart.png';
import { TextInput } from 'react-native-gesture-handler';

interface Istate {
  apiData: any;
  search:any;
}
interface Iprops {
  navigation: any;
}

export class Catlog extends Component<Iprops, Istate> {
  state = {
    search:"",
    apiData: [],
  };

  onSearch=(text:any)=>{
    this.setState({search:text})

  }

  onNext = (item: any) => {
    console.log(item);

    this.props.navigation.navigate('ItemDetails',{...item});
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    if (res.ok) {
      const data = await res.json();
      this.setState({apiData: data.products});
    }
  }
  
  render() {
    const {apiData,search} = this.state;
   const filterData=apiData.filter((each:any)=>
    
    each.title.toLowerCase().includes((search.trim()).toLowerCase())
   )
   console.log("main",filterData);
   
    return (
      <View style={{padding: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image style={{marginTop: 14}} source={IconBack} />
            <Text style={{marginLeft: 20, fontSize: 20, color: 'black',marginTop:8}}>
              Bridal Bouquet
            </Text>
          </View>
          <TextInput onChangeText={this.onSearch} placeholder='search'/>
          <Image style={{marginTop: 14}} source={Icon} />
        </View>
        <View
          style={{
            marginTop: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black', fontSize: 18}}>Catlog</Text>
          <Image source={vec} />
        </View>
        <FlatList
          data={filterData}
          numColumns={2}
          renderItem={({item}: {item: any}) => (
            <TouchableOpacity
              onPress={() => {
                this.onNext(item);
              }}>
              <View style={style.card}>
                <Image
                  style={style.image}
                  source={{uri: `${item.thumbnail}`}}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 12,
                  }}>
                  <View>
                    <Text>{item.title}</Text>
                    <Text style={{color:"#9682B6"}}>$90</Text>
                  </View>
                  <Image
                    style={{
                      height: 20,
                      width: 15,
                      marginTop:10,
                    }}
                    source={CartIcom}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  card: {
    width: 168.5,
    height: 176,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    margin: 15,
  },
  image: {
    height: 117,
    width: 151,
    borderRadius: 10,
  },
});

export default Catlog;
