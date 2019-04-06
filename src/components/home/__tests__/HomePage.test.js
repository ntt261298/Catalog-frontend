import React from 'react';
import { shallow } from '../../../enzyme';
import { HomePage } from '../HomePage';

describe('src/components/home/HomePage.js', () => {
  let wrapper;

  const setup = () => {
    wrapper = shallow(
      <HomePage />,
    );
  };

  it('should render home page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
