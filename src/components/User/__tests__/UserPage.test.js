import React from 'react';
import { shallow } from 'configs';
import { UserPage } from 'components/User/UserPage';

describe('components/User/UserPage', () => {
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
