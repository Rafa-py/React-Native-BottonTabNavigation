import React from "react"
import {View, Text, StyleSheet } from 'react-native';

export default function button({name}) {
  let [timer, setTimer] = React.useState(null);
  React.useEffect(()=>{
    setTimeout(()=>{
      setTimer(timer + 1)
    },1000)
  }) 

  return (
    <View>
      <Text style={styles.timer}>{timer}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  timer: {
    fontSize: 100,
    fontWeight: 500,
    color: "#042940"
  },
});