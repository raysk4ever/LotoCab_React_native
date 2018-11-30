import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Home from "./screens/Home";
import Wallet from "./screens/Wallet";
import sideMenu from "./screens/sideMenu";

const navigate = createStackNavigator({
  Home: { screen: Home },
  Wallet: { screen: Wallet }
});

const stack = createDrawerNavigator(
  {
    navigate: { screen: navigate }
  },
  {
    contentComponent: sideMenu,
    drawerWidth: 250,
    gesturesEnabled: false
  }
);

export default stack;
