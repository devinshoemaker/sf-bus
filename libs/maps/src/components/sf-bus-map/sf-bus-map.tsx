import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
import BusLocations from '../bus-locations/bus-locations';

const containerStyle = {
  width: '100%',
  height: '100%',
};

// Center of San Fransisco
const center = {
  lat: 37.756,
  lng: -122.44,
};

export const SfBusMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NX_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <BusLocations />
      </GoogleMap>
    </LoadScript>
  );
};

export default SfBusMap;
