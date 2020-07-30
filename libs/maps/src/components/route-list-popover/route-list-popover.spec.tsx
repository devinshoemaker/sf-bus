import React from 'react';
import { render } from '@testing-library/react';

import RouteListPopover from './route-list-popover';

describe(' RouteListPopover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouteListPopover />);
    expect(baseElement).toBeTruthy();
  });
});
