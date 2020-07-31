import React from 'react';
import { render } from '@testing-library/react';

import SfBusToolbar from './sf-bus-toolbar';

describe(' SfBusToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SfBusToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
