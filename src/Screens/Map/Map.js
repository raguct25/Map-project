import React, { Component } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import OverlayComponent from "../../Components/OverlayComponent";
import styles from "./MapStyles";

export default class Map extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { showCard: true };
  }

  showMapData = () => {
    this.setState({ showCard: false });
  };

  render() {
    const { showCard } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 11.004556,
            longitude: 76.961632,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />
        {showCard ? <OverlayComponent showMapfun={this.showMapData} /> : null}
      </View>
    );
  }
}
