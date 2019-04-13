import React from 'react';
import { shallow } from '../../../enzyme';
import { UserPage } from '../UserPage';

describe('src/components/User/UserPage.js', () => {
  let wrapper;

  const setup = () => {
    wrapper = shallow(
      <UserPage />,
    );
  };

  it('should render User page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
