import {createBottomTabNavigator} from "react-navigation";
import ExampleScreen from "../screens/ExampleScreen/index";
import HomeScreen from "../screens/HomeScreen/index";

const routeConfigs = {
  Home: {
    screen: ExampleScreen,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  Alerts: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  Explore: {
    screen: ExampleScreen,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
  Profile: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerBackTitle: null
    }),
  },
}

const navigatorConfig = {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  order: ['Home', 'Alerts', 'Explore', 'Profile'],
  tabBarOptions: {
    activeTintColor: '#91ee46',
    activeBackgroundColor: '#e4ffde',
    inactiveTintColor: '#ffb0a2',
    inactiveBackgroundColor: '#9f89ee',
    showLabel: true,
    showIcon: true,
  }
}

const Tabs = createBottomTabNavigator(routeConfigs, navigatorConfig);

export default Tabs
