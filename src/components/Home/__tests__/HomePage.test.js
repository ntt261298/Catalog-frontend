import React from 'react';
import { shallow } from 'configs';
import { HomePage } from 'components/Home/HomePage';

describe('components/Home/HomePage', () => {
  let wrapper;

  const setup = () => {
    wrapper = shallow(
      <HomePage />,
    );
  };

  it('should render Home page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
