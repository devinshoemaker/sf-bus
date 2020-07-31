import { Marker } from '@react-google-maps/api';
import { useBusLocations } from '@sf-bus/core-data';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import routeTagsState from '../../atoms/route-tags-state';
import { Bus } from '../../interfaces/bus';
import BusPopover from '../bus-popover/bus-popover';

export const BusLocations = () => {
  const [routeTags] = useRecoilState(routeTagsState);
  const { data, isLoading } = useBusLocations();

  const [showPopover, setShowPopover] = useState(false);
  const [selectedBus, setSelectedBus] = useState<Bus>({});

  const selectBus = (bus: Bus) => {
    setShowPopover(true);
    setSelectedBus(bus);
  };

  if (!isLoading) {
    return (
      <>
        {data.vehicle
          .filter((vehicle: Bus) =>
            routeTags.length > 0
              ? routeTags.includes(vehicle.routeTag)
              : vehicle
          )
          .map((vehicle: Bus) => (
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
              onClick={(e) => selectBus(vehicle)}
            />
          ))}
        <BusPopover
          showPopover={showPopover}
          onDidDismiss={() => setShowPopover(false)}
          selectedBus={selectedBus}
        />
      </>
    );
  } else {
    return null;
  }
};

export default BusLocations;
