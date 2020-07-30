import React from 'react';
import { render } from '@testing-library/react';

import SfBusPage from './sf-bus-page';

describe(' SfBusPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SfBusPage />);
    expect(baseElement).toBeTruthy();
  });
});
