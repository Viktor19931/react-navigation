import {createStackNavigator, createAppContainer} from "react-navigation";
import LoginScreen from "../screens/LoginScreen/index";
import Tabs from "./Tabs";

const AppStackNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    HomeScreen: Tabs,
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#f4511e',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const App = createAppContainer(AppStackNavigator)

export default App
