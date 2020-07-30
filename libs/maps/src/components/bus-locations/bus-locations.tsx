import { Marker } from '@react-google-maps/api';
import { useBusLocations } from '@sf-bus/core-data';
import React from 'react';

interface Bus {
  id: string;
  lat: string;
  lon: string;
}

export const BusLocations = () => {
  const { data, isLoading } = useBusLocations();

  if (!isLoading) {
    return data.vehicle.map((vehicle: Bus) => (
      <Marker
        key={vehicle.id}
        icon={{
          url: 'https://unpkg.com/ionicons@5.1.2/dist/svg/bus.svg',
          scaledSize: new window.google.maps.Size(30, 30),
        }}
        position={{
          lat: parseFloat(vehicle.lat),
          lng: parseFloat(vehicle.lon),
        }}
      />
    ));
  } else {
    return null;
  }
};

export default BusLocations;
