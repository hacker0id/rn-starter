// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import HomeScreen from "./src/screens/HomeScreen";
// import ComponentsScreen from './src/screens/ComponentsScreen';
// import ListScreen from "./src/screens/ListScreen";
// import ImagesScreen from "./src/screens/ImagesScreen";
// import CounterScreen from "./src/screens/CounterScreen";
// import ColorScreen from "./src/screens/ColorsScreen";
// import SquareScreen from "./src/screens/SquareScreen";
// import InputScreen from "./src/screens/InputScreen";

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Comps: ComponentsScreen,
//     List: ListScreen,
//     Image: ImagesScreen,
//     Counter: CounterScreen,
//     Color: ColorScreen,
//     Square: SquareScreen,
//     Input: InputScreen
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "App",
//     },
//   }
// );

// export default createAppContainer(navigator);



// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/SecondScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;