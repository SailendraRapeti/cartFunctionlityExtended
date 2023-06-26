import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Context from './Context';
interface Iprops {
  children: any;
}
interface Istate {
  array: any;
}

class Providerr extends Component<Iprops, Istate> {
  state = {
    array: [],
  };

  onAddCart = (item: any) => {
    let isDataPresent = false;
    const updatedData = this.state.array.map((each: any) => {
      if (each.id === item.id) {
        isDataPresent = true;
        if (each.quntity === item.quntity) {
          return {
            ...item,
            quntity: item.quntity + 1,
          };
        }
        return item;
      }
      return each;
    });
    if (isDataPresent) {
      isDataPresent = false;
      this.setState({array: updatedData});
    } else {
      this.setState({array: [...this.state.array, item]});
    }
    // const list = [...this.state.array, item];
    // this.setState({array: list});
  };

  onDelete=(id:any)=>{
    console.log(id)
    const filterData=this.state.array.filter((each:any)=>{
      each.id !== id
    })
    this.setState({array:filterData})
  }

  render() {
    // console.log("fdgjfg",this.state.array)
    return (
      <Context.Provider
        value={{
          array: this.state.array,
          onAddCart: this.onAddCart,
          onDelete:this.onDelete,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Providerr;
