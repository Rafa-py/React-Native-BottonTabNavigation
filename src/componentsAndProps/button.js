import {View, Button } from 'react-native';

export default function button({name}) {
  return (
    <View>
      <Button title={name}/>
    </View>
  );
}