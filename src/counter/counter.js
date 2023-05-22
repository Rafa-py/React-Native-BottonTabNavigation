import React from "react"
import {View, Button, } from 'react-native';

export default function button({name}) {
  let [counter, setCounter] = React.useState(0);
  let handleClick = ()=> {
    setCounter(counter + 1)
  }
  return (
    <View>
      <Button title={`${counter}`} onPress={handleClick}/>
    </View>
  );
}
