import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { UrlTile, Region } from 'react-native-maps';

const Map: React.FC = () => {

  const initialRegion: Region = {
    latitude: 37.3773, 
    longitude: -3.2192, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={initialRegion}
      >
        <UrlTile
          urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;