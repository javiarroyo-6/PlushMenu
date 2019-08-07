import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "../Screens/HomeScreen";
import MenuScreen from "../Screens/MenuScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import DashboardScreen from "../Screens/DashboardScreen";

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Menu: { screen: MenuScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: DashboardStackNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;

// adding navigationOptions to the navigators requires defaultNavigationOptions while individual screens require "static navigation"
