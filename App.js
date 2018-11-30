import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Routes from "./routes";

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
