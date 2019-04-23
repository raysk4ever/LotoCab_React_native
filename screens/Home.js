import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Text
} from "native-base";
import {
  Dimensions,
  Image,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const { height, width } = Dimensions.get("window");

export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      initPosition: {
        latitude: 27.2104726,
        longitude: 78.0049307,
        latitudeDelta: 0,
        longitudeDelta: 0
      }
    };
  }
  renderScreen = () => {
    return (
      <Container>
        <Content>
          <MapView
            style={{ height: height, width: width }}
            showsMyLocationButton={true}
            showsUserLocation={true}
            strokeWidth={5}
            provider={PROVIDER_GOOGLE}
            region={this.state.initPosition}
          >
            <MapView.Marker
              coordinate={{ latitude: 27.2104726, longitude: 78.0049307 }}
              rotation={45}
            >
              <Image
                source={require("../images/carmarker.png")}
                style={{ width: 50, height: 50 }}
              />
            </MapView.Marker>

            <MapView.Marker
              coordinate={{ latitude: 20.2104726, longitude: 78.0049307 }}
              rotation={45}
            >
              <Image
                source={require("../images/user.png")}
                style={{ width: 50, height: 50 }}
              />
            </MapView.Marker>
          </MapView>
        </Content>
      </Container>
    );
  };

  render() {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}
