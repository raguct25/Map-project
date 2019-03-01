import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Map from "./src/Screens/Map";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mapShow: true };
  }
  mapOpen = () => {
    this.setState({ mapShow: false });
  };

  render() {
    const { mapShow } = this.state;
    return (
      <View style={styles.container}>
        {mapShow ? (
          <Button onPress={this.mapOpen} title="Open Map" color="#841584" />
        ) : (
          <Map />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
