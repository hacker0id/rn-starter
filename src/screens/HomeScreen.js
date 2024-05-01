import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
  return <View style={{ marginVertical: 100 }}>
    <Button title="Go To Components Screen"
      onPress={
        () => props.navigation.navigate('Comps')
      }
    />

    <Button title="Go To Lists Screen"
      onPress={
        () => props.navigation.navigate('List')
      }
    />


    <Button title="Go To Images Screen"
      onPress={
        () => props.navigation.navigate('Image')
      }
    />


    <Button title="Go To Counter Screen"
      onPress={
        () => props.navigation.navigate('Counter')
      }
    />

    <Button title="Go To Color Screen"
      onPress={
        () => props.navigation.navigate('Color')
      }
    />

    <Button title="Go To Square Screen"
      onPress={
        () => props.navigation.navigate('Square')
      }
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
