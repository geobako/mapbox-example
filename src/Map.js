/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import CustomMarker from './components/CustomMarker';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ2VvYmFrbyIsImEiOiJja2U1a21zcGIwM3FsMnJtaW5lNnIxY3hqIn0.0uIe8xPOR1lBnR92JIeSvg',
);

MapboxGL.setTelemetryEnabled(false);

let light = 'mapbox://styles/geobako/ck3vgcvi11vj81cp65un7bz6t';
let dark = 'mapbox://styles/geobako/ck3vg5xto0lw41cmp6hc658yw';

const Map = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [mapStyle, setMapStyle] = useState(dark);

  const requestPermission = async () => {
    const isGranted = await MapboxGL.requestAndroidLocationPermissions();
    setHasPermission(true);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const changeTheme = () => {
    console.log(2);
    if (mapStyle === dark) {
      setMapStyle(light);
    } else {
      setMapStyle(dark);
    }
  };

  let lineFeature = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [23.658462, 37.918323],

            [23.670662, 37.774166],
          ],
        },
      },
    ],
  };

  return hasPermission ? (
    <View style={styles.screen}>
      <MapboxGL.MapView
        showUserLocation={true}
        logoEnabled={false}
        compassEnabled={true}
        styleURL={mapStyle}
        style={{
          flex: 1,
          ...StyleSheet.absoluteFillObject,
        }}>
        <MapboxGL.UserLocation />
        {/* <MapboxGL.MarkerView
          anchor={{x: 0.5, y: 0.5}}
          coordinate={[23.658462, 37.918323]}>
          <View
            style={{width: 5, height: 10, backgroundColor: 'yellow'}}
            pointerEvents="none" // this is important for the onPress prop of ShapeSource to work
          ></View>
        </MapboxGL.MarkerView> */}
        <CustomMarker>
          <MapboxGL.SymbolLayer
            id={'123'}
            sourceID="markersShape"
            style={{
              iconImage: require('./ship.png'),
              iconSize: 0.1,
              iconAllowOverlap: true,
            }}></MapboxGL.SymbolLayer>
        </CustomMarker>
        <MapboxGL.ShapeSource id="line1" shape={lineFeature}>
          <MapboxGL.LineLayer
            id="linelayer1"
            style={{lineColor: 'yellow', lineDasharray: [2, 2, 1]}}
          />
        </MapboxGL.ShapeSource>
      </MapboxGL.MapView>
      <View style={{position: 'absolute', top: 10, left: 20}}>
        <Button
          onPress={changeTheme}
          title={mapStyle === dark ? 'Light mode' : 'Dark Mode'}
          color={mapStyle === dark ? 'gray' : 'black'}
        />
      </View>
    </View>
  ) : (
    <View style={styles.screen}>
      <Text>Requesting permission</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Map;
