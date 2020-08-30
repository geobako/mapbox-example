import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const CustomMarker = (props) => {
  const {coordinates} = props;

  const features = [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [23.658462, 37.918323],
      },
    },
  ];
  return (
    <MapboxGL.ShapeSource
      id="markers_shapesource"
      shape={{type: 'FeatureCollection', features}}>
      {props.children}
    </MapboxGL.ShapeSource>
  );
};

export default CustomMarker;
