import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  ListItem,
  List,
  Left,
  Body,
  Icon,
  Button,
  Header,
  Thumbnail,
  Subtitle,
  Right,
  Title,
  Separator
} from "native-base";

export default class SideMenu extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Header noShadow>
            <Left>
              <Thumbnail small source={require("../images/user.png")} />
            </Left>
            <Body>
              <Title>My Profile</Title>
              <Subtitle>7830871757</Subtitle>
            </Body>
            <Right>
              <Icon
                name="arrow-right-bold-circle-outline"
                type="MaterialCommunityIcons"
              />
            </Right>
          </Header>

          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="cards" type="MaterialCommunityIcons" />
              </Left>
              <Body>
                <Text>Ola Pass</Text>
              </Body>
            </ListItem>

            <ListItem icon noBorder>
              <Left>
                <Icon name="cards-outline" type="MaterialCommunityIcons" />
              </Left>
              <Body>
                <Text>Share Pass</Text>
              </Body>
            </ListItem>

            <ListItem icon noBorder>
              <Left>
                <Icon name="car" type="MaterialCommunityIcons" />
              </Left>
              <Body>
                <Text>Book Your Ride</Text>
              </Body>
            </ListItem>

            <ListItem icon noBorder>
              <Left>
                <Icon name="clock" type="MaterialCommunityIcons" />
              </Left>
              <Body>
                <Text>Your Rides</Text>
              </Body>
            </ListItem>

            <ListItem icon noBorder>
              <Left>
                <Icon
                  name="information-outline"
                  type="MaterialCommunityIcons"
                />
              </Left>
              <Body>
                <Text>Know Your Ride</Text>
              </Body>
            </ListItem>

            <ListItem
              icon
              noBorder
              style={{ borderBottomWidth: 1, borderBottomColor: "#eee" }}
            >
              <Left>
                <Icon name="credit-card-plus" type="MaterialCommunityIcons" />
              </Left>
              <Body>
                <Text>Rate Card</Text>
              </Body>
            </ListItem>

            <ListItem icon noBorder>
              <Left>
                <Icon name="google-wallet" type="MaterialCommunityIcons" />
              </Left>
              <Body>
                <Text>Wallet</Text>
              </Body>
              <Right />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
