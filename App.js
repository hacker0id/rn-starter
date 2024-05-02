import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from "./src/screens/ListScreen";
import ImagesScreen from "./src/screens/ImagesScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorsScreen";
import SquareScreen from "./src/screens/SquareScreen";
import InputScreen from "./src/screens/InputScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Comps: ComponentsScreen,
    List: ListScreen,
    Image: ImagesScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Input: InputScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
