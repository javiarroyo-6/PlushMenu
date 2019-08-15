import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import MenuScreen from '../Screens/MenuScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import FoodScreen from '../Screens/FoodScreen';
import DrinksScreen from '../Screens/DrinksScreen';
import BarScreen from '../Screens/BarScreen';
import DashboardScreen from '../Screens/DashboardScreen';

//Create HomeStack
//Create ProfileStack

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={25} />
      };
    }
  }
});

const ProfileStackNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen
  }
});

const MenuStackNavigator = createStackNavigator({
  Menu: {
    screen: MenuScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Menu'
      };
    }
  },
  Food: { screen: FoodScreen },
  Drinks: { screen: DrinksScreen },
  Bar: { screen: BarScreen }
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    HomeStackNavigator,
    MenuStackNavigator,
    ProfileStackNavigator
  },
  {
    navigationOptions: ({ navigation }) => {
      // const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null
        // headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: DashboardStackNavigator }
  },
  {
    initialRouteName: 'Dashboard'
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;

// adding navigationOptions to the navigators requires defaultNavigationOptions while individual screens require "static navigation"
