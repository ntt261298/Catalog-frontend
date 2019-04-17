import React from 'react';
import { shallow } from 'enzymeConfig';
import { Page404 } from 'components/Layout/404';

describe('components/Layout/404', () => {
  let wrapper;

  const setup = () => {
    wrapper = shallow(
      <Page404 />,
    );
  };

  it('should render 404 page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
