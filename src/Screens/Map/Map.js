import React, { Component } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import OverlayComponent from "../../Components/OverlayComponent";
import styles from "./MapStyles";
import Geocoder from "react-native-geocoding";

export default class Map extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showCard: true,
      region: {
        latitude: 11.0344,
        longitude: 77.0378,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      },
      address: null
    };
  }

  showMapData = () => {
    this.setState({ showCard: false });
  };

  showCard = () => {
    this.setState({ showCard: true });
  };

  componentDidMount() {
    Geocoder.init("AIzaSyA1LynaysP8AJzAjY4ukmLwuyTYxPqroi0");
    navigator.geolocation
      .getCurrentPosition(position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }
        });
      })
      .catch(error => {
        console.log(error);
      });

    const { latitude, longitude } = this.state.region;
    Geocoder.from(latitude, longitude)
      .then(res => {
        this.setState({ address: res.results[0].formatted_address });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { showCard, region, address } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={region}
        >
          <MapView.Marker coordinate={region} onPress={this.showCard} />
        </MapView>
        {showCard ? (
          <OverlayComponent showMapfun={this.showMapData} address={address} />
        ) : null}
      </View>
    );
  }
}
