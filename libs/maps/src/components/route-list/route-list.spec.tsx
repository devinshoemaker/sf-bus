import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import RouteList from './route-list';

describe(' RouteList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <RouteList searchText={''} />
      </RecoilRoot>
    );
    expect(baseElement).toBeTruthy();
  });
});
