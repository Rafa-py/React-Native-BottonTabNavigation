import React from "react"
import {View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import bg from "./bg.jpg"

export default function simpleForm() {
  let [name, onChangeName] = React.useState(null)

  return (
    <View style={styles.container}>
       <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
          <SafeAreaView style={styles.form}>
              <TextInput
                style={styles.input}
                onChangeText={text => onChangeName(text)}
                placeholder="Nome"
              />
          </SafeAreaView>
          {name && <Text style={styles.msg}>{name}</Text>}
          {lastName && <Text style={styles.msg}>{lastName}</Text>}
       </ImageBackground>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 420,
    justifyContent: 'center',
    alignItems: "center",
  },
  form: {
    margin: 40,
  },
  input: {
    borderRadius: 59, 
    margin: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    fontSize: 18,
    width: 300,
  },
  msg: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold"
  }
});
