import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from "./src/simpleForms/simpleForm";
import Button from "./src/componentsAndProps/button";
import Counter from "./src/counter/counter"
import Timer from "./src/timer/timer"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
