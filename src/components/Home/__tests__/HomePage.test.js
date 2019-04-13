import React from 'react';
import { shallow } from '../../../enzyme';
import { HomePage } from '../HomePage';

describe('src/components/Home/HomePage.js', () => {
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
