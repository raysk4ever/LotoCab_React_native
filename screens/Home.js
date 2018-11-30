import React, { Component } from "react";
import {
  Body,
  Container,
  List,
  ListItem,
  Text,
  Right,
  Icon,
  Content,
  Button,
  Left,
  Switch,
  Thumbnail,
  Badge
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Home extends Component {
  render() {
    const dataList = [
      { name: "ravi", marks: 20, image: "https://www.picsum.photos/80" },
      { name: "shail", marks: 100, image: "https://www.picsum.photos/80" },
      { name: "ravi", marks: 20, image: "https://www.picsum.photos/80" },
      { name: "shail", marks: 100, image: "https://www.picsum.photos/80" },
      { name: "ravi", marks: 20, image: "https://www.picsum.photos/80" },
      { name: "shail", marks: 100, image: "https://www.picsum.photos/80" },
      { name: "ravi", marks: 20, image: "https://www.picsum.photos/80" },
      { name: "shail", marks: 100, image: "https://www.picsum.photos/80" }
    ];
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" />
          </Left>
        </Header>
        <Content>
          <List
            dataArray={dataList}
            renderRow={item => (
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: "https://picsum.photos/50" }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                </Body>
                <Right>
                  <Badge backgroundColor={item.marks > 20 ? "blue" : "red"}>
                    <Text>{item.marks}</Text>
                  </Badge>
                </Right>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
