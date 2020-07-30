import React from 'react';
import { render, screen } from '@testing-library/react';

import SfBusMap from './sf-bus-map';

describe(' SfBusMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SfBusMap />);
    expect(baseElement).toBeTruthy();
  });

  it('should display Google Maps', () => {
    render(<SfBusMap />);
    expect(screen.findByText('Map data')).toBeTruthy();
  });
});
