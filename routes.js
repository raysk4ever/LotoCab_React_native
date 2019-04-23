import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Home from "./screens/Home";
import Wallet from "./screens/Wallet";
import SideMenu from "./sideMenu/SideMenu";

const navigate = createStackNavigator({
  Home: { screen: Home },
  Wallet: { screen: Wallet }
});

const stack = createDrawerNavigator(
  {
    navigate: { screen: navigate }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300
  }
);

export default stack;
