import React, { Component } from "react";
import { Image } from "react-native";
import { Content, Card, CardItem, Text, Body } from "native-base";

class OverlayComponent extends Component {
  render() {
    return (
      <Content style={{ width: 280, height: 100 }}>
        <Card>
          <CardItem header bordered button onPress={this.props.showMapfun}>
            <Text>Exit</Text>
          </CardItem>
          <CardItem bordered>
            <Image
              source={require("../Images/india.png")}
              style={{ height: 120, width: 100 }}
            />
            <Text>India</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>Text 1</Text>
              <Text>Text 2</Text>
              <Text>Text 3</Text>
              <Text>Text 4</Text>
              <Text>Text 5</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>Text 1</Text>
              <Text>Text 2</Text>
              <Text>Text 3</Text>
              <Text>Text 4</Text>
              <Text>Text 5</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default OverlayComponent;
