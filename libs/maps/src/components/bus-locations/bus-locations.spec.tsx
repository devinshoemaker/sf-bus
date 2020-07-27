import { useBusLocations } from '@sf-bus/core-data';
import { render } from '@testing-library/react';
import React from 'react';
import BusLocations from './bus-locations';

jest.mock('@sf-bus/core-data');

const setupGoogleMock = () => {
  const google = {
    maps: {
      Size: class {},
      Marker: class {
        setMap() {
          return;
        }

        setIcon() {
          return;
        }

        setPosition() {
          return;
        }
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  window.google = google;
};

const setupBusLocationsMock = () => {
  const data = {
    vehicle: [
      {
        id: '8830',
        lon: '-122.44339',
        routeTag: '91',
        predictable: 'true',
        speedKmHr: '2',
        dirTag: '91___O_N00',
        heading: '315',
        lat: '37.718761',
        secsSinceReport: '8',
      },
      {
        id: '8898',
        lon: '-122.487022',
        routeTag: 'N_OWL',
        predictable: 'true',
        speedKmHr: '6',
        dirTag: 'N____I_N00',
        heading: '75',
        lat: '37.7612499',
        secsSinceReport: '8',
      },
      {
        id: '8608',
        lon: '-122.420715',
        routeTag: 'L_OWL',
        predictable: 'true',
        speedKmHr: '0',
        dirTag: 'L____O_N00',
        heading: '218',
        lat: '37.80711',
        secsSinceReport: '8',
      },
    ],
  };

  (useBusLocations as jest.Mock).mockReturnValue({
    data: data,
    isLoading: false,
  });
};

describe(' BusLocations', () => {
  beforeAll(() => {
    setupGoogleMock();
    setupBusLocationsMock();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<BusLocations />);
    expect(baseElement).toBeTruthy();
  });
});
