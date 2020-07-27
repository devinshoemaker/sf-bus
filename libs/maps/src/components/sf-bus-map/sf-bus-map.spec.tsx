import React from 'react';
import { render } from '@testing-library/react';

import SfBusMap from './sf-bus-map';

describe(' SfBusMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SfBusMap />);
    expect(baseElement).toBeTruthy();
  });
});
