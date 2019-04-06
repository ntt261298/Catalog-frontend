import React from 'react';
import { shallow } from '../../../enzyme';
import { UserPage } from '../UserPage';

describe('src/components/user/UserPage.js', () => {
  let wrapper;

  const setup = () => {
    wrapper = shallow(
      <UserPage />,
    );
  };

  it('should render user page', () => {
    setup();
    // Expect the wrapper object to be defined
    expect(wrapper).toMatchSnapshot();
  });
});
