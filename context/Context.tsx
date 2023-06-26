import React from 'react';
const Context = React.createContext({
  array: [],
  onAddCart: (item: any) => {},
  onDelete:(id:any)=>{},
});
export default Context;
