// Markers.js
import React from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

export default function Markers({ place }) {
  return (
    <Marker
      coordinate={{
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng
      }}
    />
  );
}
